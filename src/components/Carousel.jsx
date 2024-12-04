import { motion } from "framer-motion";

const items = [
  "research",
  "graphic design",
  "logo design",
  "advertising",
  "marketing",
  "social media",
];

const Carousel = () => {
  return (
    <div className="h-16 bg-[#36F85C] w-full flex items-center rotate-[0.15deg] overflow-hidden">
      <div className="flex pl-12">
        <motion.div
          animate={{ x: "-60%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex items-center"
        >
          {[...items, ...items].map((item, index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-between gap-5 h-full mr-5 uppercase text-xl [&>ion-icon]:scale-75"
              >
                <span>{item}</span>
                <ion-icon name="ellipse"></ion-icon>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
