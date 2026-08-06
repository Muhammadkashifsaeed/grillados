import React from 'react';

export interface ReviewProps {
  rating: string;
  date: string;
  review: string;
  name: string;
  initials: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ rating, date, review, name, initials }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-7 h-full min-h-[220px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] cursor-default">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#F5A623] font-bold text-lg tracking-wider">{rating}</span>
        <span className="text-gray-500 text-sm font-medium">{date}</span>
      </div>
      
      <p className="text-gray-700 text-[16px] leading-relaxed flex-grow">
        {review}
      </p>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-sm tracking-widest">
            {initials}
          </div>
          <span className="text-gray-700 font-medium">{name}</span>
        </div>
        {/* Google Icon SVG */}
        <div className="w-[26px] h-[26px]" aria-label="Google Review">
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.116-11.34-7.56l-6.734,5.204C9.246,40.088,16.02,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
