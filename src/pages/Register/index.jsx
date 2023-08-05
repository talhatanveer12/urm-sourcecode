import Logo from "../../assets/img/logo.jpg";
import "../../assets/css/style.css";
import "../../assets/css/style1.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const initvalue = {
  username: "",
  email: "",
  password: "",
  address: "",
  dob: "",
}
function Register() {
  const [selected,setSelected] = useState(1);
  const [formData, setFormData] = useState(initvalue);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the form data, e.g., send it to a server
    console.log(formData);
  };

  const selectedHandle = (e) => {
    setSelected(e.target.value);
    if (e.target.value === "2") {
      setFormData({
        ...initvalue,
        firstName: "",
        lastName: "",
        nationality: "",
        ethnicity: "",
        education: "",
        researchExperience: "",
        phoneNo: "",
      });
    } else if (e.target.value === "3") {
      setFormData({
        ...initvalue,
        institutionName: "",
        institutionAddress: "",
        phoneNo: "",
      });
    } else if (e.target.value === "4") {
      setFormData({
        ...initvalue,
        companyName: "",
        companyAddress: "",
        phoneNo: "",
      });
    } else if (e.target.value === "5") {
      setFormData({
        ...initvalue,
        organizationName: "",
        organizationAddress: "",
        phoneNo: "",
      });
    }
  }

  const handleChange = (event) => {
    
    const { name, value } = event.target;
    console.log(name,value,formData);
    setFormData({ ...formData, [name]: value });
    console.log(formData,"fff");

    // Handle role-specific fields here and add them to formData
    if (name === "role") {
      console.log("Sdsdsd");
      
    }
  };
  return (
    <div className="main-wrapper  account-wrapper">
      <div className="account-page">
        <div className="account-center">
          <div className="account-box">
            <form onSubmit={handleSubmit} className="form-signin">
              <div className="account-logo">
                <NavLink to="/">
                  <img src={Logo} alt="" />
                </NavLink>
              </div>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Date of birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select
                  className="form-control"
                  name="role"
                  value={selected} onChange={selectedHandle}
                >
                  <option value={1}>Admin</option>
                  <option value={2}>URM Candidate</option>
                  <option value={3}>Academia</option>
                  <option value={4}>Recruiter</option>
                  <option value={5}>DEI Officer</option>
                </select>
              </div>

              {/* Render additional form fields based on selected role */}
              {selected === "2" && (
                <>
                  <div className="form-group">
                    <label>First name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nationality</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ethnicity</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ethnicity"
                      value={formData.ethnicity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Education</label>
                    <input
                      type="text"
                      className="form-control"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Research Experience</label>
                    <input
                      type="text"
                      className="form-control"
                      name="researchExperience"
                      value={formData.researchExperience}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone no</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              {selected === "3" && (
                <>
                  <div className="form-group">
                    <label>Institution name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Institution Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="institutionAddress"
                      value={formData.institutionAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone no</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              {selected === "4" && (
                <>
                  <div className="form-group">
                    <label>Company name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Company Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyAddress"
                      value={formData.companyAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone no</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              {selected === "5" && (
                <>
                  <div className="form-group">
                    <label>Organization name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Organization Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="organizationAddress"
                      value={formData.organizationAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone no</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            {/* <form action="" className="form-signin">
              <div className="account-logo">
                <NavLink to="/">
                  <img src={Logo} alt="" />
                </NavLink>
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <text type="text"  className="form-control" />
              </div>
              <div className="form-group">
                <label>Date of birth</label>
                <input type="date"  className="form-control" />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select className="form-control" value={selected} onChange={e=>setSelected(e.target.value)}>
                  <option value={1}>Admin</option>
                  <option value={2}>URM Candidate</option>
                  <option value={3}>Academia</option>
                  <option value={4}>Recruiter</option>
                  <option value={5}>DEI Officer</option>
                </select>
              </div>

              {selected === "2" && <>
              <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Nationality</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Ethnicity</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Education</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Research Experience</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Phone no</label>
                <input type="text" className="form-control" />
              </div>
              </>}

              {selected === "3" && <>
              <div className="form-group">
                <label>Institution name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Institution Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Phone no</label>
                <input type="text" className="form-control" />
              </div>
              </>}

              {selected === "4" && <>
              <div className="form-group">
                <label>Company name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Company Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Phone no</label>
                <input type="text" className="form-control" />
              </div>
              </>}

              {selected === "5" && <>
              <div className="form-group">
                <label>Organization name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Organization Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Phone no</label>
                <input type="text" className="form-control" />
              </div>
              </>}

              
              
              <div className="form-group text-center">
                <NavLink
                  className="custom-btn  account-btn btn-link"
                  to="/login"
                >
                  Register
                </NavLink>
              </div>
              <div className="text-center login-link">
                Already have an account? <NavLink to="/login">Login</NavLink>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
