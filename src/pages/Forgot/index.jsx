import Logo from "../../assets/img/logo.jpg";
import "../../assets/css/style.css";
import "../../assets/css/style1.css";
import { NavLink } from "react-router-dom";
function Forgot() {
  return (
    <div className="main-wrapper account-wrapper">
      <div className="account-page">
        <div className="account-center">
          <div className="account-box">
            <form className="form-signin" action="#">
              <div className="account-logo">
                <NavLink to="/">
                  <img src={Logo} alt="" />
                </NavLink>
              </div>
              <div className="form-group">
                <label>Enter Your Email</label>
                <input type="text" className="form-control" autoFocus />
              </div>
              <div className="form-group text-center">
                <button className="custom-btn  account-btn" type="submit">
                  Reset Password
                </button>
              </div>
              <div className="text-center register-link">
                <NavLink to="/login">Back to Login</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
