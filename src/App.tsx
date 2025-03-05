import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { NextIx } from "./NextIx";
import { Acp } from "./Acp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          <Link to="/next-acp">View ACP App</Link>
        </p>
        <p>
          <Link to="/next-ix">View React Ts Vite App</Link>
        </p>
      </div>
    ),
  },
  {
    path: "/next-acp/*",
    element: <Acp />,
  },
  {
    path: "/next-ix/*",
    element: <NextIx />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
