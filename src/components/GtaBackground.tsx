import { motion } from "framer-motion";

export default function GtaBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(59,130,246,0.16), transparent 30%), radial-gradient(circle at 80% 20%, rgba(56,189,248,0.12), transparent 32%), radial-gradient(circle at 50% 90%, rgba(15,23,42,0.55), transparent 42%)",
        }}
      />
      <motion.div
        className="absolute left-[5%] top-[15%] h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(59,130,246,0.16)" }}
        animate={{ y: [0, -18, 0], x: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-[40%] h-96 w-96 rounded-full blur-3xl"
        style={{ background: "rgba(56,189,248,0.14)" }}
        animate={{ y: [0, 24, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[8%] left-[35%] h-80 w-80 rounded-full blur-3xl"
        style={{ background: "rgba(15, 118, 110, 0.12)" }}
        animate={{ y: [0, -14, 0], x: [0, 16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
