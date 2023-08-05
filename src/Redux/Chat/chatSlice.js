import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatUser: null,
  chat: null,
  userChat: null,
  loading: false,
};

const ChatSlice = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    catchAction: (state, action) => {
      state.loading = action.payload;
    },
    setChatUser: (state, action) => {
      state.chatUser = action.payload;
    },
    setUserChat: (state,action) => {
      state.userChat = action.payload.user;
      state.chat = action.payload.chat;
    },
    setChatOnline: (state,action ) => {
      state.chatUser = state.chatUser.map ((item) => item.id === parseInt(action.payload) ? { ...item, is_online: true } : item)
    },
    setChatOffline: (state,action ) => {
      state.chatUser = state.chatUser.map ((item) => item.id === parseInt(action.payload) ? { ...item, is_online: false } : item)
    },
    resetData: () => {
      return initialState;
    },
  },
});

export default ChatSlice;

export const chatActions = ChatSlice.actions;