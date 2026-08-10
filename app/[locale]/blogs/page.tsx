import React from 'react';
import BlogsHeroBanner from '../../components/BlogsHeroBanner';
import { ExploreArticles } from '../../components/ExploreArticles';

export default function BlogsPage() {
  return (
    <main className="flex flex-col flex-1 w-full min-h-screen bg-black">
      <BlogsHeroBanner />
      <ExploreArticles />
    </main>
  );
}
