import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {MainLayout} from './container/MainLayout';
import {Home} from './facebook-components/Home';
import {Watch} from './facebook-components/Watch';
import {MarketPlace} from './facebook-components/MarketPlace'
import {Feeds} from './facebook-components/Feeds';
import { Groups } from './facebook-components/Groups';
export const Routes = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              path: ``,
              element: <Home />,
            },
            {
              path: '/feed',
              element: <Feeds />,
            },
            {
              path: '/group',
              element: <Groups />,
            },
            {
              path: '/watch',
              element: <Watch />,
            },
            {
              path: '/market-place',
              element: <MarketPlace />,
            },

          ]
    
        },
      ])
  return (
    <div>
           <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
