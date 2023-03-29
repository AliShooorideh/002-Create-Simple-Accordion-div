import AccordionBox from "@/components/AccordionBox";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Home() {
  const [open , setOpen]=useState<boolean>(false)
  return (
    <div className="flex justify-center items-center h-screen flex-col space-y-4">
      <AccordionBox title="question" subtitle="answer" i={1} isOpen={open} setIsOpen={setOpen} />
      <AccordionBox title="question" subtitle="answer" i={2} isOpen={open} setIsOpen={setOpen} />
      <AccordionBox title="question" subtitle="answer" i={3} isOpen={open} setIsOpen={setOpen} />
      <AccordionBox title="question" subtitle="answer" i={4} isOpen={open} setIsOpen={setOpen} />
    </div>
  );
}
