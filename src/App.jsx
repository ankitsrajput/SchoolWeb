import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Router, Route } from 'react-router-dom';
import './App.css'
import Layout from './layouts/MainLayout';
import Home from './pages/Home'
import PrincipalMessage from './pages/PrincipalMsg';
import DirectorMessage from './pages/DirectorMsg';
import ChairmanMessage from './pages/ChairmanMsg';
import About from './pages/About';
import Contact from './pages/Contact';
import VicePrincipalMessage from './pages/VicePrincipalDesk';
import Gallery from './pages/Gallery';
import Facilities from './pages/Facilities';
import Admission from './pages/Admission';

function App() {
  const rts = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "principal-desk",
        element: <PrincipalMessage />,
      },
      {
        path: "vice-principal-desk",
        element: <VicePrincipalMessage />,
      },
      {
        path: "director-desk",
        element: <DirectorMessage />,
      },
      {
        path: "chairman-desk",
        element: <ChairmanMessage />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "facilities",
        element: <Facilities />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
    ],
  },
]);

  return (
    <>
      <RouterProvider router={rts} />
    </>
  )
}

export default App
