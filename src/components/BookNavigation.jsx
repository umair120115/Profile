import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BookNavigation({ prevChapter, nextChapter, currentPage, totalPages = 4 }) {
  const navigate = useNavigate();

  const pages = [
    { page: 1, path: '/', label: 'Overview' },
    { page: 2, path: '/experience', label: 'Experience' },
    { page: 3, path: '/projects', label: 'Projects & Demos' },
    { page: 4, path: '/education', label: 'Education & Contact' }
  ];

  const handleNav = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <div className="book-nav-wrapper">
      <div className="book-nav-container">
        {prevChapter ? (
          <button
            onClick={() => handleNav(prevChapter.path)}
            className="book-nav-btn book-nav-prev"
            aria-label={`Go to previous page: ${prevChapter.title}`}
          >
            <ChevronLeft size={18} />
            <div className="book-nav-text">
              <span className="book-nav-sub">Previous</span>
              <span className="book-nav-title">{prevChapter.title}</span>
            </div>
          </button>
        ) : (
          <div className="book-nav-placeholder" />
        )}

        {/* Interactive Glowing Page Dots */}
        <div className="book-nav-indicator" title="Switch pages">
          {pages.map((p) => (
            <button
              key={p.page}
              onClick={() => handleNav(p.path)}
              className={`nav-dot ${currentPage === p.page ? 'active' : ''}`}
              aria-label={`Go to ${p.label}`}
              title={p.label}
            />
          ))}
        </div>

        {nextChapter ? (
          <button
            onClick={() => handleNav(nextChapter.path)}
            className="book-nav-btn book-nav-next"
            aria-label={`Go to next page: ${nextChapter.title}`}
          >
            <div className="book-nav-text">
              <span className="book-nav-sub">Next</span>
              <span className="book-nav-title">{nextChapter.title}</span>
            </div>
            <ChevronRight size={18} />
          </button>
        ) : (
          <div className="book-nav-placeholder" />
        )}
      </div>
    </div>
  );
}
