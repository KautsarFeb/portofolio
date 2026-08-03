import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GtaBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const glowBaseClass = "absolute rounded-full blur-3xl";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(246, 131, 59, 0.16), transparent 30%), radial-gradient(circle at 80% 20%, rgba(246, 131, 59,0.12), transparent 32%), radial-gradient(circle at 50% 90%, rgba(42, 21, 15, 0.55), transparent 42%)",
        }}
      />

      {isMobile ? (
        <>
          <div className={`${glowBaseClass} left-[5%] top-[15%] h-48 w-48 opacity-70`} style={{ background: "rgba(246, 131, 59,0.16)" }} />
          <div className={`${glowBaseClass} right-[8%] top-[40%] h-64 w-64 opacity-70`} style={{ background: "rgba(246, 131, 59,0.14)" }} />
          <div className={`${glowBaseClass} bottom-[8%] left-[35%] h-56 w-56 opacity-70`} style={{ background: "rgba(246, 131, 59, 0.12)" }} />
        </>
      ) : (
        <>
          <motion.div
            className={`${glowBaseClass} left-[5%] top-[15%] h-72 w-72`}
            style={{ background: "rgba(246, 131, 59,0.16)" }}
            animate={{ y: [0, -18, 0], x: [0, 18, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={`${glowBaseClass} right-[8%] top-[40%] h-96 w-96`}
            style={{ background: "rgba(246, 131, 59,0.14)" }}
            animate={{ y: [0, 24, 0], x: [0, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={`${glowBaseClass} bottom-[8%] left-[35%] h-80 w-80`}
            style={{ background: "rgba(246, 131, 59, 0.12)" }}
            animate={{ y: [0, -14, 0], x: [0, 16, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}
