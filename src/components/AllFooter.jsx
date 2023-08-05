import { NavLink } from "react-router-dom";

function AllFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row" style={{ marginTop: " 30px" }}>
          <div className="col-lg-4 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center mb-4">
              <div className="d-flex flex-column">
                <strong className="logo-text">URM</strong>
                <small className="logo-slogan">Application</small>
              </div>
            </div>

            <p className="mb-2">
              <i className="custom-icon fa fa-globe me-1"></i>

              <NavLink to="#" className="site-footer-link">
                www.urmapplication.com
              </NavLink>
            </p>

            <p className="mb-2">
              <i className="custom-icon fa fa-phone me-1"></i>

              <NavLink to="tel: 305-240-9671" className="site-footer-link">
                305-240-9671
              </NavLink>
            </p>

            <p>
              <i className="custom-icon fa fa-envelope me-1"></i>

              <NavLink
                to="mailto:info@yourgmail.com"
                className="site-footer-link"
              >
                info@urmapplication.co
              </NavLink>
            </p>
          </div>

          <div className="col-lg-2 col-md-3 col-6 ms-lg-auto">
            <h6 className="site-footer-title">Company</h6>

            <ul className="footer-menu">
              <li className="footer-menu-item">
                <NavLink to="#" className="footer-menu-link">
                  About
                </NavLink>
              </li>

              <li className="footer-menu-item">
                <NavLink to="#" className="footer-menu-link">
                  Blog
                </NavLink>
              </li>

              <li className="footer-menu-item">
                <NavLink to="#" className="footer-menu-link">
                  Jobs
                </NavLink>
              </li>

              <li className="footer-menu-item">
                <NavLink to="#" className="footer-menu-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <h6 className="site-footer-title">Resources</h6>

            <ul className="footer-menu">
              <li className="footer-menu-item">
                <NavLink to="#" className="footer-menu-link">
                  Guide
                </NavLink>
              </li>

              <li className="footer-menu-item">
                <NavLink to="#" className="footer-menu-link">
                  How it works
                </NavLink>
              </li>

              <li className="footer-menu-item">
                <NavLink to="#" className="footer-menu-link">
                  Salary Tool
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-8 col-12 mt-3 mt-lg-0">
            <h6 className="site-footer-title">Newsletter</h6>

            <form
              className="custom-form newsletter-form"
              action="#"
              method="post"
              role="form"
            >
              <h6 className="site-footer-title">Get notified jobs news</h6>

              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-user"></i>
                </span>

                <input
                  type="text"
                  name="newsletter-name"
                  id="newsletter-name"
                  className="form-control"
                  placeholder="yourname@gmail.com"
                  required
                />

                <button type="submit" className="form-control">
                  <i className="fa fa-send"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
              <p className="copyright-text">Copyright © URM Application 2048</p>

              <ul className="footer-menu d-flex">
                <li className="footer-menu-item">
                  <NavLink to="#" className="footer-menu-link">
                    Privacy Policy
                  </NavLink>
                </li>

                <li className="footer-menu-item">
                  <NavLink to="#" className="footer-menu-link">
                    Terms
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-12 mt-2 mt-lg-0 d-flex justify-content-center">
              <ul className="social-icon">
                <li className="social-icon-item">
                  <NavLink
                    to="#"
                    className="social-icon-link fa fa-twitter"
                  ></NavLink>
                </li>

                <li className="social-icon-item">
                  <NavLink
                    to="#"
                    className="social-icon-link fa fa-facebook"
                  ></NavLink>
                </li>

                <li className="social-icon-item">
                  <NavLink
                    to="#"
                    className="social-icon-link fa fa-linkedin"
                  ></NavLink>
                </li>

                <li className="social-icon-item">
                  <NavLink
                    to="#"
                    className="social-icon-link fa fa-instagram"
                  ></NavLink>
                </li>

                <li className="social-icon-item">
                  <NavLink
                    to="#"
                    className="social-icon-link fa fa-youtube"
                  ></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AllFooter;
