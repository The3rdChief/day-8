import AnimatedText from "./components/AnimatedText";
import Carousel from "./components/Carousel";
import robotImg from "./assets/biyified_portrait_picture_futuristic_humanoid_with_smooth_cur_6a722a37-cc8e-4cd3-9e0a-d6d14a42cf70_1 1.png";
import FlyingNav from "./components/FlyingNav";
// import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="font-sofia relative bg-black/95 min-h-[1000px] w-svw overflow-x-clip pt-11">
        <div className="w-full space-y-12">
          <header className="rotate-[0.15deg] w-full px-2 relative z-30">
            <AnimatedText />
          </header>
          <main className="space-y-12">
            <div className="w-full overflow-x-clip flex items-center justify-center">
              <Carousel />
            </div>
            <section className="w-full mx-auto px-4 flex flex-col sm:flex-row justify-between gap-12 text-[#FFFFFF]/70">
              <p className="max-w-[40ch]">
                Dive deep into interactive environments, unravel the science
                behind Mars&#39; exploration, and feel the thrill of discovery
                as you navigate this extraordinary extraterrestrial world.{" "}
              </p>
              <ul className="self-end text-right uppercase">
                <li className="hover:text-white/85 transition-all duration-300 hover:text-lg">
                  london
                </li>
                <li className="hover:text-white/85 transition-all duration-300 hover:text-lg">
                  lagos
                </li>
                <li className="hover:text-white/85 transition-all duration-300 hover:text-lg">
                  new york
                </li>
                <li className="hover:text-white/85 transition-all duration-300 hover:text-lg">
                  milan
                </li>
              </ul>
            </section>
          </main>
          <img
            src={robotImg}
            alt=""
            style={{
              objectFit: "contain",
              objectPosition: "center",
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className=" min-w-[32rem] w-11/12 max-w-[59rem]"
          />
        </div>
        <FlyingNav />
      </div>
    </>
  );
}

export default App;
