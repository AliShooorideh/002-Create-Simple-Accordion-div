import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
interface Iitem {
  title: string;
  subtitle: string;
  isOpen: any;
  setIsOpen: any;
  i: number;
}

export default function AccordionBox(item: Iitem) {
  const expanded = item.i === item.isOpen;
  return (
    <div className="flex w-1/2 flex-col rounded-lg border bg-white">
      <motion.header
        className="flex items-center justify-between px-5 py-2"
        initial={false}
        onClick={() => item.setIsOpen(expanded ? false : item.i)}
      >
        <div className="flex items-center space-x-4 space-x-reverse">
          <span>{item.title}</span>
        </div>
        <motion.div
          className="flex"
          animate={{
            rotate: expanded ? 180 : 0,
          }}
        >
          <ChevronDownIcon
            className={`w-3 ${expanded ? "text-blue-500" : "text-gray-500"}`}
          />
        </motion.div>
      </motion.header>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="mt-4 p-4">
              <p className="text-base">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
