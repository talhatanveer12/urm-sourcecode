import "../../assets/css/style.css";
import "../../assets/css/style1.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blog from "../../assets/img/blog/blog-01.jpg";
import { NavLink } from "react-router-dom";
function DEIDashbard() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h4 className="page-title" style={{ fontWeight: "bold" }}>
                DEI Dashboard
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <h4 className="">Jobs</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-md-6 col-lg-3">
              <div className="blog ">
                <div className="blog-image">
                  <NavLink to="/DEIDashboard">
                    <img className="img-fluid" src={blog} alt="" />
                  </NavLink>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <NavLink to="/DEIDashboard">Diversity</NavLink>
                  </h3>
                  <strong>Goals</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore etmis dolore
                    magna aliqua.
                  </p>
                  <strong>Initiative</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore etmis dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-6 col-lg-3">
              <div className="blog ">
                <div className="blog-image">
                  <NavLink to="/DEIDashboard">
                    <img className="img-fluid" src={blog} alt="" />
                  </NavLink>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <NavLink to="/DEIDashboard">Equity</NavLink>
                  </h3>
                  <strong>Goals</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore etmis dolore
                    magna aliqua.
                  </p>
                  <strong>Initiative</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore etmis dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-6 col-lg-3">
              <div className="blog ">
                <div className="blog-image">
                  <NavLink to="/DEIDashboard">
                    <img className="img-fluid" src={blog} alt="" />
                  </NavLink>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <NavLink to="/DEIDashboard">Inclusion</NavLink>
                  </h3>
                  <strong>Goals</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore etmis dolore
                    magna aliqua.
                  </p>
                  <strong>Initiative</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore etmis dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card-box">
                <div className="card-block">
                  <h5 className="text-bold card-title">Criteria Status</h5>
                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead>
                        <tr>
                          <th>Jobs</th>
                          <th>Number of Jobs</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Web Developer</td>
                          <td>9</td>
                          <td>Meet</td>
                        </tr>
                        <tr>
                          <td>Graphic Desighner</td>
                          <td>5</td>
                          <td>Not Meet</td>
                        </tr>
                        <tr>
                          <td>ML Engineer</td>
                          <td>3</td>
                          <td>Meet</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card-box">
                <div className="card-block">
                  <h5 className="text-bold card-title">
                    Interested Candidates
                  </h5>
                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead>
                        <tr>
                          <th>Number of Candidates Interested</th>
                          <th>Jobs</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>9</td>
                          <td>Web Developer</td>
                          <td>Interested</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Graphic Desighner</td>
                          <td>Not Interested</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>ML Engineer</td>
                          <td>Interested</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
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
                  <div className="text-right">
                    <button type="submit" className="custom-btn ">
                      Submit
                    </button>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="card-box">
              <div className="card-block">
                <h5 className="text-bold card-title">Applicants</h5>
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
                        <td>
                          <button
                            className="custom-btn  btn-primary-one float-right "
                            style={{
                              padding: "3px",
                              backgroundColor: "green",
                              color: "white",
                            }}
                          >
                            Approve
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                        <td>923648638433</td>
                        <td>
                          <button
                            className="custom-btn  btn-primary-one float-right"
                            style={{
                              padding: "3px",
                              backgroundColor: "red",
                              color: "white",
                            }}
                          >
                            Disapprove
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                        <td>923648638433</td>
                        <td>
                          <button
                            className="custom-btn  btn-primary-one float-right"
                            style={{
                              padding: "3px",
                              backgroundColor: "green",
                              color: "white",
                            }}
                          >
                            Approve
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                        <td>923648638433</td>
                        <td>
                          <button
                            className="custom-btn  btn-primary-one float-right"
                            style={{
                              padding: "3px",
                              backgroundColor: "red",
                              color: "white",
                            }}
                          >
                            Disapprove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default DEIDashbard;
