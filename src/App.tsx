/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { TeamSection } from './components/TeamSection';
import { PraxisSection } from './components/PraxisSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { 
  useAccessibility, 
  AccessibilityModal, 
  FloatingAccessibilityButton 
} from './components/AccessibilityModal';

export default function App() {
  const [activeNav, setActiveNav] = useState('start');
  const [a11yModalOpen, setA11yModalOpen] = useState(false);
  const a11y = useAccessibility();

  useEffect(() => {
    const sectionIds = ['kontakt', 'leistungen', 'praxis', 'team', 'philosophie', 'start'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 120) {
        setActiveNav('start');
        return;
      }

      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 96;
      const scrollTrigger = scrollY + headerHeight + 30;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const h2 = el.querySelector('h2');
          const target = h2 ? (h2.closest('.text-left') || h2) : el;
          const targetTop = target.getBoundingClientRect().top + scrollY;
          if (scrollTrigger >= targetTop) {
            setActiveNav(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#2B2326] antialiased selection:bg-pink-900 selection:text-white font-sans overflow-x-hidden">
      {/* 1. Practice Header with Brand Logo, Navigation, and Action */}
      <Header 
        activeNav={activeNav}
        onNavClick={setActiveNav}
        onOpenAccessibility={() => setA11yModalOpen(true)}
        isA11yActive={a11y.settings.enabled}
      />

      {/* Main Content Sections (ordered identically to the navigation menu) */}
      <main id="start">
        {/* Welcome Hero Section featuring Praxisteam & Personal Welcome Message */}
        <Hero />

        {/* Unsere Philosophie Section */}
        <PhilosophySection />

        {/* Team Section */}
        <TeamSection />

        {/* Praxis Räumlichkeiten Carousel Section */}
        <PraxisSection />

        {/* Medical Services (Leistungen) Section */}
        <ServicesSection />

        {/* Contact & Hours Section */}
        <ContactSection />
      </main>

      {/* Comprehensive Practice Footer with Impressum and Datenschutz Modals */}
      <Footer onOpenAccessibility={() => setA11yModalOpen(true)} />

      {/* Accessibility Settings Modal Dialog */}
      <AccessibilityModal 
        isOpen={a11yModalOpen}
        onClose={() => setA11yModalOpen(false)}
        a11y={a11y}
      />

      {/* Floating Quick Accessibility Button (Bottom Left) */}
      <FloatingAccessibilityButton 
        onClick={() => setA11yModalOpen(true)}
        isActive={a11y.settings.enabled}
      />
    </div>
  );
}
