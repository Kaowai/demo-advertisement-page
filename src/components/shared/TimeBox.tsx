import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IProps {
  value: number;
  label: string;
}

const TimeBox = ({ value, label }: IProps) => {
  return (
    <div className="flex items-center justify-center w-14 gap-1">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="body-s text-[#F7F7F7]"
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
      <span className="body-s text-[#F7F7F7]">{label}</span>
    </div>
  );
};

export default TimeBox;
