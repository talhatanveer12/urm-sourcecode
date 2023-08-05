import Logo from "../assets/img/logo.jpg";
import User from "../assets/img/user.jpg";
import "../assets/css/style.css";
import "../assets/css/style1.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="containerss">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={Logo} width="60" height="50" alt="" />{" "}
          <span style={{ fontSize: "32px" }}>
            URM Application <i className="fa fa-home back-icon fa-sm"></i>
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item ms-lg-auto">
              <NavLink to="/URMRegistation" className=" nav-link">
                <span className="">URM Registrant</span>
              </NavLink>
            </li>
            <li className="nav-item dropdown text-center">
              <NavLink
                to="/"
                className="nav-link user-link"
                data-toggle="dropdown"
              >
                <span>Services</span>
              </NavLink>
              <div className="dropdown-menu" style={{ width: "180px" }}>
                <NavLink className="dropdown-item" to="/academicInstituion">
                  Academic Institution
                </NavLink>
                <NavLink className="dropdown-item" to="/academiadashboard">
                  Academia Dashboard
                </NavLink>
                <NavLink className="dropdown-item" to="/recruiterDashboard">
                  Recruiter Dashboard
                </NavLink>
                <NavLink className="dropdown-item" to="/DEIDashboard">
                  DEI Dashboard
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/adminPanel" className=" nav-link">
                <span className="">Admin Panel</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutus" className=" nav-link">
                <span className="">About Us</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="https://cxa6647.uta.cloud/blog/"
                target="_blank"
                rel="noreferrer"
                className=" nav-link"
              >
                <span className="">Blog</span>
              </NavLink>
            </li>
            <li className="nav-item dropdown ms-lg-auto text-center">
              <NavLink
                to="/profile"
                className="nav-link user-link"
                data-toggle="dropdown"
              >
                <span className="user-img">
                  <img
                    className="rounded-circle"
                    src={User}
                    width="24"
                    alt="Admin"
                  />
                  <span className="status online"></span>
                </span>
                <span>Admin</span>
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/profile">
                  Profile
                </NavLink>
                <NavLink className="dropdown-item" to="/login">
                  Logout
                </NavLink>
              </div>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link  custom-btn" to="/register">
                Register
              </NavLink>
            </li>

            <li className="nav-item ml-2">
              <NavLink className="nav-link  custom-btn" to="/login">
                Login
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                to="/contactus"
                className="nav-link fa fa-phone"
              ></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
