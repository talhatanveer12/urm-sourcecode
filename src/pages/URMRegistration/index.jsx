import "../../assets/css/style.css";
import "../../assets/css/style1.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
function UrmRegistraton() {
  return (
    <div>
      <Header />
      <main>
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-12">
                <h4
                  className="page-title text-center"
                  style={{ fontWeight: "bold" }}
                >
                  URM Registrant
                </h4>
              </div>
            </div>
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer posuere erat a
                ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante.
              </p>
            </blockquote>

            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card-box">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input type="number" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Nationality</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Education</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                          <label>Ethnicity</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Research Experience</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="p-2">
                        <button type="submit" className="custom-btn ">
                          Upload CV
                        </button>
                      </div>
                      <div className="p-2">
                        <button type="submit" className="custom-btn ">
                          Upload Cover Letter
                        </button>
                      </div>
                      <div className="p-2">
                        <button type="submit" className="custom-btn ">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <div className="card-box">
                  <div className="card-block">
                    <h5 className="text-bold card-title">Job Status</h5>
                    <div className="table-responsive">
                      <table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>Jobs</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Web Developer</td>
                            <td>Available</td>
                          </tr>
                          <tr>
                            <td>Graphic Desighner</td>
                            <td>Not Available</td>
                          </tr>
                          <tr>
                            <td>ML Engineer</td>
                            <td>Available</td>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UrmRegistraton;
