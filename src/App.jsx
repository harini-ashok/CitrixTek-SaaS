import React, { useState, useEffect } from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Solutions } from "./components/solutions";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import {CaseStudiesPage} from "./components/CaseStudiesPage";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Layout = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // do some things
  return <>
    <div>
              <Header data={landingPageData.Header} />
              <Solutions data={landingPageData.Solutions} />
              <Services data={landingPageData.Services} />
              <About data={landingPageData.About} />
              <Team data={landingPageData.Team} />
              <Testimonials data={landingPageData.Testimonials} />
              <Contact data={landingPageData.Contact} />
            </div>
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    // errorElement: <NotFound/>
  },
  {
    path: "/about",
    element: <CaseStudiesPage/>
  }
])
const App = () => {
 
  return (
    <>
     <Navigation />
     <RouterProvider router={router}/>
    </>
   
    // <Router>
    //   <Navigation />
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <div>
    //           <Header data={landingPageData.Header} />
    //           <Solutions data={landingPageData.Solutions} />
    //           <Services data={landingPageData.Services} />
    //           <About data={landingPageData.About} />
    //           <Team data={landingPageData.Team} />
    //           <Testimonials data={landingPageData.Testimonials} />
    //           <Contact data={landingPageData.Contact} />
    //         </div>
    //       }
    //     />
    //     <Route path="/casestudies" element={<CaseStudiesPage />} /> {/* ✅ Fixed path */}
    //   </Routes>
    // </Router>
  );
};

export default App;
