import React from 'react';

export interface SocialLink {
    name: string;
    href: string;
    icon: React.ReactNode;
}

export interface MenuItem {
    name: string;
    description: string;
}

export interface MenuCategory {
    title: string;
    items: MenuItem[];
}
