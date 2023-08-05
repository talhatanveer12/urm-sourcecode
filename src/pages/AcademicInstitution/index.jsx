import blog1 from "../../assets/img/blog/blog-01.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
function Academic() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h4 className="page-title" style={{ fontWeight: "bold" }}>
                Academic Institution
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h4 className="page-title" style={{ fontWeight: "bold" }}>
                Institution Information
              </h4>
            </div>
          </div>
          <blockquote className="blockquote text-center">
            <p className="mb-0" style={{ fontStyle: "normal" }}>
              Institutions are humanly devised structures of rules and norms
              that shape and constrain individual behavior. All definitions of
              institutions generally entail that there is a level of persistence
              and continuity. Laws, rules, social conventions and norms are all
              examples of institutions.
            </p>
          </blockquote>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg1">
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>98</h3>
                  <span className="widget-title1">
                    Total Number of Applications
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <h4 className="">Jobs</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-md-6 col-lg-2">
              <div className="blog ">
                <div className="blog-image">
                  <NavLink target="_blank" to="https://cxa6647.uta.cloud/blog/">
                    <img className="img-fluid" src={blog1} alt="" />
                  </NavLink>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <NavLink
                      target="_blank"
                      to="https://cxa6647.uta.cloud/blog/"
                    >
                      Job 1
                    </NavLink>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore etmis dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco sit laboris.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-6 col-lg-2">
              <div className="blog ">
                <div className="blog-image">
                  <NavLink target="_blank" to="https://cxa6647.uta.cloud/blog/">
                    <img className="img-fluid" src={blog1} alt="" />
                  </NavLink>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <NavLink
                      target="_blank"
                      to="https://cxa6647.uta.cloud/blog/"
                    >
                      Job 2
                    </NavLink>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore etmis dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco sit laboris.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-6 col-lg-2">
              <div className="blog ">
                <div className="blog-image">
                  <NavLink target="_blank" to="https://cxa6647.uta.cloud/blog/">
                    <img className="img-fluid" src={blog1} alt="" />
                  </NavLink>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <NavLink
                      target="_blank"
                      to="https://cxa6647.uta.cloud/blog/"
                    >
                      Job 3
                    </NavLink>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore etmis dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco sit laboris.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-6 col-lg-2">
              <div className="blog ">
                <div className="blog-image">
                  <NavLink target="_blank" to="https://cxa6647.uta.cloud/blog/">
                    <img className="img-fluid" src={blog1} alt="" />
                  </NavLink>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <NavLink
                      target="_blank"
                      to="https://cxa6647.uta.cloud/blog/"
                    >
                      Job 4
                    </NavLink>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore etmis dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco sit laboris.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card-box">
                <div className="card-block">
                  <h5 className="text-bold card-title">Status</h5>
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
                          <td>Applied</td>
                        </tr>
                        <tr>
                          <td>Graphic Desighner</td>
                          <td>Not Applied</td>
                        </tr>
                        <tr>
                          <td>ML Engineer</td>
                          <td>Applied</td>
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
                  <div className="text-left">
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
      <Footer />
    </>
  );
}

export default Academic;
