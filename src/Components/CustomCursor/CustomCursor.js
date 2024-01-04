import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./CustomCursor.css";
const CustomCursor = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleCursor = (e) => {
      console.log(e.clientX, e.clientY);
      setX(e.clientX - 20);
      setY(e.clientY - 20);
    };

    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);
  return (
    <div>
      <motion.div
        className="cursor"
        animate={{
          translateX: x,
          translateY: y,
        }}
      ></motion.div>
    </div>
  );
};

export default CustomCursor;
