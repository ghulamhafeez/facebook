import axios from "axios";

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
