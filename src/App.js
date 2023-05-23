import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {MainLayout} from './container/MainLayout'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,

    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
