import React from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch from WP API with _embed to get the featured image
  let post = null;
  let imageUrl = null;
  try {
    const res = await fetch(`https://grillados.ca/wp-json/wp/v2/posts?slug=${slug}&_embed=1`, { next: { revalidate: 3600 } });
    const data = await res.json();
    if (data && data.length > 0) {
      post = data[0];
      if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0) {
        imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
      }
    }
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }

  if (!post) {
    return (
      <main className="flex flex-col flex-1 w-full min-h-[70vh] bg-[#121212] items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mt-20">
          <h1 className="text-white text-4xl md:text-5xl font-['Ribeat',sans-serif] font-bold mb-6 tracking-wider leading-relaxed">
            Blog Not Found
          </h1>
          <p className="text-gray-300 text-lg font-['Poppins',sans-serif] max-w-2xl mx-auto mb-10 leading-relaxed">
            We couldn't find the article for <strong className="text-[#FAC716] break-all">{slug}</strong>.
          </p>
        </div>
      </main>
    );
  }

  // Format Date and Time
  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = postDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toLowerCase();

  return (
    <main className="flex flex-col flex-1 w-full bg-[#121212] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <style dangerouslySetInnerHTML={{__html: `
        .wp-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 20px 0; }
        .wp-content h1, .wp-content h2, .wp-content h3 { color: #FAC716; font-family: 'Ribeat', sans-serif; margin-top: 2rem; margin-bottom: 1rem; }
        .wp-content h1 { font-size: 2.5rem; }
        .wp-content h2 { font-size: 2rem; }
        .wp-content h3 { font-size: 1.5rem; }
        .wp-content a { color: #FAC716; text-decoration: underline; }
        .wp-content ul { list-style-type: disc; margin-left: 20px; margin-bottom: 20px; }
        .wp-content ol { list-style-type: decimal; margin-left: 20px; margin-bottom: 20px; }
        .wp-content p { margin-bottom: 1.5rem; }
        .wp-content figure { margin: 2rem 0; }
        .wp-content figcaption { color: #9CA3AF; font-size: 0.875rem; text-align: center; margin-top: 0.5rem; }
      `}} />
      <div className="max-w-4xl mx-auto mt-10 w-full">
        
        {/* Header Section with Title on Left and Image on Right */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-14 mb-14 border-b border-gray-800 pb-12">
          <div className="flex-1 w-full md:w-1/2">
            
            {/* Title */}
            <h1 
              className="text-white text-3xl md:text-5xl lg:text-[54px] font-['Ribeat',sans-serif] font-bold leading-[1.1] drop-shadow-lg mb-4"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Breadcrumb */}
            <div className="flex items-center flex-wrap gap-2 text-sm text-gray-400 font-['Poppins',sans-serif] mb-3">
              <Link href="/" className="hover:text-[#FAC716] transition-colors">Home</Link>
              <span>|</span>
              <span className="text-[#FAC716] line-clamp-1" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </div>

            {/* Date and Time */}
            <div className="flex items-center flex-wrap gap-3 text-gray-300 font-['Poppins',sans-serif] text-[15px]">
              <Link href="#" className="hover:text-[#FAC716] transition-colors">{formattedDate}</Link>
              <span className="text-gray-500">•</span>
              <span>{formattedTime}</span>
            </div>

          </div>
          
          {imageUrl && (
            <div className="w-full md:w-1/2 shrink-0 flex justify-center mt-6 md:mt-0">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[4px] border-[#2A2B2B] group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <Image 
                  src={imageUrl} 
                  alt={post.title.rendered.replace(/<[^>]+>/g, '')} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain" 
                  priority
                />
              </div>
            </div>
          )}
        </div>
        
        {/* Render the WordPress HTML content safely */}
        <div 
          className="prose prose-invert prose-lg max-w-none font-['Noto_Sans',sans-serif] text-gray-200 leading-relaxed wp-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </main>
  );
}
