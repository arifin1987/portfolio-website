import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";
import AboutMe from "../pages/AboutMe/AboutMe";
import Projects from "../pages/Projects/Projects";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'/about',
          element: <AboutMe></AboutMe>

        },
        {
          path: '/skills',
          element: <Skills></Skills>
        },
        {
          path:'/projects',
          element: <Projects></Projects>

        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        
      ]
    },
  ]);

export default router;