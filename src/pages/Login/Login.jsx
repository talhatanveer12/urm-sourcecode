import Logo from "../../assets/img/logo.jpg";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { loginUser } from "../../Redux/Auth/authAction";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.Auth);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitForm = async (values) => {
    // alert(JSON.stringify(values, null, 2));
    // event.preventDefault();
    const data = new FormData();
    data.append("email", values.email);
    data.append("password", values.password);
    console.log(data);
    dispatch(loginUser(data)).then((res) => {
      console.log(res, "ssc");
      if (res.data.status === true) {
        navigate("/");
      } else {
        setError(res.data.message);
      }
    });
  };
  return !isAuthenticated ? (
    <div className="main-wrapper account-wrapper">
      <div className="account-page">
        <div className="account-center">
          <div className="account-box">
          
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Required";
                }
                return errors;
              }}
              onSubmit={handleSubmitForm}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <>
                  <form onSubmit={handleSubmit} className="form-signin">
                    <div className="account-logo">
                      <NavLink to="/">
                        <img src={Logo} alt="" />
                      </NavLink>
                    </div>
                    {error &&<div className="alert alert-danger " role="alert">
                      {error}
                    </div>}
                    <div className="form-group">
                      <label>Username or Email</label>
                      <input
                        autoFocus=""
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <div className="m-1 text-danger">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <div className="m-1 text-danger">
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>
                    <div className="form-group text-right">
                      <NavLink to="/forgetpassword">
                        Forgot your password?
                      </NavLink>
                    </div>
                    <div className="form-group text-center">
                      <button
                        className="custom-btn  account-btn btn-link"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <div className="text-center register-link">
                      Don’t have an account?{" "}
                      <NavLink to="/register">Register Now</NavLink>
                    </div>
                  </form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
}

export default Login;
