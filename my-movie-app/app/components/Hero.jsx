"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const slides = [
    {
      image: "/cinematrix.jpg",
      title: "Welcome to Cinematrix",
      subtitle: "Discover and update yourself on trending movies...",
    },
    {
      image: "/cinematrix2.jpg",
      title: "Your Gateway to Movies",
      subtitle: "Stay updated with the latest blockbusters...",
    },
    {
      image: "/cinematrix3.jpg",
      title: "Grab your popcorn!",
      subtitle: "Aways updated to new movies...",
    },

   {
      image: "/cinematrix4.jpg",
      title: "Explore Cinematic Worlds",
      subtitle: "Find movies you'll love to watch...",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // longer wait before switching
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[500px] bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Image */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }} // slower image slide
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={slides[current].image}
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-60"
          />
        </motion.div>
      </AnimatePresence>

      {/* Text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current + "-text"}
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-50%", opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }} // text lags slightly for smoother feel
          className="relative text-center text-white z-10"
        >
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            {slides[current].title.split(" ").map((word, i) =>
              word === "Cinematrix" ? (
                <span key={i} className="text-red-400">{word} </span>
              ) : (
                word + " "
              )
            )}
          </h1>
          <p className="text-lg md:text-2xl font-bold mb-6">
            {slides[current].subtitle}
          </p>
          <Link href="/contact">
            <button className="bg-red-400 hover:bg-blue-400 px-6 py-3 rounded-lg font-semibold">
              Contact Me!
            </button>
          </Link>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
