import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./container/MainLayout";
import { Home } from "./facebook-components/Home";
import { Watch } from "./facebook-components/Watch";
import { MarketPlace } from "./facebook-components/MarketPlace";
import { Feeds } from "./facebook-components/Feeds";
import { Provider } from "react-redux";
import { Groups } from "./facebook-components/Groups";
import { store } from "./store/Store";
import { FriendsPage } from "./facebook-components/FriendsPage";
import { SignUp } from "./auth/Signup";

// import { LogIn } from "./auth/Login";
export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,

      children: [
        {
          path: ``,
          element: <Home />,
        },
        {
          path: "/feed",
          element: <Feeds />,
        },
        {
          path: "/group",
          element: <Groups />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
        {
          path: "/market-place",
          element: <MarketPlace />,
        },
        {
          path: "/friends-page",
          element: <FriendsPage />,
        },
      ],
    },

  ]);
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
};
