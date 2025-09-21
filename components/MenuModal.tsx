import React from 'react';
import type { MenuCategory } from '../types';
import { CloseIcon } from './icons';

interface MenuModalProps {
    isOpen: boolean;
    onClose: () => void;
    menuCategories: MenuCategory[];
    title: string;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, menuCategories, title }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="bg-slate-800/95 backdrop-blur-xl border border-slate-600/50 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg max-h-[85vh] sm:max-h-[90vh] overflow-y-auto relative animate-card-entry"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-slate-800/95 backdrop-blur-sm p-4 sm:p-6 border-b border-slate-600/50 z-10 flex justify-between items-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-cinzel text-amber-400">{title}</h2>
                    <button 
                        onClick={onClose}
                        className="text-amber-400 hover:text-white transition-colors p-1"
                        aria-label="Close menu"
                    >
                        <CloseIcon className="w-6 h-6 sm:w-8 sm:h-8"/>
                    </button>
                </div>
                
                <div className="p-4 sm:p-6">
                    <div className="space-y-6 sm:space-y-8">
                        {menuCategories.map((category) => (
                            <div key={category.title}>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-cinzel text-amber-400 border-b border-amber-400/30 pb-2 mb-3 sm:mb-4">
                                    {category.title}
                                </h3>
                                <ul className="space-y-3 sm:space-y-4">
                                    {category.items.map((item) => (
                                        <li key={item.name} className="bg-slate-700/30 rounded-lg p-3 sm:p-4 border border-slate-600/30">
                                            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-1">{item.name}</h4>
                                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuModal;