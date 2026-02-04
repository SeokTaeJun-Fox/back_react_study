import { createBrowserRouter } from "react-router-dom";
import Main from "./main/Main";
import Intro from "./intro/Intro";
import Job from "./job/Job";
import Post from "./post/Post";
import Layout from "./layout/Layout";
import DetailLayout from "./detail/DetailLayout";
import Detail from "./detail/Detail";
import Community from "./detail/Community";
import NotFound from "./notfound/NotFound";
import NotUser from "./user/NotUser";
import User from "./user/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path: "", //중첩 라우팅
        element: <Main />
      },
      {
        path: "/intro",
        element: <Intro />
      },
      {
        path: "/job",
        element: <Job />
      },
      {
        path: "/post/:id",  //:변수명
        element: <Post />
      },
      {
        path: "/detail",
        element: <DetailLayout />,
        children: [
          {
            path: "info", // /detail/info
            element: <Detail />
          },
          {
            path: "community",
            element: <Community />
          }
        ]
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/not-user",
        element: <NotUser />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;