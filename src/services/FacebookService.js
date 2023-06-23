import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/Constants";
import axios from "axios";

export const FacebookApi = createApi({
  reducerPath: "FacebookApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // getPosts: builder.query({
    //   query: () => `post`,
    //   providesTags: ['Post']
    // }),

    getUsersRequest: builder.query({
      query: () => ({
        url: "post/user",
        method: "GET",
      }),
    }),

    // addPost: builder.query({
    //   query: (formData) => ({
    //     url: "post",
    //     method: "POST",
    //     body: formData,
    //   }),
    //   invalidatesTags: ['Post']
    // }),

    // deletePost: builder.query({
    //   query: (id) =>
    //     ({
    //       url: `posts/${id}`,
    //       method: "DELETE",
    //       credentials: 'include',
    //     }),
    //     invalidatesTags: ['Post']
    // }),

    // updatePost: builder.query({
    //   query: (data, id) => ({
    //     url: `posts/${id}`,
    //     method: "PUT",
    //   }),
    //   invalidatesTags: ['Post']

    // }),
  }),
});

export const addPost = (formData) => {
  return axios
    .post("http://localhost:3000/post", formData, {
      method: "POST",
    })
    .then((res) => console.log(res));
};

export const addFriend = (data) => {
  console.log("dat",data)
  const myData = { userName: data };
  return axios
    .post("http://localhost:3000/friend", myData, { 
      method: "POST",
    })
    .then((res) => console.log(res));
};

export const userSignUp = (data) => {
  console.log("data", data);
  return axios
    .post("http://localhost:3000/user/signup", data, {
      method: "POST",
    })
    .then((res) => console.log(res));
};

export const userLogIn = (data) => {
  console.log("data", data);
  return axios
    .post("http://localhost:3000/user/login", data, {
      method: "POST",
    })
    .then((res) => console.log(res));
};

export const deletePost = (id) => {
  return fetch(`http://localhost:3000/post/${id}`, {
    method: "DELETE",
  });
};

export const deleteUser = (id) => {
  return fetch(`http://localhost:3000/user/${id}`, {
    method: "DELETE",
  });
};

export const updatePost = (data, id) => {
  const myData = { name: data };

  return fetch(`http://localhost:3000/post/${id}`, {
    method: "PUT",
    body: JSON.stringify(myData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getPosts = () => {
  return fetch("http://localhost:3000/post").then((res) => res.json());
};
export const getFriends = () => {
  return fetch("http://localhost:3000/friend").then((res) => res.json());
};
export const getUsersRequest = () => {
  return fetch("http://localhost:3000/user").then((res) => res.json());
};

export const {
  useGetPostsQuery,
  useAddPostQuery,
  useDeletePostQuery,
  useUpdatePostQuery,
  UseGetUsersRequestQuery,
} = FacebookApi;
