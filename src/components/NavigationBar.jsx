import { useState } from "react";
import Logo from "./../assets/Logo.png";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Analytics",
    icon: BarChart2,
  },
  {
    name: "Transactions",
    icon: ArrowRightLeft,
  },
  {
    name: "Help Center",
    icon: HelpCircleIcon,
  },
];

const variants = {
  expaned: { width: "20%" },
  nonExpanded: { width: "5%" },
};

const NavigationBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={isExpanded ? "Expanded" : "nonExpanded"}
      variants={variants}
      className={
        "py-12 flex flex-col border border-r-1 w-1/5 h-screen relative " +
        (isExpanded ? "px-10" : "px-4")
      }
    >
      {/* Logo */}
      <div className="logo-div flex space-x-3 items-center cursor-pointer">
        <img src={Logo} />
        <span className={isExpanded ? "block" : "hidden"}>React Dashboard</span>
      </div>

      <div
        className="bg-blue-500 w-6 h-6 p-1 rounded-full absolute -right-3 top-12 text-white flex items-center justify-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ChevronRight />
      </div>

      {/* NavLinks */}
      <div className="mt-8 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex space-x-3 p-2 rounded cursor-pointer" +
              (activeIndex === index
                ? " bg-blue-500 text-white font-semibold"
                : "")
            }
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <span className={isExpanded ? "block" : "hidden"}>{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationBar;
