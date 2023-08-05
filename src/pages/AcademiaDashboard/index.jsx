import user from "../../assets/img/user.jpg";
import "../../assets/css/style.css";
import "../../assets/css/style1.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
function AcademiaDashboard() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <h4
                className="page-title text-center"
                style={{ fontWeight: "bold" }}
              >
                Academia Dashboard
              </h4>
            </div>
          </div>
          <blockquote className="blockquote text-center">
            <p className="mb-0">Search for perfect candidate</p>
          </blockquote>
          <div className="row filter-row justify-content-center">
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <label className="focus-label">Search</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <NavLink to="/academicInstituion" className="custom-btn  ">
                {" "}
                Search{" "}
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>S. No</th>
                      <th>Candidate</th>
                      <th>Email</th>
                      <th>Date</th>
                      <th>Department</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src={user}
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>deniseStevens@gmail.com</td>
                      <td>30 Dec 2018</td>
                      <td>Cardiology</td>
                      <td>$1000</td>
                      <td>10:00am - 11:00am</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src={user}
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>deniseStevens@gmail.com</td>
                      <td>30 Dec 2018</td>
                      <td>Cardiology</td>
                      <td>$1000</td>
                      <td>10:00am - 11:00am</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src={user}
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>deniseStevens@gmail.com</td>
                      <td>30 Dec 2018</td>
                      <td>Cardiology</td>
                      <td>$1000</td>
                      <td>10:00am - 11:00am</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src={user}
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>deniseStevens@gmail.com</td>
                      <td>30 Dec 2018</td>
                      <td>Cardiology</td>
                      <td>$1000</td>
                      <td>10:00am - 11:00am</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src={user}
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>deniseStevens@gmail.com</td>
                      <td>30 Dec 2018</td>
                      <td>Cardiology</td>
                      <td>$1000</td>
                      <td>10:00am - 11:00am</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src={user}
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>deniseStevens@gmail.com</td>
                      <td>30 Dec 2018</td>
                      <td>Cardiology</td>
                      <td>$1000</td>
                      <td>10:00am - 11:00am</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src={user}
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>deniseStevens@gmail.com</td>
                      <td>30 Dec 2018</td>
                      <td>Cardiology</td>
                      <td>$1000</td>
                      <td>10:00am - 11:00am</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src={user}
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>deniseStevens@gmail.com</td>
                      <td>30 Dec 2018</td>
                      <td>Cardiology</td>
                      <td>$1000</td>
                      <td>10:00am - 11:00am</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src={user}
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>deniseStevens@gmail.com</td>
                      <td>30 Dec 2018</td>
                      <td>Cardiology</td>
                      <td>$1000</td>
                      <td>10:00am - 11:00am</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src={user}
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>deniseStevens@gmail.com</td>
                      <td>30 Dec 2018</td>
                      <td>Cardiology</td>
                      <td>$1000</td>
                      <td>10:00am - 11:00am</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AcademiaDashboard;
