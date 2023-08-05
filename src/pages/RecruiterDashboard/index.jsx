import doctor from "../../assets/img/doctor-03.jpg";
import "../../assets/css/style.css";
import "../../assets/css/style1.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
function RecrutierDashBoard() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h4 className="page-title">Recruiter Dashboard</h4>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg1">
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>98</h3>
                  <span className="widget-title1">
                    Recruited <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg2">
                  <i className="fa fa-user-o"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>1072</h3>
                  <span className="widget-title2">
                    Not Recruited{" "}
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="row">
              <div className="col-lg-6">
                <div className="card-box">
                  <div className="card-block">
                    <h5 className="text-bold card-title">Recruited</h5>
                    <div className="table-responsive">
                      <table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>923648638433</td>
                          </tr>
                          <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td>923648638433</td>
                          </tr>
                          <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td>923648638433</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-box">
                  <div className="card-block">
                    <h5 className="text-bold card-title">Not Recruited</h5>
                    <div className="table-responsive">
                      <table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>923648638433</td>
                          </tr>
                          <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td>923648638433</td>
                          </tr>
                          <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td>923648638433</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card-box">
              <div className="card-block">
                <h5 className="text-bold card-title">Number of Job Posting</h5>
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th>Jobs</th>
                        <th>Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Web Developer</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>Graphic Desighner</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <td>ML Engineer</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6">
              <div className="card-box">
                <h4 className="card-title">Details</h4>
                <form action="#">
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Full Name</label>
                    <div className="col-md-9">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                      Email Address
                    </label>
                    <div className="col-md-9">
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                      Phone Number
                    </label>
                    <div className="col-md-9">
                      <input type="number" className="form-control" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="text-right p-2">
                      <button type="submit" className="custom-btn ">
                        Create
                      </button>
                    </div>
                    <div className="text-right p-2">
                      <button type="submit" className="custom-btn ">
                        Update
                      </button>
                    </div>
                    <div className="text-right p-2">
                      <button type="submit" className="custom-btn ">
                        Read
                      </button>
                    </div>
                    <div className="text-right p-2">
                      <button type="submit" className="custom-btn ">
                        Delete
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-box">
                <div className="card-block">
                  <h5 className="text-bold card-title">
                    Matching Candidate List
                  </h5>
                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead>
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>923648638433</td>
                        </tr>
                        <tr>
                          <td>Mary</td>
                          <td>Moe</td>
                          <td>mary@example.com</td>
                          <td>923648638433</td>
                        </tr>
                        <tr>
                          <td>July</td>
                          <td>Dooley</td>
                          <td>july@example.com</td>
                          <td>923648638433</td>
                        </tr>
                        <tr>
                          <td>July</td>
                          <td>Dooley</td>
                          <td>july@example.com</td>
                          <td>923648638433</td>
                        </tr>
                        <tr>
                          <td>July</td>
                          <td>Dooley</td>
                          <td>july@example.com</td>
                          <td>923648638433</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row filter-row justify-content-center">
              <div
                className="chat-profile-img"
                style={{ paddingBottom: "0px" }}
              >
                <div
                  className="edit-profile-img"
                  style={{ paddingBottom: "20px" }}
                >
                  <NavLink
                    to="/editprofile"
                    className="btn btn-primary"
                    style={{ backgroundColor: "#009efb" }}
                  >
                    <i className="fa fa-pencil"></i>
                  </NavLink>
                </div>
                <div className="edit-profile-img">
                  <img src={doctor} alt="" />
                  <span className="change-img">Change Image</span>
                </div>
                <h3 className="user-name m-t-10 mb-0">Cristina Groves</h3>
                <small className="text-muted">Gynecologist</small>
              </div>

              <div className="d-flex justify-content-center">
                <div className="chat-profile-info">
                  <ul className="user-det-list">
                    <li>
                      <span>Username:</span>
                      <span className="float-right text-muted">
                        @cristina_groves
                      </span>
                    </li>
                    <li>
                      <span>DOB:</span>
                      <span className="float-right text-muted">3rd March</span>
                    </li>
                    <li>
                      <span>Email:</span>
                      <span className="float-right text-muted">
                        cristinagroves@example.com
                      </span>
                    </li>
                    <li>
                      <span>Phone:</span>
                      <span className="float-right text-muted">
                        {" "}
                        770-889-6484
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row filter-row justify-content-center">
            <div className="d-flex justify-content-center">
              <NavLink
                to="/chat"
                className="custom-btn  account-btn btn-link"
                style={{ marginBottom: "20px" }}
              >
                Chat Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecrutierDashBoard;
