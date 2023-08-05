import { useSelector } from "react-redux";
import "../../assets/css/style2.css";
import doctor from "../../assets/img/doctor-03.jpg";
import { NavLink } from "react-router-dom";
function Profile() {
  const { user } = useSelector((state) => state.Auth);
  return (
    <div style={{ width: "100%", paddingTop: "20px" }}>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <NavLink to="/">
                    <i
                      className="fa fa-home back-icon"
                      style={{ color: "#888" }}
                    ></i>{" "}
                    <span className="ml-2" style={{ color: "#888" }}>
                      Back to Home
                    </span>
                  </NavLink>
                </li>
              </ul>

              <div className="col-sm-12 text-center">
                <h4 className="page-title" style={{ fontWeight: "bold" }}>
                  Profile
                </h4>
              </div>
            </div>
            <div className="card-box profile-header">
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-view">
                    <div className="profile-img-wrap">
                      <div className="profile-img">
                        <NavLink to="#">
                          <img className="avatar" src={doctor} alt="" />
                        </NavLink>
                      </div>
                    </div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="profile-info-left">
                            <h3 className="user-name m-t-0 mb-0">
                              {user?.username}
                            </h3>
                            <small className="text-muted">{user?.role}</small>
                            <div className="staff-id">
                              ID : {user?.id}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <ul className="personal-info">
                            {/* <li>
                              <span className="title">Phone:</span>
                              <span className="text">
                                <NavLink to="#">770-889-6484</NavLink>
                              </span>
                            </li> */}
                            <li>
                              <span className="title">Email:</span>
                              <span className="text">
                                <NavLink to="#">
                                  {user?.email}
                                </NavLink>
                              </span>
                            </li>
                            <li>
                              <span className="title">Birthday:</span>
                              <span className="text">{user?.dob}</span>
                            </li>
                            <li>
                              <span className="title">Address:</span>
                              <span className="text">
                                714 Burwell Heights Road, Bridge City, TX, 77611
                              </span>
                            </li>
                            <li></li>
                            {/* <li>
                              <span className="title">Gender:</span>
                              <span className="text">Female</span>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-tabs mt-3">
              <ul className="nav nav-tabs nav-tabs-bottom">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    to="#about-cont"
                    data-toggle="tab"
                  >
                    About
                  </NavLink>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane show active" id="about-cont">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card-box">
                        <h3 className="card-title">Education Informations</h3>
                        <div className="experience-box">
                          <ul className="experience-list">
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <NavLink to="#/" className="name">
                                    International College of Medical Science
                                    (UG)
                                  </NavLink>
                                  <div>MBBS</div>
                                  <span className="time">2001 - 2003</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <NavLink to="#/" className="name">
                                    International College of Medical Science
                                    (PG)
                                  </NavLink>
                                  <div>MD - Obstetrics & Gynaecology</div>
                                  <span className="time">1997 - 2001</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-box mb-0">
                        <h3 className="card-title">Experience</h3>
                        <div className="experience-box">
                          <ul className="experience-list">
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <NavLink to="#/" className="name">
                                    Consultant Gynecologist
                                  </NavLink>
                                  <span className="time">
                                    Jan 2014 - Present (4 years 8 months)
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <NavLink to="#/" className="name">
                                    Consultant Gynecologist
                                  </NavLink>
                                  <span className="time">
                                    Jan 2009 - Present (6 years 1 month)
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <NavLink to="#/" className="name">
                                    Consultant Gynecologist
                                  </NavLink>
                                  <span className="time">
                                    Jan 2004 - Present (5 years 2 months)
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="bottom-tab2">
                  Tab content 2
                </div>
                <div className="tab-pane" id="bottom-tab3">
                  Tab content 3
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
                    <NavLink to="/chat">
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
                    <NavLink to="/chat">
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
                    <NavLink to="/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Tarah Shropshire{" "}
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
                    <NavLink to="/chat">
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
                    <NavLink to="/chat">
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
                    <NavLink to="/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">D</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Domenic Houston{" "}
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
                    <NavLink to="/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">B</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Buster Wigton{" "}
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
                    <NavLink to="/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Rolland Webber{" "}
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
                    <NavLink to="/chat">
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
                    <NavLink to="/chat">
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
                    <NavLink to="/chat">
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
                    <NavLink to="/chat">
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
                    <NavLink to="/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            Tarah Shropshire
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
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <NavLink to="/chat">See all messages</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
