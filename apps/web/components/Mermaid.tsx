import mermaid from "mermaid";
import { useEffect, useRef } from "react";
const Mermaid = ({
  chart,
  onCallback,
}: {
  chart: string;
  onCallback?: (name: string) => void;
}) => {
  const mermaidRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Callback for handling Mermaid callbacks
    //@ts-ignore
    window.callback = onCallback;
    mermaid.mermaidAPI.initialize({
      startOnLoad: true,
      theme: "dark",
      securityLevel: "loose",
      fontFamily: "'Vazirmatn', sans-serif",
    });
    mermaid.mermaidAPI.render("sas", chart, (svgCode, bindFunctions) => {
      if (!mermaidRef.current) return;
      mermaidRef.current.innerHTML = svgCode;
      bindFunctions?.(mermaidRef.current);
    });
  }, []);

  return (
    <div
      className="overflow-x-auto w-full flex items-center justify-center"
      ref={mermaidRef}
    >
      درحال آماده سازی نقشه راه
    </div>
  );
};

export default Mermaid;
