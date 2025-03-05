import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextIx } from "./NextIx";
import { lazy, Suspense } from "react";

const AcpApp = lazy(() => import("acp/App"));

const router = createBrowserRouter([
  {
    path: "/acp",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <AcpApp />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <NextIx />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
