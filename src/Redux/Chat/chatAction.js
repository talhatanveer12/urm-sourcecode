//import axiosInstance from "../../../../../Http-Request/axios-instance";
import axiosInstance from "../../Http-Request/axios-instance";
import { chatActions } from "./chatSlice";
export const getChatUser = () => async (dispatch) => {
  dispatch(chatActions.catchAction(true));
  try {
    const res = await axiosInstance.get(`/user-chat`);
    dispatch(chatActions.catchAction(false));
    if (res.data.status === true) {
      dispatch(chatActions.setChatUser(res.data.data));
    }
    return res;
  } catch (error) {
    dispatch(chatActions.catchAction(false));
    return error.response;
  }
};

export const getChatUserAndChat = (id) => async (dispatch) => {
  dispatch(chatActions.catchAction(true));
  try {
    const res = await axiosInstance.get(`/user-chat/${id}`);
    dispatch(chatActions.catchAction(false));
    if (res.data.status === true) {
      dispatch(chatActions.setUserChat(res.data.data));
    }
    return res;
  } catch (error) {
    dispatch(chatActions.catchAction(false));
    return error.response;
  }
};