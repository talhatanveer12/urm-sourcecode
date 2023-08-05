import user from "../../assets/img/user.jpg";
import patient from "../../assets/img/patient-thumb-02.jpg";
import placeholderr from "../../assets/img/placeholder.jpg";
import { NavLink, Outlet } from "react-router-dom";
import "../../assets/css/style2.css";
// import Attachments from "../../assets/img/attachment.png";
import "../../assets/css/style2.css";
import { useDispatch, useSelector } from "react-redux";
import socket from "../../Socket";
import { useEffect } from "react";
import { chatActions } from "../../Redux/Chat/chatSlice";
import { getChatUser } from "../../Redux/Chat/chatAction";
function Chat() {
  const dispatch = useDispatch();
  const { chatUser } = useSelector((state) => state.Chat);

  // Listen for the "user_connected" event and dispatch an action to update the chat status
  useEffect(() => {
    socket.emit("connected", { user_id: localStorage.getItem("id") });
    socket.on("user_connected", (data) => {
      console.log("connected user ", data, "ssss");
      dispatch(chatActions.setChatOnline(data));
    });

    socket.on("disconnect_user", (data) => {
      console.log("disconnect user ", data, "ssss");
      dispatch(chatActions.setChatOffline(data));
    });

    // Emit "disconnected" event when the component is unmounted
    return () => {
      socket.emit("disconnected", { user_id: localStorage.getItem("id") });
    };
  }, [dispatch, socket]);

  // Fetch chatUser data when the component mounts
  useEffect(() => {
    dispatch(getChatUser());
  }, [dispatch]);
  return (
    <div className="main-wrapper">
      <div className="row">
        <div className="col-sm-12 text-center" style={{ marginTop: "10PX" }}>
          <h4 className="page-title">Chat</h4>
        </div>
      </div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li>
                <NavLink to="/">
                  <i className="fa fa-home back-icon"></i>{" "}
                  <span>Back to Home</span>
                </NavLink>
              </li>
              {/* <li className="menu-title">
                Chat Groups{" "}
                <NavLink
                  to="/chat"
                  className="add-user-icon"
                  data-toggle="modal"
                  data-target="#add_group"
                >
                  <i className="fa fa-plus"></i>
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/chat">#General</NavLink>
              </li>
              <li className="menu-title">
                Direct Chats{" "}
                <NavLink
                  to="/chat"
                  className="add-user-icon"
                  data-toggle="modal"
                  data-target="#add_chat_user"
                >
                  <i className="fa fa-plus"></i>
                </NavLink>
              </li>
              {chatUser &&
                chatUser.map((item) => {
                  return (
                    <>
                      <li>
                        <NavLink to={`/chat/${item.id}`}>
                          <span className="chat-avatar-sm user-img">
                            <img src={user} alt="" className="rounded-circle" />
                            <span className={`status ${item.is_online ? "online" : "offline"}`}></span>
                          </span>{" "}
                          {item.username}
                        </NavLink>
                      </li>
                    </>
                  );
                })}
              {/* <li>
                <NavLink to="/chat">
                  <span className="chat-avatar-sm user-img">
                    <img src={user} alt="" className="rounded-circle" />
                    <span className="status offline"></span>
                  </span>
                  Richard Miles{" "}
                  <span className="badge badge-pill bg-danger float-right">
                    18
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="chat">
                  <span className="chat-avatar-sm user-img">
                    <img src={user} alt="" className="rounded-circle" />
                    <span className="status away"></span>
                  </span>{" "}
                  John Smith
                </NavLink>
              </li>
              <li className="active">
                <NavLink to="/chat">
                  <span className="chat-avatar-sm user-img">
                    <img src={user} alt="" className="rounded-circle" />
                    <span className="status online"></span>
                  </span>
                  Jennifer{" "}
                  <span className="badge badge-pill bg-danger float-right">
                    108
                  </span>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Chat;
