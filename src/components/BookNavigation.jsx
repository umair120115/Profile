import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export default function BookNavigation({ prevChapter, nextChapter, currentPage, totalPages = 4 }) {
  const navigate = useNavigate();

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
            aria-label={`Go to previous chapter: ${prevChapter.title}`}
          >
            <ChevronLeft size={18} />
            <div className="book-nav-text">
              <span className="book-nav-sub">Previous Chapter</span>
              <span className="book-nav-title">{prevChapter.title}</span>
            </div>
          </button>
        ) : (
          <div className="book-nav-placeholder" />
        )}

        <div className="book-nav-indicator">
          <BookOpen size={14} className="book-icon" />
          <span>Chapter {currentPage} of {totalPages}</span>
        </div>

        {nextChapter ? (
          <button
            onClick={() => handleNav(nextChapter.path)}
            className="book-nav-btn book-nav-next"
            aria-label={`Go to next chapter: ${nextChapter.title}`}
          >
            <div className="book-nav-text">
              <span className="book-nav-sub">Next Chapter</span>
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
