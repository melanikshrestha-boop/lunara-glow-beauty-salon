'use client';

import { useState } from 'react';

export default function Home() {
  // State to track if booking modal is open - starts as false (closed)
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      {/* Hero Section - Full screen video background with no borders */}
      <div className="relative w-full h-full">
        {/* Video background - fills entire screen seamlessly */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Placeholder video URL - replace with your salon film */}
          <source
            src="https://videos.pexels.com/video-files/3014974/3014974-sd_640_360_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay on video - makes text readable without harsh contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content overlay - centered text and button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-4">
          {/* Main heading - elegant and luxurious */}
          <div className="text-center max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-light text-white tracking-wide mb-4">
              Lunara Glow
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              Luxury Beauty & Wellness
            </p>
          </div>

          {/* Book Now Button - large and elegant */}
          <button
            onClick={() => setIsBookingOpen(true)}
            className="mt-8 px-12 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-lg transition-colors duration-300 shadow-lg"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Booking Modal - pops up when "Book Now" is clicked */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          {/* Modal box - elegant white container */}
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
            {/* Close button - X in top right */}
            <button
              onClick={() => setIsBookingOpen(false)}
              className="float-right text-gray-500 hover:text-gray-700 text-2xl mb-4"
            >
              ×
            </button>

            {/* Modal heading */}
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Book Your Appointment
            </h2>

            {/* Placeholder text - Square integration will go here */}
            <div className="text-gray-600 text-center py-8">
              <p className="mb-4">
                Square Booking Integration Coming Soon
              </p>
              <p className="text-sm">
                Customers will select their service, preferred time, and staff member here.
              </p>
            </div>

            {/* Close button at bottom */}
            <button
              onClick={() => setIsBookingOpen(false)}
              className="w-full mt-6 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
