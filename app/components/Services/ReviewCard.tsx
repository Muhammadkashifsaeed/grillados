"use client";

import React from 'react';
import Image from 'next/image';

export interface ReviewProps {
  date: string;
  review: string;
  name: string;
  avatarSrc?: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ date, review, name, avatarSrc }) => {
  return (
    <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-md p-5 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">

      {/* Header: Avatar + Name + Date + Google Icon */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-300 relative flex-shrink-0">
            {avatarSrc ? (
              <Image
                src={avatarSrc}
                alt={name}
                fill
                className="object-cover"
                sizes="44px"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            ) : null}
            {/* Fallback initial shown via CSS if image fails */}
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg bg-gray-400 select-none" style={{ zIndex: -1 }}>
              {name.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* Name + Date */}
          <div className="flex flex-col">
            <span className="text-gray-900 font-semibold text-3.75 leading-tight">{name}</span>
            <span className="text-gray-500 text-xs">{date}</span>
          </div>
        </div>

        {/* Google G Icon */}
        <div className="w-6 h-6 flex-shrink-0 mt-1">
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.116-11.34-7.56l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
          </svg>
        </div>
      </div>

      {/* Stars + Blue checkmark */}
      <div className="flex items-center gap-1.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#F5A623] fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        ))}
        {/* Blue checkmark */}
        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#1a73e8"/>
          <path d="M7 12.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-3.5 leading-relaxed">
        {review}
      </p>
    </div>
  );
};

export default ReviewCard;
