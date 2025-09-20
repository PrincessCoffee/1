import React from 'react';
import type { SocialLink, MenuCategory } from './types';
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from './components/icons';

type LanguageContent = {
    title: string;
    subtitle: string;
    viewMenu: string;
    footer: string;
    menuTitle: string;
    languageToggle: string;
    socialLinks: SocialLink[];
    menuCategories: MenuCategory[];
}

type Translations = {
    en: LanguageContent;
    ar: LanguageContent;
}

export const translations: Translations = {
    en: {
        title: 'Princess Coffee',
        subtitle: 'Taste the Royalty in Every Sip',
        viewMenu: 'View Our Menu',
        footer: `© ${new Date().getFullYear()} Princess Coffee.`,
        menuTitle: 'Our Menu',
        languageToggle: 'ع',
        socialLinks: [
            {
                name: 'Instagram',
                href: 'https://www.instagram.com/llooy_80?igsh=YWpudWk1eWNuY3Bj',
                icon: React.createElement(InstagramIcon, { className: 'w-6 h-6' }),
            },
            {
                name: 'TikTok',
                href: 'https://www.tiktok.com/@user4984378501180?_t=ZS-8zroZLu70lz&_r=1',
                icon: React.createElement(TikTokIcon, { className: 'w-6 h-6' }),
            },
            {
                name: 'WhatsApp',
                href: 'https://wa.me/9647731982199',
                icon: React.createElement(WhatsAppIcon, { className: 'w-6 h-6' }),
            },
        ],
        menuCategories: [
            {
                title: 'Hot',
                items: [
                    { name: 'Princess Coffee', description: 'Our signature blend, a taste fit for royalty.' },
                    { name: 'Plain Coffee', description: 'Classic, bold, and pure black coffee.' },
                    { name: 'Medium Coffee', description: 'A perfectly balanced brew, not too strong, not too light.' },
                    { name: 'Chocolate Coffee', description: 'Rich coffee infused with decadent chocolate notes.' },
                    { name: 'Galaxy Coffee', description: 'A stellar blend with a hint of caramel and magic.' },
                    { name: 'Bounty Coffee', description: 'An exotic mix of coffee and creamy coconut.' },
                    { name: 'Honey Coffee', description: 'A sweet and smooth brew, naturally sweetened with honey.' },
                    { name: 'Coffee from Heaven', description: 'An ethereal and divine coffee experience.' },
                    { name: 'Karak Chai', description: 'Spiced tea with milk, a strong and aromatic delight.' }
                ]
            },
            {
                title: 'Cold',
                items: [
                    { name: 'Iced Coffee', description: 'Chilled to perfection for a refreshing boost.' },
                    { name: 'Cappuccino Latte', description: 'A creamy, cold fusion of cappuccino and latte.' }
                ]
            }
        ]
    },
    ar: {
        title: 'قهوة الأميرة',
        subtitle: 'تذوق المذاق الملكي في كل رشفة',
        viewMenu: 'عرض قائمتنا',
        footer: `© ${new Date().getFullYear()} قهوة الأميرة.`,
        menuTitle: 'قائمتنا',
        languageToggle: 'EN',
        socialLinks: [
            {
                name: 'انستغرام',
                href: 'https://www.instagram.com/llooy_80?igsh=YWpudWk1eWNuY3Bj',
                icon: React.createElement(InstagramIcon, { className: 'w-6 h-6' }),
            },
            {
                name: 'تيك توك',
                href: 'https://www.tiktok.com/@user4984378501180?_t=ZS-8zroZLu70lz&_r=1',
                icon: React.createElement(TikTokIcon, { className: 'w-6 h-6' }),
            },
            {
                name: 'واتساب',
                href: 'https://wa.me/9647731982199',
                icon: React.createElement(WhatsAppIcon, { className: 'w-6 h-6' }),
            },
        ],
        menuCategories: [
            {
                title: 'حار',
                items: [
                    { name: 'قهوة الأميرة', description: 'خلطتنا الخاصة، مذاق يليق بالملوك.' },
                    { name: 'قهوة سادة', description: 'قهوة سوداء كلاسيكية، قوية ونقية.' },
                    { name: 'قهوة وسط', description: 'فنجان متوازن تمامًا، ليس قويًا جدًا وليس خفيفًا.' },
                    { name: 'قهوة جكليتية', description: 'قهوة غنية ممزوجة بنكهة الشوكولاتة الفاخرة.' },
                    { name: 'قهوة كالكسي', description: 'مزيج نجمي مع لمسة من الكراميل والسحر.' },
                    { name: 'قهوة باونتي', description: 'مزيج استوائي من القهوة وجوز الهند الكريمي.' },
                    { name: 'قهوة عسلية', description: 'قهوة حلوة وناعمة، محلاة بشكل طبيعي بالعسل.' },
                    { name: 'قهوة من السما', description: 'تجربة قهوة سماوية لا مثيل لها.' },
                    { name: 'چاي كرك', description: 'شاي بالحليب والبهارات، قوي وعطري.' }
                ]
            },
            {
                title: 'بارد',
                items: [
                    { name: 'آيس كوفي', description: 'مُبرّدة بإتقان لجرعة منعشة من الطاقة.' },
                    { name: 'كابتشينو لاتيه', description: 'مزيج كريمي وبارد يجمع بين الكابتشينو واللاتيه.' }
                ]
            }
        ]
    }
};