/**
 * Centralized Framer Motion animation variants
 * Reusable animation patterns for consistent animations across the application
 */

const transitionConfig = {
  standard: { duration: 0.6 },
  slow: { duration: 0.8 },
  fast: { duration: 0.3 },
};

/**
 * Fade in with upward movement
 * Used for section headers and main content
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: transitionConfig.standard,
};

/**
 * Fade in with leftward movement
 * Used for left-side content in grid layouts
 */
export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { ...transitionConfig.standard, delay: 0.2 },
};

/**
 * Fade in with rightward movement
 * Used for right-side content in grid layouts
 */
export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { ...transitionConfig.standard, delay: 0.3 },
};

/**
 * Stagger container for animating children sequentially
 * Used as parent motion.div for groups of animated elements
 */
export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: {
    staggerChildren: 0.1,
    delayChildren: 0.2,
  },
};

/**
 * Stagger item - child variant for staggerContainer
 * Used on child elements within staggerContainer
 */
export const staggerItem = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: transitionConfig.standard,
};

/**
 * Simple fade in
 * Used for quick fade effects without movement
 */
export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: transitionConfig.standard,
};

/**
 * Scale up with fade
 * Used for card hover effects and entrances
 */
export const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: transitionConfig.standard,
};

/**
 * Hero section headline animation
 * Larger movement for more dramatic effect
 */
export const heroHeadline = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: transitionConfig.slow,
};

/**
 * Transition configs for reuse
 */
export const transitions = transitionConfig;
