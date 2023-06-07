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

export const deletePost = (id) => {
  return fetch(`http://localhost:3000/post/${id}`, {
    method: "DELETE",
  });
};


export const updatePost = (data, id) => {
  console.log("up",data,id)
  const myData = { name: data };

  return fetch(`http://localhost:3000/post/${id}`, {
    method: "PUT",
    body: JSON.stringify(myData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(()=> getPosts())
};

export const getPosts = () => {
  return fetch("http://localhost:3000/post").then((res) => res.json());
};