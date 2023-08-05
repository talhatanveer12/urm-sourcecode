import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import patient from "../../assets/img/patient-thumb-02.jpg";
import placeholderr from "../../assets/img/placeholder.jpg";
import user from "../../assets/img/user.jpg";
import { useDispatch, useSelector } from "react-redux";
import socket from "../../Socket";
import { getChatUserAndChat } from "../../Redux/Chat/chatAction";
import moment from "moment/moment";

export default function ChatList() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { chat, userChat } = useSelector((state) => state.Chat);
  const { user } = useSelector((state) => state.Auth);
  console.log(id, "3434");
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    // Add logic to send the message via socket to the server
    console.log(message, "ssss");
    socket.emit("receive_message", {
      sender: localStorage.getItem("id"),
      receiver: id,
      message: message,
    });
    setMessage("");
    dispatch(getChatUserAndChat(id));
  };

  useEffect(() => {
    socket.on("message_receive", (data) => {
        console.log("connected user ", data, "ssss");
        dispatch(getChatUserAndChat(id));
      });
  },[dispatch,socket])

  useEffect(() => {
    dispatch(getChatUserAndChat(id));
  }, [dispatch, id]);
  return (
    <div className="page-wrapperr" key={userChat?.id ? userChat?.id : Math.random(2323)}>
      <div className="chat-main-row">
        <div className="chat-main-wrapper">
          <div
            className="col-lg-9 message-view chat-view"
            style={{ paddingLeft: "235px" }}
          >
            <div className="chat-window">
              <div className="fixed-header">
                <div className="navbar">
                  <div className="user-details mr-auto">
                    <div className="float-left user-img m-r-10">
                      <NavLink to="profile.html" title="Jennifer Robinson">
                        <img
                          src={user}
                          alt=""
                          className="w-40 rounded-circle"
                        />
                        <span className="status online"></span>
                      </NavLink>
                    </div>
                    <div className="user-info float-left">
                      <NavLink to="profile.html">
                        <span className="font-bold">{userChat?.username}</span>{" "}
                        {/* <i className="typing-text">Typing...</i> */}
                      </NavLink>
                      {/* <span className="last-seen">
                          Last seen today at 7:50 AM
                        </span> */}
                    </div>
                  </div>
                  <div className="search-box">
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <span className="input-group-append">
                        <button className="btn" type="button">
                          <i className="fa fa-search"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                  <ul className="nav custom-menu">
                    <li className="nav-item">
                      <NavLink
                        to="#chat_sidebar"
                        className="nav-link task-chat profile-rightbar float-right"
                        id="task_chat"
                      >
                        <i className="fa fa-user"></i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="voice-call.html">
                        <i className="fa fa-phone"></i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="video-call.html">
                        <i className="fa fa-video-camera"></i>
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown dropdown-action">
                      <NavLink
                        to="/chat"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-cog"></i>
                      </NavLink>
                      <div className="dropdown-menu dropdown-menu-right">
                        <NavLink
                          className="dropdown-item"
                          to="javascript:void(0)"
                        >
                          Delete Conversations
                        </NavLink>
                        <NavLink
                          className="dropdown-item"
                          to="javascript:void(0)"
                        >
                          Settings
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-contents">
                <div className="chat-content-wrap">
                  <div className="chat-wrap-inner">
                    <div className="chat-box">
                      <div className="chats">
                        {chat &&
                          chat.map((item) => {
                            return (
                              <>
                                <div
                                  className={
                                    item.sender_user_id === userChat.id
                                      ? "chat chat-left"
                                      : "chat chat-right"
                                  }
                                >
                                  <div className="chat-body">
                                    <div className="chat-bubble">
                                      <div className="chat-content">
                                        <p>{item.message}</p>
                                        <span className="chat-time">
                                          {moment
                                            .utc(
                                              item.created_at,
                                              "YYYY-MM-DDTHH:mm:ss.SSSSSSZ"
                                            )
                                            .fromNow()}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}

                        {/* <div className="chat-line">
                            <span className="chat-date">October 8th, 2015</span>
                          </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-footer">
                <div className="message-bar">
                  <div className="message-inner">
                    <NavLink
                      className="link attach-icon"
                      to="/chat"
                      data-toggle="modal"
                      data-target="#drag_files"
                    >
                      <img src="#" alt="" />
                    </NavLink>
                    <div className="message-area">
                      <div className="input-group">
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="form-control"
                          placeholder="Type message..."
                        ></textarea>
                        <span className="input-group-append">
                          <button
                            onClick={sendMessage}
                            className="btn btn-primary"
                          >
                            <i className="fa fa-send"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="drag_files" className="modal fade" role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Drag and drop files upload</h3>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form id="js-upload-form">
                <div className="upload-drop-zone" id="drop-zone">
                  <i className="fa fa-cloud-upload fa-2x"></i>{" "}
                  <span className="upload-text">
                    Just drag and drop files here
                  </span>
                </div>
                <h4>Uploading</h4>
                <ul className="upload-list">
                  <li className="file-list">
                    <div className="upload-wrap">
                      <div className="file-name">
                        <i className="fa fa-photo"></i> photo.png
                      </div>
                      <div className="file-size">1.07 gb</div>
                      <button type="button" className="file-close">
                        <i className="fa fa-close"></i>
                      </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <div className="upload-process">37% done</div>
                  </li>
                  <li className="file-list">
                    <div className="upload-wrap">
                      <div className="file-name">
                        <i className="fa fa-file"></i> task.doc
                      </div>
                      <div className="file-size">5.8 kb</div>
                      <button type="button" className="file-close">
                        <i className="fa fa-close"></i>
                      </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <div className="upload-process">37% done</div>
                  </li>
                  <li className="file-list">
                    <div className="upload-wrap">
                      <div className="file-name">
                        <i className="fa fa-photo"></i> dashboard.png
                      </div>
                      <div className="file-size">2.1 mb</div>
                      <button type="button" className="file-close">
                        <i className="fa fa-close"></i>
                      </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <div className="upload-process">Completed</div>
                  </li>
                </ul>
              </form>
              <div className="m-t-30 text-center">
                <button className="btn btn-primary submit-btn">
                  Add to upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="add_group" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Create a group</h3>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>
                Groups are where your team communicates. They’re best when
                organized around a topic — #leads, for example.
              </p>
              <form>
                <div className="form-group">
                  <label>
                    Group Name <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>
                    Send invites to:{" "}
                    <span className="text-muted-light">(optional)</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="m-t-50 text-center">
                  <button className="btn btn-primary submit-btn">
                    Create Group
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="add_chat_user" className="modal fade " role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Create Chat Group</h3>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input
                  placeholder="Search to start a chat"
                  className="form-control search-input"
                  id="btn-input"
                  type="text"
                />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <h5>Recent Conversations</h5>
                <ul className="chat-user-list">
                  <li>
                    <NavLink to="/chat">
                      <div className="media">
                        <span className="avatar align-self-center">J</span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                        <div className="text-nowrap align-self-center">
                          <div className="online-date">1 day ago</div>
                        </div>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/chat">
                      <div className="media ">
                        <span className="avatar align-self-center">B</span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Bernardo Galaviz</div>
                          <span className="designation">Web Developer</span>
                        </div>
                        <div className="align-self-center text-nowrap">
                          <div className="online-date">3 days ago</div>
                        </div>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/chat">
                      <div className="media">
                        <span className="avatar align-self-center">
                          <img src={user} alt="John Doe" />
                        </span>
                        <div className="media-body text-nowrap align-self-center">
                          <div className="user-name">John Doe</div>
                          <span className="designation">Web Designer</span>
                        </div>
                        <div className="align-self-center text-nowrap">
                          <div className="online-date">7 months ago</div>
                        </div>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="m-t-50 text-center">
                <button className="btn btn-primary submit-btn">
                  Create Group
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="share_files" className="modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Share File</h3>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="files-share-list">
                <div className="files-cont">
                  <div className="file-type">
                    <span className="files-icon">
                      <i className="fa fa-file-pdf-o"></i>
                    </span>
                  </div>
                  <div className="files-info">
                    <span className="file-name text-ellipsis">
                      AHA Selfcare Mobile Application Test-Cases.xls
                    </span>
                    <span className="file-author">
                      <NavLink to="/chat">Bernardo Galaviz</NavLink>
                    </span>{" "}
                    <span className="file-date">May 31st at 6:53 PM</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Share With</label>
                <input className="form-control" type="text" />
              </div>
              <div className="m-t-50 text-center">
                <button className="btn btn-primary submit-btn">Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notification-box">
        <div className="msg-sidebar notifications msg-noti">
          <div className="topnav-dropdown-header">
            <span>Messages</span>
          </div>
          <div className="drop-scroll msg-list-scroll" id="msg_list">
            <ul className="list-box">
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">R</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Richard Miles </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item new-message">
                    <div className="list-left">
                      <span className="avatar">J</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">John Doe</span>
                      <span className="message-time">1 Aug</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">T</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Tarah Shropshire </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">M</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Mike Litorus</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">C</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">
                        {" "}
                        Catherine Manseau{" "}
                      </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">D</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Domenic Houston </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">B</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Buster Wigton </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">R</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Rolland Webber </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">C</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Claire Mapes </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">M</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Melita Faucher</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">J</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Jeffery Lalor</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">L</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Loren Gatlin</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">T</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Tarah Shropshire</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <NavLink to="chat.html">See all messages</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
