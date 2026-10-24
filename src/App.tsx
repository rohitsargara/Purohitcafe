/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { ReservationModal } from './components/ReservationModal';
import { Lightbox } from './components/Lightbox';
import { PolicyModal, PolicyType } from './components/PolicyModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{
    images: { src: string; title?: string }[];
    index: number | null;
  }>({
    images: [],
    index: null
  });
  const [policyType, setPolicyType] = useState<PolicyType | null>(null);

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      if (hash === 'about' || hash === 'about-us') {
        setCurrentPage('about');
      } else if (hash === 'menu' || hash === 'menu-restaurant') {
        setCurrentPage('menu');
      } else if (hash === 'gallery') {
        setCurrentPage('gallery');
      } else if (hash === 'contact' || hash === 'contact-us') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title dynamically
    const titles: Record<PageId, string> = {
      home: 'Purohit Cafe | Best South Indian Food & Chaat Udaipur',
      about: 'Purohit Cafe | About Us',
      menu: 'Purohit Cafe | Menu Restaurant',
      gallery: 'Purohit Cafe | Gallery',
      contact: 'Purohit Cafe | Contact Us'
    };
    document.title = titles[page] || 'Purohit Cafe';
  };

  const handleOpenLightbox = (
    images: { src: string; title?: string }[],
    index: number
  ) => {
    setLightboxState({ images, index });
  };

  const handleCloseLightbox = () => {
    setLightboxState({ images: [], index: null });
  };

  const handleNavigateLightbox = (index: number) => {
    setLightboxState((prev) => ({ ...prev, index }));
  };

  return (
    <div className="min-h-screen bg-[#0d1819] text-white flex flex-col font-sans selection:bg-[#606e53] selection:text-white">
      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenReservation={() => setIsReservationOpen(true)}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            onOpenReservation={() => setIsReservationOpen(true)}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage onOpenLightbox={handleOpenLightbox} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
      </main>

      {/* Global Footer (Petpooja removed, Purohit Cafe branding) */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPolicy={(type) => setPolicyType(type)}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Image Lightbox Modal */}
      <Lightbox
        images={lightboxState.images}
        currentIndex={lightboxState.index}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />

      {/* Legal Policy Modal */}
      <PolicyModal
        policyType={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}
