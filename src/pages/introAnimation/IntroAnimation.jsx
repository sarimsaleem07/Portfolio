import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./IntroAnimation.css";

const IntroAnimation = () => {
  const navigate = useNavigate();
  const name = "Sarim Salim.";
  const letters = name.split("");

  useEffect(() => {
    const timer = setTimeout(() => navigate("/home"), 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, 
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  return (
    <div className="intro-container">
      <motion.h1
        className="intro-name"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default IntroAnimation;
