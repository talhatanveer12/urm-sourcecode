import "../../assets/css/style.css";
import "../../assets/css/style1.css";

import Header from "../../components/Header";
import AllFooter from "../../components/AllFooter";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                <div className="hero-section-text mt-5">
                  <h6 className="text-white">
                    Are you looking for best urm application?
                  </h6>

                  <h1 className="hero-title text-white mt-4 mb-4">
                    Excellent URM Application
                  </h1>

                  <NavLink to="/" className="custom-btn custom-border-btn ">
                    Explore
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AllFooter />
    </>
  );
}

export default Home;
