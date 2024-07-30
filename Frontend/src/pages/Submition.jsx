import React from 'react';
import { useState, useEffect } from 'react';

export const Submition = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-green-500 mt-4">
        Successfully Submitted!
      </h2>
    </div>
  );
};