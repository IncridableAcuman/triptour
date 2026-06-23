export const fadeInUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], delay }
  }
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
  transition: { duration: 0.4, ease: "easeOut" }
};