import { useRef, useEffect } from "react";

export const Acp = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      import("acp/bootstrap").then(({ mount }) => {
        mount();
      });
    }
  }, []);

  return <div id="acp-host" ref={ref}></div>;
};
