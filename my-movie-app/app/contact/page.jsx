"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully! Please check in your Spam, if you didn't get my mail.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      setStatus("❌ An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar */}
      <nav className="bg-black bg-opacity-80 p-4 fixed w-full top-0 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-500 hover:text-red-400">
            Home
          </Link>
          
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center pt-28 p-6">
        <div className="bg-gray-800 shadow-lg rounded-lg max-w-lg w-full p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-red-400">
            Contact Me
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-sm text-gray-300">{status}</p>
          )}
        </div>
      </div>

      {/* Footer (copied from Home page) */}
      <footer className="bg-black bg-opacity-80 text-gray-400 text-sm py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Cinematrix. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/" className="hover:text-red-500">Home</Link>
            <a href="https://github.com/AJOH1" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
