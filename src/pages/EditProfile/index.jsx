import user from "../../assets/img/user.jpg";
import { NavLink } from "react-router-dom";
function EditProfile() {
  return (
    <div>
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
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                <h4 className="page-title" style={{ fontWeight: "bold" }}>
                  Edit Profile
                </h4>
              </div>
            </div>
            <form>
              <div className="card-box">
                <h3 className="card-title">Basic Informations</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-img-wrap">
                      <img className="inline-block" src={user} alt="user" />
                      <div className="fileupload btn">
                        <span className="btn-text">edit</span>
                        <input className="upload" type="file" />
                      </div>
                    </div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <label className="focus-label">First Name</label>
                            <input
                              type="text"
                              className="form-control floating"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <label className="focus-label">Last Name</label>
                            <input
                              type="text"
                              className="form-control floating"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <label className="focus-label">Birth Date</label>
                            <div className="cal-icon">
                              <input
                                className="form-control floating datetimepicker"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus select-focus">
                            <label className="focus-label">Gendar</label>
                            <select className="select form-control floating">
                              <option value="male selected">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-box">
                <h3 className="card-title">Contact Informations</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group form-focus">
                      <label className="focus-label">Address</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">State</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Country</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Pin Code</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Phone Number</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-box">
                <h3 className="card-title">Education Informations</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Institution</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Subject</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Starting Date</label>
                      <div className="cal-icon">
                        <input
                          type="text"
                          className="form-control floating datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Complete Date</label>
                      <div className="cal-icon">
                        <input
                          type="text"
                          className="form-control floating datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Degree</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Grade</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-box">
                <h3 className="card-title">Experience Informations</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Company Name</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Location</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Job Position</label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Period From</label>
                      <div className="cal-icon">
                        <input
                          type="text"
                          className="form-control floating datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-focus">
                      <label className="focus-label">Period To</label>
                      <div className="cal-icon">
                        <input
                          type="text"
                          className="form-control floating datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary submit-btn"
                  style={{
                    backgroundColor: "#009efb",
                    borderRadius: "30px",
                    minWidth: "fit-content",
                    padding: "10px 20px",
                  }}
                  type="button"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
