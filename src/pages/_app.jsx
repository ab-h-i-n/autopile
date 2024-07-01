import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  return (
    <AnimatePresence key={pathname} mode="wait">
      <motion.div
        initial={{ filter: "blur(100px)" }}
        animate={{ filter: "blur(0px)" }}
        exit={{ filter: "blur(100px)" }}
        transition={{ duration: 1, ease: [1, -0.01, 0.52, 0.73] }}
      >
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
