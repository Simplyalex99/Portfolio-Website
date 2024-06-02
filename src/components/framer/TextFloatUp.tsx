import { motion } from 'framer-motion';

export const AnimatedLetters = ({ title }: { title: string }) => {
  const letters = title.split('');

  return (
    <motion.span
      transition={{
        delayChildren: 0.4,
        staggerChildren: 0.1,
      }}
    >
      {letters.map((letter, i) => {
        return (
          <motion.span
            key={`${letter}${i}`}
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export const TextFloatUp = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 400, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
        delay: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default TextFloatUp;
