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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-3 sm:p-6 lg:p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            {/* Language Toggle */}
            <button
                onClick={handleLanguageToggle}
                className="fixed top-4 right-4 z-30 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-800 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/25 font-cinzel"
                aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
                {t.languageToggle}
            </button>

            {/* Main Card Container */}
            <div className={`w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl transition-all duration-500 ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="relative">
                    {/* Card Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-3xl blur opacity-20 animate-pulse"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
                        {/* Card Header with Profile */}
                        <div className="relative px-6 sm:px-8 pt-8 sm:pt-10 pb-6">
                            {/* Profile Image */}
                            <div className="relative mb-6">
                                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur opacity-30 animate-pulse"></div>
                                <img 
                                    src="/1/princess-coffee-logo.jpg" 
                                    alt="Princess Coffee Logo" 
                                    className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto rounded-full object-cover shadow-2xl border-4 border-amber-400/50 transition-transform duration-300 hover:scale-105"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/1/vite.svg';
                                    }}
                                />
                            </div>
                            
                            {/* Title & Subtitle */}
                            <div className="text-center space-y-2">
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-white leading-tight">
                                    {t.title}
                                </h1>
                                <p className="text-sm sm:text-base lg:text-lg font-cinzel text-amber-400/90 font-medium">
                                    {t.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="px-6 sm:px-8 pb-8 sm:pb-10">
                            {/* Social Links */}
                            <div className="space-y-3 mb-6">
                                {t.socialLinks.map((link: SocialLink, index: number) => (
                                    <div 
                                        key={link.name}
                                        className="animate-fade-in-up"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <SocialLinkButton 
                                            href={link.href} 
                                            icon={link.icon} 
                                            text={link.name}
                                        />
                                    </div>
                                ))}
                            </div>
                            
                            {/* Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="group w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-800 font-bold py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/25 active:scale-[0.98]"
                            >
                                <CoffeeIcon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12" />
                                <span className="font-semibold text-base sm:text-lg">{t.viewMenu}</span>
                            </button>
                            
                            {/* Footer */}
                            <div className="mt-6 pt-4 border-t border-slate-700/50 text-center">
                                <p className="text-xs sm:text-sm font-cinzel text-slate-400">
                                    {t.footer}
                                </p>
                            </div>
                        </div>
                    </div>
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