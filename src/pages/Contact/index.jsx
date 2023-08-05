import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
function Contact() {
  return (
    <>
      <Header />
      <main>
        <div className="main-wrapper  account-wrapper">
          <div className="account-page">
            <div className="account-center">
              <div className="account-box">
                <form action="" className="form-signin">
                  <div className="content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h4
                          className="page-title text-center"
                          style={{ fontWeight: "bold" }}
                        >
                          Contact US
                        </h4>
                      </div>
                    </div>

                    <blockquote className="blockquote text-center">
                      <p className="mb-0">
                        Please fill the form in decent manner
                      </p>
                    </blockquote>
                  </div>

                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                    ></textarea>
                    {/* <input type="textarea" className="form-control" /> */}
                  </div>
                  <div className="form-group text-center">
                    <NavLink
                      className="custom-btn  account-btn btn-link"
                      to="/contactus"
                    >
                      Submit
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
