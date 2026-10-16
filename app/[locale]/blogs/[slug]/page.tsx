import React from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { Metadata } from 'next';
import { ChevronLeft } from 'lucide-react';
import { constructPageMetadata } from '../../../utils/seo';

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#038;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, '')
    .trim();
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  let title = slug.replace(/-/g, ' ');
  let description = locale === 'fr' 
    ? "Lisez cet article sur le blog de Grillado's Canada." 
    : "Read this article on Grillado's Canada blog.";
  let imageUrl: string | undefined = undefined;
  let publishedTime: string | undefined = undefined;

  try {
    const encodedSlug = encodeURIComponent(slug);
    const res = await fetch(`https://grillados.ca/wp-json/wp/v2/posts?slug=${encodedSlug}&_embed=1`, { next: { revalidate: 3600 } });
    const data = await res.json();
    if (data && data.length > 0) {
      const post = data[0];
      if (post.title?.rendered) {
        title = decodeHtmlEntities(post.title.rendered);
      }
      if (post.excerpt?.rendered) {
        const rawDesc = decodeHtmlEntities(post.excerpt.rendered);
        description = rawDesc.length > 160 ? `${rawDesc.slice(0, 157)}...` : rawDesc;
      }
      if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
        imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
      }
      if (post.date) {
        publishedTime = post.date;
      }
    }
  } catch {
    // fallback
  }

  return constructPageMetadata({
    locale,
    pathname: `/blogs/${slug}`,
    title,
    description,
    keywords: [
      title,
      "Grillado's",
      "Grillados Canada",
      "Halal Restaurant",
      "Mississauga",
      "Food Blog",
      "Peri Peri Chicken",
      "Grilled Appetisers",
    ],
    images: imageUrl ? [imageUrl] : undefined,
    type: 'article',
    publishedTime,
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch from WP API with _embed to get the featured image
  let post = null;
  let imageUrl = null;
  try {
    const encodedSlug = encodeURIComponent(slug);
    const res = await fetch(`https://grillados.ca/wp-json/wp/v2/posts?slug=${encodedSlug}&_embed=1`, { next: { revalidate: 3600 } });
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
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAC716] text-black font-bold rounded-full hover:bg-white transition-all shadow-md hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Return to Blogs</span>
          </Link>
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

  const cleanTitle = decodeHtmlEntities(post.title?.rendered || '');
  const cleanExcerpt = decodeHtmlEntities(post.excerpt?.rendered || post.content?.rendered || '').slice(0, 160);

  // Schema.org BlogPosting Structured Data for SEO Rich Results
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://grillados.ca/blogs/${slug}`
    },
    "headline": cleanTitle,
    "description": cleanExcerpt,
    "image": imageUrl ? [imageUrl] : ["https://grillados.ca/images/13332603_transparent.png"],
    "datePublished": post.date,
    "dateModified": post.modified || post.date,
    "author": {
      "@type": "Organization",
      "name": "Grillado's",
      "url": "https://grillados.ca"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Grillado's",
      "logo": {
        "@type": "ImageObject",
        "url": "https://grillados.ca/images/13332603_transparent.png"
      }
    }
  };

  // Convert any <h1> tags inside the WordPress content into <h2> to ensure a single <h1> per page (SEO best practice)
  const sanitizedContent = (post.content?.rendered || '')
    .replace(/<h1(\s|>)/gi, '<h2$1')
    .replace(/<\/h1>/gi, '</h2>');

  return (
    <main className="flex flex-col flex-1 w-full bg-[#121212] py-14 md:py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        .wp-content img { max-width: 100%; height: auto; border-radius: 12px; margin: 24px 0; }
        .wp-content h2, .wp-content .elementor-heading-title { 
          color: #ffffff !important; 
          font-family: 'Ribeat', sans-serif; 
          font-size: clamp(1.5rem, 2.8vw, 2.15rem); 
          line-height: 1.25; 
          font-weight: 700;
          margin-top: 2.25rem; 
          margin-bottom: 1.15rem; 
        }
        .wp-content h3 { 
          color: #ffffff !important; 
          font-family: 'Ribeat', sans-serif; 
          font-size: clamp(1.25rem, 2.2vw, 1.65rem); 
          line-height: 1.3; 
          font-weight: 600;
          margin-top: 1.75rem; 
          margin-bottom: 0.85rem; 
        }
        .wp-content h4, .wp-content h5, .wp-content h6 { 
          color: #ffffff !important; 
          font-size: clamp(1.1rem, 1.8vw, 1.35rem); 
          line-height: 1.35; 
          font-weight: 600;
          margin-top: 1.5rem; 
          margin-bottom: 0.65rem; 
        }
        .wp-content a { color: #FAC716; text-decoration: underline; text-underline-offset: 4px; transition: color 0.2s; }
        .wp-content a:hover { color: #ffffff; }
        .wp-content ul { list-style-type: disc; margin-left: 24px; margin-bottom: 24px; }
        .wp-content ol { list-style-type: decimal; margin-left: 24px; margin-bottom: 24px; }
        .wp-content li { margin-bottom: 8px; }
        .wp-content p { margin-bottom: 1.75rem; font-size: 17px; line-height: 1.85; color: #E5E7EB; }
        .wp-content figure { margin: 2.5rem 0; }
        .wp-content figcaption { color: #9CA3AF; font-size: 0.875rem; text-align: center; margin-top: 0.5rem; }
      `}} />
      
      <article className="max-w-[1260px] mx-auto mt-4 md:mt-8 w-full">
        
        {/* Header Section with Title on Left and Image on Right */}
        <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-14 mb-14 border-b border-gray-800 pb-12">
          <div className="flex-1 w-full lg:w-7/12">
            
            {/* Main Article Title - Single <h1> per page for SEO */}
            <h1 
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-['Ribeat',sans-serif] font-bold leading-[1.12] drop-shadow-lg mb-6"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Breadcrumb Section: Home | on top, Title on new line */}
            <nav aria-label="Breadcrumb" className="flex flex-col gap-2 mb-5">
              {/* Line 1: Home | */}
              <div className="flex items-center gap-2 text-sm font-['Poppins',sans-serif]">
                <Link href="/" className="text-white hover:text-[#FAC716] transition-colors font-medium">Home</Link>
                <span className="text-gray-400">|</span>
              </div>
              
              {/* Line 2: Blog Title (White by default, gold on hover, NOT a link) */}
              <span 
                className="text-white hover:text-[#FAC716] transition-colors text-sm sm:text-base font-['Poppins',sans-serif] cursor-default leading-snug" 
                dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
              />
            </nav>

            {/* Date and Time: Both solid white color, no hover */}
            <div className="flex items-center flex-wrap gap-2.5 text-white text-[15px] font-['Poppins',sans-serif]">
              <time dateTime={post.date}>{formattedDate}</time>
              <span className="text-white/60">•</span>
              <span>{formattedTime}</span>
            </div>

          </div>
          
          {/* Featured Image on Right: Fully uncropped with aspect-[2/1] and object-contain, borderless, rounded corners */}
          {imageUrl && (
            <div className="w-full lg:w-5/12 shrink-0 flex justify-center mt-4 lg:mt-0">
              <div className="relative w-full aspect-[2/1] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/70 bg-[#161616]">
                <Image 
                  src={imageUrl} 
                  alt={cleanTitle}
                  title={cleanTitle}
                  fill 
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain" 
                  priority
                />
              </div>
            </div>
          )}
        </header>
        
        {/* Render the WordPress HTML content safely with semantic section and single h1 guarantee */}
        <section 
          className="prose prose-invert prose-lg max-w-4xl font-['Noto_Sans',sans-serif] text-gray-200 leading-relaxed wp-content"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />

        {/* Freshly Launched & Ready to Serve Banner Box (Reduced width and compact buttons) */}
        <aside className="mt-14 mb-10 max-w-2xl w-full rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 bg-gradient-to-br from-[#1C1C1C] via-[#161616] to-[#111111] border border-[#FAC716]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden">
          {/* Subtle gold ambient glow accents */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FAC716]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#FF8C00]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-start gap-5">
            <h2 
              className="text-white text-xl sm:text-2xl md:text-[26px] font-bold tracking-wide leading-tight drop-shadow-md"
              style={{ fontFamily: "'Ribeat', sans-serif" }}
            >
              Freshly Launched & Ready to Serve!
            </h2>

            {/* 2 Action Buttons - matching site button hover and styles, compact sizes */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
              <Link
                href="/menu"
                id="cta-view-menu-btn"
                className="relative overflow-hidden text-black hover:text-white group flex items-center justify-center gap-2 bg-[#FAC716] hover:bg-[#EB5250] transition-colors duration-300 shadow-xl rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base tracking-wider uppercase font-medium cursor-pointer"
                style={{ fontFamily: "'Ribeat', sans-serif" }}
              >
                <span>VIEW OUR MENU</span>
              </Link>

              <Link
                href="https://grillados.bycalibre.ca/location"
                id="cta-order-now-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden text-black hover:text-white group flex items-center justify-center gap-2 bg-[#FAC716] hover:bg-[#EB5250] transition-colors duration-300 shadow-xl rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base tracking-wider uppercase font-medium cursor-pointer"
                style={{ fontFamily: "'Ribeat', sans-serif" }}
              >
                <span>ORDER NOW</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </aside>
      </article>
    </main>
  );
}
