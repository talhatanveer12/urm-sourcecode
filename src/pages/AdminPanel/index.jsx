import React, { useRef, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chart from "chart.js/auto";
function AdminPanel() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;

    var barChartData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "",
          backgroundColor: "rgba(0, 158, 251, 0.5)",
          borderColor: "rgba(0, 158, 251, 1)",
          borderWidth: 1,
          data: [35, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "",
          backgroundColor: "rgba(255, 188, 53, 0.5)",
          borderColor: "rgba(255, 188, 53, 1)",
          borderWidth: 1,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    // Get the 2D rendering context of the canvas
    const ctx = canvas.getContext("2d");

    // Now you can use the ctx to draw on the canvas or manipulate it
    const mychart = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        // scales: {
        //   y: {
        //     beginAtZero: true,
        //   },
        // },
      },
    });

    return () => {
      mychart.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h4 className="page-title" style={{ fontWeight: "bold" }}>
                  Admin Panel
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg1">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>98</h3>
                    <span className="widget-title1">
                      Candidates{" "}
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg2">
                    <i className="fa fa-user-o"></i>
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>1072</h3>
                    <span className="widget-title2">
                      Jobs <i className="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg3">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>72</h3>
                    <span className="widget-title3">
                      User Activity{" "}
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg4">
                    <i className="fa fa-bug" aria-hidden="true"></i>
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>6</h3>
                    <span className="widget-title4">
                      Troubleshoot Issue{" "}
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title">
                      <h4>Graph</h4>
                    </div>
                    <canvas ref={canvasRef} id="bargraph"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card-box">
                  <div className="card-block">
                    <h5 className="text-bold card-title">Details</h5>
                    <div className="table-responsive">
                      <table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>923648638433</td>
                          </tr>
                          <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td>923648638433</td>
                          </tr>
                          <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td>923648638433</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-box">
                  <div className="card-block">
                    <h5 className="text-bold card-title">Applicants</h5>
                    <div className="table-responsive">
                      <table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>923648638433</td>
                            <td>
                              <button
                                className="custom-btn  btn-primary-one float-right "
                                style={{
                                  padding: "3px",
                                  backgroundColor: "green",
                                  color: "white",
                                }}
                              >
                                Approve
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td>923648638433</td>
                            <td>
                              <button
                                className="custom-btn  btn-primary-one float-right"
                                style={{
                                  padding: "3px",
                                  backgroundColor: "red",
                                  color: "white",
                                }}
                              >
                                Disapprove
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td>923648638433</td>
                            <td>
                              <button
                                className="custom-btn  btn-primary-one float-right"
                                style={{
                                  padding: "3px",
                                  backgroundColor: "green",
                                  color: "white",
                                }}
                              >
                                Approve
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td>923648638433</td>
                            <td>
                              <button
                                className="custom-btn  btn-primary-one float-right"
                                style={{
                                  padding: "3px",
                                  backgroundColor: "red",
                                  color: "white",
                                }}
                              >
                                Disapprove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6">
              <div className="card-box">
                <h4 className="card-title">Details</h4>
                <form action="#">
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Full Name</label>
                    <div className="col-md-9">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                      Email Address
                    </label>
                    <div className="col-md-9">
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                      Phone Number
                    </label>
                    <div className="col-md-9">
                      <input type="number" className="form-control" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="text-right p-2">
                      <button type="submit" className="custom-btn ">
                        Create
                      </button>
                    </div>
                    <div className="text-right p-2">
                      <button type="submit" className="custom-btn ">
                        Update
                      </button>
                    </div>
                    <div className="text-right p-2">
                      <button type="submit" className="custom-btn ">
                        Read
                      </button>
                    </div>
                    <div className="text-right p-2">
                      <button type="submit" className="custom-btn ">
                        Delete
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-box">
                <div className="card-block">
                  <h5 className="text-bold card-title">
                    Matching Candidate List
                  </h5>
                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead>
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>923648638433</td>
                        </tr>
                        <tr>
                          <td>Mary</td>
                          <td>Moe</td>
                          <td>mary@example.com</td>
                          <td>923648638433</td>
                        </tr>
                        <tr>
                          <td>July</td>
                          <td>Dooley</td>
                          <td>july@example.com</td>
                          <td>923648638433</td>
                        </tr>
                        <tr>
                          <td>July</td>
                          <td>Dooley</td>
                          <td>july@example.com</td>
                          <td>923648638433</td>
                        </tr>
                        <tr>
                          <td>July</td>
                          <td>Dooley</td>
                          <td>july@example.com</td>
                          <td>923648638433</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AdminPanel;
