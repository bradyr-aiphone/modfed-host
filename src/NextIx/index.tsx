import { lazy, Suspense } from "react";
const NextIxApp = lazy(() => import("viteApp/App"));

export const NextIx = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NextIxApp />
    </Suspense>
  );
};
