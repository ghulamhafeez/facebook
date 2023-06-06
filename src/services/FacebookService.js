export const addPost = (data) => {
  console.log("data", data);
  return fetch("http://localhost:3000/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data,
    }),
  }).then((res) => res.json());
};

// export const getPosts = () => {
//   fetch("http://localhost:3000/post").then((res) => res.json());
// };
