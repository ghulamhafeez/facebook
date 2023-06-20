import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/Constants";
import axios from "axios";

export const FacebookApi = createApi({
  reducerPath: "FacebookApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => `post`,
    }),
    // addPost: builder.query({
    //   query: () => `post`,
    // }),
    // deletePost: builder.query({
    //   query: (id) => `post/${id}`,
    // }),
    // updatePost: builder.query({
    //   query: (id) => `post/${id}`,
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

export const deletePost = (id) => {
  return fetch(`http://localhost:3000/post/${id}`, {
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
  }).then(() => getPosts());
};

export const getPosts = () => {
  return fetch("http://localhost:3000/post").then((res) => res.json());
};

export const {
  useGetPostQuery,
  // useAddPostQuery,
  // useDeletePostQuery,
  // useUpdatePostQuery,
} = FacebookApi;
