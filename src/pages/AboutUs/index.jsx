import React, { useEffect } from "react";
import img1 from "../../assets/img/portrait-charming-middle-aged-attractive-woman-with-blonde-hair.jpg";
import img2 from "../../assets/img/medium-shot-smiley-senior-man.jpg";
import img3 from "../../assets/img/portrait-beautiful-young-woman.jpg";
import img4 from "../../assets/img/blond-man-happy-expression.jpg";
import img5 from "../../assets/img/university-study-abroad-lifestyle-concept.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createFeedback,
  getAllFeedback,
} from "../../Redux/Feedback/feedbackAction";
import { Form, Formik } from "formik";
import moment from "moment";
function AboutUs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFeedback());
  }, [dispatch]);
  const initialValues = {
    name: "",
  };

  const handleSubmitForm = (values) => {
    const data = new FormData();
    data.append("feedback_message", values.name);
    data.append("feedback_date",moment().format('YYYY-MM-DD'))
    dispatch(createFeedback(data)).then((res) => {});
  };
  return (
    <>
      <Header />
      <main>
        <section className="reviews-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h4
                  className="page-title text-center"
                  style={{ fontWeight: "bold" }}
                >
                  About US
                </h4>
              </div>
            </div>
            <blockquote className="blockquote text-center">
              <p className="mb-0" style={{ fontStyle: "normal" }}>
                The website aims to connect underrepresented minority (URM)
                candidates with academic institutions, recruiters, and
                diversity, equity, and inclusion (DEI) officers. The website
                allows URM candidates to create their profiles, upload their
                resumes and academic records, and search for positions that
                match their preferences. The website also allows academic
                institutions to create their profiles, post their job openings,
                and search for potential URM candidates. The website provides
                communication and collaboration tools, such as a messaging
                system and a chat option, to facilitate the connection between
                URM candidates and academia. The website also provides feedback
                and review systems, allowing users to leave feedback on their
                experience and improve the quality of the service. The website's
                purpose is to bridge the gap in representation in academia and
                help URM candidates find opportunities and careers in academic
                fields.
              </p>
            </blockquote>
            <blockquote className="blockquote text-center">
              <p className="mb-0 mt-5" style={{ fontWeight: "bold" }}>
                Submit your Feedback
              </p>
            </blockquote>
            <div className="row filter-row justify-content-center">
              <Formik
                initialValues={initialValues}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "Required";
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
                    <form onSubmit={handleSubmit}>
                      <div className="col-sm-12">
                        <div className="form-group form-focus">
                          <label className="focus-label">Write here</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className="form-control floating"
                          />
                          <div className="m-1 text-danger">
                            {errors.name && touched.name && errors.name}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="custom-btn  account-btn btn-link"
                          style={{ marginBottom: " 20px" }}
                        >
                          {" "}
                          Submit
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </Formik>
            </div>

            <div className="col-lg-12 col-12">
              <h3 className="text-center mb-5">Reviews</h3>

              <div className="owl-carousel owl-theme reviews-carousel">
                <div className="reviews-thumb">
                  <div className="reviews-info d-flex align-items-center">
                    <img src={img1} className="avatar-image img-fluid" alt="" />

                    <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                      <p className="mb-0">
                        <strong>Susan L</strong>
                        <small>Product Manager</small>
                      </p>

                      <div className="reviews-icons">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-body">
                    <img
                      src="images/left-quote.png"
                      className="quote-icon img-fluid"
                      alt=""
                    />

                    <h4 className="reviews-title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </h4>
                  </div>
                </div>

                <div className="reviews-thumb">
                  <div className="reviews-info d-flex align-items-center">
                    <img src={img2} className="avatar-image img-fluid" alt="" />

                    <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                      <p className="mb-0">
                        <strong>Jack</strong>
                        <small>Technical Lead</small>
                      </p>

                      <div className="reviews-icons">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star"></i>
                        <i className="bi-star"></i>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-body">
                    <img
                      src="images/left-quote.png"
                      className="quote-icon img-fluid"
                      alt=""
                    />

                    <h4 className="reviews-title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </h4>
                  </div>
                </div>

                <div className="reviews-thumb">
                  <div className="reviews-info d-flex align-items-center">
                    <img src={img3} className="avatar-image img-fluid" alt="" />

                    <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                      <p className="mb-0">
                        <strong>Haley</strong>
                        <small>Sales & Marketing</small>
                      </p>

                      <div className="reviews-icons">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-body">
                    <img
                      src="images/left-quote.png"
                      className="quote-icon img-fluid"
                      alt=""
                    />

                    <h4 className="reviews-title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </h4>
                  </div>
                </div>

                <div className="reviews-thumb">
                  <div className="reviews-info d-flex align-items-center">
                    <img src={img4} className="avatar-image img-fluid" alt="" />

                    <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                      <p className="mb-0">
                        <strong>Jackson</strong>
                        <small>Dev Ops</small>
                      </p>

                      <div className="reviews-icons">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star"></i>
                        <i className="bi-star"></i>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-body">
                    <img
                      src="images/left-quote.png"
                      className="quote-icon img-fluid"
                      alt=""
                    />

                    <h4 className="reviews-title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </h4>
                  </div>
                </div>

                <div className="reviews-thumb">
                  <div className="reviews-info d-flex align-items-center">
                    <img src={img5} className="avatar-image img-fluid" alt="" />

                    <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                      <p className="mb-0">
                        <strong>Kevin</strong>
                        <small>Internship</small>
                      </p>

                      <div className="reviews-icons">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-body">
                    <img
                      src="images/left-quote.png"
                      className="quote-icon img-fluid"
                      alt=""
                    />

                    <h4 className="reviews-title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
