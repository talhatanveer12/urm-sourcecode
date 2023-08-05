import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "./App.css";
import PageRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Redux/Auth/authAction";
function App() {
  const [count, setCount] = useState(0);
  const { isAuthenticated, user, loading } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(loadUser());
    }
  }, [user, isAuthenticated, dispatch]);

  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
