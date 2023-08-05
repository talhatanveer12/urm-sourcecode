import { toast } from "react-toastify";
import axiosInstance, {
  axiosFileInstance,
} from "../../Http-Request/axios-instance";
import { login, profile, logout, catchAction } from "./authSlice";

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    if (res.data.status === true) {
      dispatch(login({ token: res.data.token, user: res.data.data }));
    }
    return res;
  } catch (error) {
    
    return error.response;
  }
};

export const SignUpUser = (data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/auth/resigter", data);
    if (res.data.status === true) {
      dispatch(login({ token: res.data.token, user: res.data.data }));
    }
    return res;
  } catch (error) {
    
    return error.response;
  }
};

export const loadUser = () => async (dispatch) => {
  dispatch(catchAction(true));
  try {
    const res = await axiosInstance.post("/auth/me");
    if (res.data) {
      dispatch(catchAction(false));
      dispatch(profile(res.data.data));
    }
  } catch (error) {
    dispatch(logout());
    dispatch(catchAction(false));
  }
};

export const updateProfile = (data) => async (dispatch) => {
  try {
    const res = await axiosFileInstance.post(
      "/auth/update-profile",
      data
    );
    if (res.data.status === true) {
      dispatch(profile(res.data.data));
      toast.success(res.data.message);
    }
    return res;
  } catch (error) {
    toast.error(error.response.data.errors);
    return error.response;
  }
};

export const changePassword = (data) => async () => {
  try {
    const res = await axiosInstance.post("/auth/change-password", data);
    if (res.data.status === true) {
      toast.success(res.data.message);
    }
    return res;
  } catch (error) {
    toast.error(error.response.data.errors);
    return error.response;
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/auth/logout");
    if (res.data.status === true) {
      dispatch(logout());
    }
  } catch (error) {
    return error.response;
  }
};
