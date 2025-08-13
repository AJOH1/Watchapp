"use client";
import { useState } from "react";
import Image from "next/image";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.jpg"; // Fallback if no image

  return (
    <>
      {/* Movie Card */}
      <div
        onClick={() => setShowModal(true)}
        className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        <Image
          src={imagePath}
          alt={movie.title}
          width={500}
          height={750}
          className="w-full h-auto"
          priority={false}
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-white">{movie.title}</h3>
          <p className="text-gray-400 text-sm">
            ⭐ {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>

      {/* Movie Details Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg max-w-3xl w-full relative p-6">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col md:flex-row gap-6">
              <Image
                src={imagePath}
                alt={movie.title}
                width={300}
                height={450}
                className="rounded-lg"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
                <p className="text-gray-300 mb-3">{movie.overview}</p>
                <p>
                  <span className="font-semibold">Release Date:</span>{" "}
                  {movie.release_date}
                </p>
                <p>
                  <span className="font-semibold">Rating:</span>{" "}
                  {movie.vote_average.toFixed(1)} / 10
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
