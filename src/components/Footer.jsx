import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="site-footer">
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

export default Footer;
