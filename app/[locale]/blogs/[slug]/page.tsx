import React from 'react';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  // Currently a placeholder for the blog details page
  return (
    <main className="flex flex-col flex-1 w-full min-h-[70vh] bg-[#121212] items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h1 className="text-white text-4xl md:text-5xl font-['Ribeat',sans-serif] font-bold mb-6 tracking-wider leading-relaxed">
          Blog Details
        </h1>
        <p className="text-gray-300 text-lg font-['Poppins',sans-serif] max-w-2xl mx-auto mb-10 leading-relaxed">
          This page will contain the full article for <strong className="text-[#FAC716] break-all">{params.slug}</strong>. 
          <br /><br />
          The content structure for the blog details page is currently under development.
        </p>
      </div>
    </main>
  );
}
