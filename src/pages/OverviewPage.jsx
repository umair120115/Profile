import React from 'react';
import HeroSection from '../components/HeroSection';
import AiFirstSection from '../components/AiFirstSection';
import TechArsenal from '../components/TechArsenal';
import BookNavigation from '../components/BookNavigation';

export default function OverviewPage() {
  return (
    <div className="page-wrapper fade-in-page">
      <HeroSection />
      <AiFirstSection />
      <TechArsenal />

      <BookNavigation
        currentPage={1}
        totalPages={4}
        prevChapter={null}
        nextChapter={{ title: "Professional Experience", path: "/experience" }}
      />
    </div>
  );
}
