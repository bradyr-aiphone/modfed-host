/// <reference types="vite/client" />

declare module "viteApp/App" {
  import React from "react";

  const App: React.FC;
  export default App;
}

declare module "acp/bootstrap" {
  export const mount: () => void;
}
