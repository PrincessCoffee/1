import React, { useState, useEffect } from 'react';
import SocialLinkButton from './components/SocialLinkButton';
import MenuModal from './components/MenuModal';
import { translations } from './constants';
import { CoffeeIcon } from './components/icons';
import type { SocialLink } from './types';

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState<'en' | 'ar'>('ar');
    const [isFading, setIsFading] = useState(false);

    const t = translations[language];

    useEffect(() => {
        const body = document.body;
        if (language === 'ar') {
            document.documentElement.lang = 'ar';
            document.documentElement.dir = 'rtl';
            body.classList.add('font-ar');
            body.classList.remove('font-en');
        } else {
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
            body.classList.add('font-en');
            body.classList.remove('font-ar');
        }
    }, [language]);

    const handleLanguageToggle = () => {
        setIsFading(true);
        setTimeout(() => {
            setLanguage((prev: 'en' | 'ar') => (prev === 'en' ? 'ar' : 'en'));
            setIsFading(false);
        }, 300);
    };

    return (
        <div className="min-h-screen text-white flex items-center justify-center p-4 relative font-lato" style={{background: '#000000'}}>
            <div className="absolute inset-0" style={{background: '#000000'}}></div>
            
            <button
                onClick={handleLanguageToggle}
                className="fixed top-4 right-4 z-20 bg-brand-gold text-brand-green w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-transform transform hover:scale-110 shadow-lg font-cinzel"
                aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
                {t.languageToggle}
            </button>

            <div style={{ perspective: '1000px' }} className={`w-full max-w-md mx-auto transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                <div className="rounded-2xl shadow-2xl p-8 text-center relative z-10 animate-card-entry transition-transform duration-300 w-full" style={{background: 'linear-gradient(135deg, #2d5a5a 0%, #1a4040 100%)', border: '2px solid #d4af37'}}>
                    <header className="mb-8">
                        <div className="animate-float mb-6">
                            <img 
                                src="/1/princess-coffee-logo.jpg" 
                                alt="Princess Coffee Logo" 
                                className="w-32 h-32 mx-auto rounded-full object-cover shadow-2xl animate-pulse-glow"
                                style={{border: '3px solid #d4af37'}}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/1/vite.svg';
                                }}
                            />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold font-cinzel text-white mb-3 text-shadow">
                            {t.title}
                        </h1>
                        <p className="text-base md:text-lg font-cinzel mb-2" style={{color: '#d4af37'}}>
                            {t.subtitle}
                        </p>
                    </header>

                    <main className="space-y-4 w-full">
                        <div className="space-y-3">
                            {t.socialLinks.map((link: SocialLink) => (
                                <SocialLinkButton 
                                    key={link.name} 
                                    href={link.href} 
                                    icon={link.icon} 
                                    text={link.name}
                                />
                            ))}
                        </div>
                        
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="group w-full font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 ease-in-out transform hover:scale-105 mt-6 animate-pulse-glow"
                            style={{
                                background: '#d4af37',
                                color: '#2d5a5a',
                                border: 'none',
                                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                            }}
                        >
                            <CoffeeIcon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                            <span className="font-semibold text-lg">{t.viewMenu}</span>
                        </button>
                    </main>
                    
                    <footer className="mt-8 text-center text-sm opacity-75" style={{color: '#d4af37'}}>
                        <p className="font-cinzel">{t.footer}</p>
                    </footer>
                </div>
            </div>
            
            <MenuModal 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)} 
                menuCategories={t.menuCategories}
                title={t.menuTitle}
            />
        </div>
    );
};

export default App;