import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import BrochureSection from './components/BrochureSection';
import InstructorsSection from './components/InstructorsSection';
import AIHero from './components/AIHero';
import Footer from './components/Footer';
import Module1Simple from './modules/Module1Simple';
// import Module2 from './modules/Module2';
import Module3 from './modules/Module3';
import Module4 from './modules/Module4';
import Module5 from './modules/Module5';
import Module6 from './modules/Module6';
import Module7 from './modules/Module7';
import Module8 from './modules/Module8';
// import TeamworkModule from './components/modules/TeamworkModule';
import CourseCatalog from './components/CourseCatalog';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalog' | 'communication' | 'critical-thinking' | 'design-thinking' | 'adaptive-learning' | 'prompt-engineering' | 'teamwork' | 'data-driven' | 'mental-physical-health'>('home');
  const [selectedModule, setSelectedModule] = useState<string>('');
  const [hasProvidedLeadDetails, setHasProvidedLeadDetails] = useState<boolean>(() => {
    return localStorage.getItem('hasProvidedLeadDetails') === 'true';
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  const handleLeadCaptureSuccess = () => {
    setHasProvidedLeadDetails(true);
    localStorage.setItem('hasProvidedLeadDetails', 'true');
  };

  const handleLogin = () => {
    const newLoginState = !isLoggedIn;
    setIsLoggedIn(newLoginState);
    localStorage.setItem('isLoggedIn', newLoginState.toString());
    
    if (newLoginState) {
      const wantsAdmin = window.confirm('Do you want admin access? (Demo only)');
      setIsAdmin(wantsAdmin);
      localStorage.setItem('isAdmin', wantsAdmin.toString());
    } else {
      setIsAdmin(false);
      localStorage.setItem('isAdmin', 'false');
    }
  };

  const handleCourseSelect = (courseId: string) => {
    switch (courseId) {
      case 'communication':
        setCurrentView('communication');
        break;
      case 'critical-thinking':
        setCurrentView('critical-thinking');
        break;
      case 'design-thinking':
        setCurrentView('design-thinking');
        break;
      case 'adaptive-learning':
        setSelectedModule('adaptive-learning');
        setCurrentView('adaptive-learning');
        break;
      case 'prompt-engineering':
        setSelectedModule('prompt-engineering');
        setCurrentView('prompt-engineering');
        break;
      case 'teamwork':
        setSelectedModule('teamwork');
        setCurrentView('teamwork');
        break;
      case 'data-driven':
        setSelectedModule('data-driven');
        setCurrentView('data-driven');
        break;
      case 'mental-physical-health':
        setSelectedModule('mental-physical-health');
        setCurrentView('mental-physical-health');
        break;
      default:
        console.log('Course not implemented yet:', courseId);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'catalog':
        return <CourseCatalog onSelectCourse={handleCourseSelect} />;
      case 'communication':
        return <Module1Simple 
          onNavigateHome={() => setCurrentView('home')}
          onNavigateCatalog={() => setCurrentView('catalog')}
        />;
      case 'adaptive-learning':
        // return <Module2 
        //   onNavigateHome={() => setCurrentView('home')}
        //   onNavigateCatalog={() => setCurrentView('catalog')}
        // />;
        return <div>Module 2 temporarily disabled for testing</div>;
      case 'prompt-engineering':
        return <Module3 
          onNavigateHome={() => setCurrentView('home')}
          onNavigateCatalog={() => setCurrentView('catalog')}
        />;
      case 'critical-thinking':
        return <Module4 
          onNavigateHome={() => setCurrentView('home')}
          onNavigateCatalog={() => setCurrentView('catalog')}
        />;
      case 'design-thinking':
        return <Module5 
          onNavigateHome={() => setCurrentView('home')}
          onNavigateCatalog={() => setCurrentView('catalog')}
        />;
      case 'teamwork':
        return <Module6 
          onNavigateHome={() => setCurrentView('home')}
          onNavigateCatalog={() => setCurrentView('catalog')}
        />;
      case 'data-driven':
        return <Module7 
          onNavigateHome={() => setCurrentView('home')}
          onNavigateCatalog={() => setCurrentView('catalog')}
        />;
      case 'mental-physical-health':
        return <Module8 
          onNavigateHome={() => setCurrentView('home')}
          onNavigateCatalog={() => setCurrentView('catalog')}
        />;
      case 'home':
      default:
        return (
          <>
            <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} onLogin={handleLogin} />
            <main>
              <AIHero 
                onModuleClick={handleCourseSelect} 
                isLoggedIn={isLoggedIn}
                hasProvidedLeadDetails={hasProvidedLeadDetails}
              />
              <Banner />
              {/* Brochure and Instructors Section - Side by Side */}
              <section id="brochure-section" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-midnight-800 dark:to-midnight-700">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Brochure Section */}
                    <div className="h-[700px]" style={{ height: '700px' }}>
                      <BrochureSection 
                        onLeadCaptureSuccess={handleLeadCaptureSuccess}
                        isLoggedIn={isLoggedIn}
                        hasProvidedLeadDetails={hasProvidedLeadDetails}
                      />
                    </div>
                    
                    {/* Instructors Section */}
                    <div className="h-[700px]" style={{ height: '700px' }}>
                      <InstructorsSection />
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-midnight-900 dark:via-midnight-800 dark:to-violet-900 transition-colors duration-500">
        {renderContent()}
        
        {/* Demo Navigation - Remove in production */}
        {currentView === 'home' && isLoggedIn && (
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            <button
              onClick={() => setCurrentView('catalog')}
              className="btn-neon shadow-2xl"
            >
              📚 Course Catalog
            </button>
            <button
              onClick={() => setCurrentView('communication')}
              className="btn-secondary shadow-2xl"
            >
              🎮 Try Communication Module
            </button>
          </div>
        )}
        
        {(currentView === 'communication' || currentView === 'adaptive-learning' || currentView === 'prompt-engineering' || currentView === 'critical-thinking' || currentView === 'design-thinking' || currentView === 'teamwork' || currentView === 'data-driven' || currentView === 'mental-physical-health') && (
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            <button
              onClick={() => setCurrentView('catalog')}
              className="btn-secondary shadow-2xl"
            >
              📚 Back to Catalog
            </button>
            <button
              onClick={() => setCurrentView('home')}
              className="btn-secondary shadow-2xl"
            >
              🏠 Back to Home
            </button>
          </div>
        )}

        {currentView === 'catalog' && (
          <div className="fixed bottom-6 right-6 z-50">
            <button
              onClick={() => setCurrentView('home')}
              className="btn-secondary shadow-2xl"
            >
              🏠 Back to Home
            </button>
          </div>
        )}

      </div>
    </ThemeProvider>
  );
}

export default App;
