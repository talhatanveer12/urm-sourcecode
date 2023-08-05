import { toast } from "react-toastify";
import { feedbackAction } from "./feedbackSlice";
import axiosInstance from "../../Http-Request/axios-instance";

export const getAllFeedback = () => async (dispatch) => {
  dispatch(feedbackAction.catchAction(true));
  try {
    const res = await axiosInstance.get("/user-feedback");
    dispatch(feedbackAction.catchAction(false));
    if (res.data.status === true) {
      dispatch(feedbackAction.setfeedback(res.data.data));
    }
    return res;
  } catch (error) {
    dispatch(feedbackAction.catchAction(false));
    return error.response;
  }
};

export const createFeedback = (data) => async (dispatch) => {
  dispatch(feedbackAction.catchAction(true));
  try {
    const res = await axiosInstance.post("/user-feedback", data);
    dispatch(feedbackAction.catchAction(false));
    if (res.data.status === true) {
      dispatch(feedbackAction.storeFeedback(res.data.data));
      toast.success(res.data.message);
    }
    return res;
  } catch (error) {
    console.log(error.response, "Dfdf");
    toast.error(error.response.data.errors);
    dispatch(feedbackAction.catchAction(false));
    return error.response;
  }
};