// app/components/Hero.js
import Image from 'next/image';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] bg-gray-900 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/hero.png" // Add your hero image inside public folder
        alt="Hero Background"
       fill
        className="object-cover opacity-60"
      />

      {/* Overlay Text */}
     <div className="relative text-center text-white z-10">
  <h1 className="text-2xl md:text-6xl font-bold mb-4">
    Welcome to <span className="text-blue-800">MovieApp</span>
  </h1>

        <p className="text-lg md:text-2xl mb-6">
          Discover and update yourself on trending movies...
        </p>
        <Link href="/contact">
  <button className="bg-blue-800 hover:bg-red-400 px-6 py-3 rounded-lg font-semibold">
    Contact Me!
  </button>
</Link>

      </div>
    </section>
  );
}
