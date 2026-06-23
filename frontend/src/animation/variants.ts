import type { Variants } from "framer-motion";

export const fadeInUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const hoverCardEffect = {
  y: -12,
  scale: 1.03,
  transition: {
    duration: 0.4,
  },
};