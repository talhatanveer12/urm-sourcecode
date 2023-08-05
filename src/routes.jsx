import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login/Login";
import Forgot from "./pages/Forgot";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import UrmRegistraton from "./pages/URMRegistration";
import Academic from "./pages/AcademicInstitution";
import AcademiaDashboard from "./pages/AcademiaDashboard";
import RecrutierDashBoard from "./pages/RecruiterDashboard";
import DEIDashbard from "./pages/DEIDashBoard";
import Chat from "./pages/Chat";
import AdminPanel from "./pages/AdminPanel";
import EditProfile from "./pages/EditProfile";
import VerifyAuth from "./VerifyAuth";
import ChatList from "./pages/Chat/ChatList";
function PageRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <VerifyAuth>
              <Home />
            </VerifyAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<Forgot />} />
        <Route
          path="/aboutus"
          element={
            <VerifyAuth>
              <AboutUs />
            </VerifyAuth>
          }
        />
        <Route
          path="/contactus"
          element={
            <VerifyAuth>
              <Contact />
            </VerifyAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <VerifyAuth>
              <Profile />
            </VerifyAuth>
          }
        />
        <Route
          path="/URMRegistation"
          element={
            <VerifyAuth>
              <UrmRegistraton />
            </VerifyAuth>
          }
        />
        <Route
          path="/academicInstituion"
          element={
            <VerifyAuth>
              <Academic />
            </VerifyAuth>
          }
        />
        <Route
          path="/academiadashboard"
          element={
            <VerifyAuth>
              <AcademiaDashboard />
            </VerifyAuth>
          }
        />
        <Route
          path="/recruiterDashboard"
          element={
            <VerifyAuth>
              <RecrutierDashBoard />
            </VerifyAuth>
          }
        />
        <Route
          path="/DEIDashboard"
          element={
            <VerifyAuth>
              <DEIDashbard />
            </VerifyAuth>
          }
        />
        <Route
          path="/chat"
          element={
            <VerifyAuth>
              <Chat />
            </VerifyAuth>
          }
        >
          <Route
          path=":id"
          element={
            <VerifyAuth>
              <ChatList />
            </VerifyAuth>
          }
        ></Route>
        </Route>
        <Route
          path="/adminPanel"
          element={
            <VerifyAuth>
              <AdminPanel />
            </VerifyAuth>
          }
        />
        <Route
          path="/editprofile"
          element={
            <VerifyAuth>
              <EditProfile />
            </VerifyAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default PageRoutes;
