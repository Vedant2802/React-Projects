import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
// import { createBrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";

// // const parent = React.createElement("div", { id: "parent" }, [
// //   React.createElement("div", { id: "children" }, "hello World"),
// //   React.createElement("div", { id: "children2" }, "hello world2"),
// // ]);

// const Heading = () => <h1 id="heading">Hello World</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// // console.log(">>>", heading);

// // React Functional Components
// // Functional Components

// const number = 10000;

// const HeadingComponent = () => (
//   <div id="container">
//     <Heading />
//     {Heading()}
//     <Heading></Heading>
//     <h2>{100 + 200}</h2>
//     <h1 className="heading2">My Functional based component</h1>
//   </div>
// );

// //How to render a fucntional component
// root.render(<HeadingComponent />);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
