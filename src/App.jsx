import { Routes, Route } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";
import { useEffect, useRef } from "react";




function App() {
  const containerRef = useRef(null);

  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //     // ... all available Locomotive Scroll instance options
    //   }}
    //   watch={
    //     [
    //       //..all the dependencies you want to watch to update the scroll.
    //       //  Basicaly, you would want to watch page/location changes
    //       //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    //     ]
    //   }
    //   containerRef={containerRef}
    // >

    // </LocomotiveScrollProvider>


    <main>
     
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/gallery" element={<Gallery />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/volunteer" element={<Volunteer />} />
     </Routes>
   </main>


  );
}

export default App;
