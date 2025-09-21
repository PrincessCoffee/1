
import React from 'react';

interface SocialLinkButtonProps {
    href: string;
    icon: React.ReactNode;
    text: string;
}

const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({ href, icon, text }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-amber-400/50 text-slate-200 hover:text-amber-400 font-semibold py-3.5 px-5 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/10 active:scale-[0.98] backdrop-blur-sm"
        >
            <div className="flex items-center justify-center w-5 h-5 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>
            <span className="text-sm sm:text-base font-medium">{text}</span>
            
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
    );
};

export default SocialLinkButton;