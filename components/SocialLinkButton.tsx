
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
            className="group w-full font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 ease-in-out transform hover:scale-105 mb-3"
            style={{
                border: '2px solid #d4af37',
                color: '#d4af37',
                background: 'transparent'
            }}
        >
            {icon}
            <span>{text}</span>
        </a>
    );
};

export default SocialLinkButton;