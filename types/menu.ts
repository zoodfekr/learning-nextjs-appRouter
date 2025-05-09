import { JSX } from 'react';

export type SubmenuItem = {
    label: string;
    href: string;
};

export type HeaderItem = {
    id: number,
    label: string;
    href: string;
    icon: JSX.Element,
    submenu?: SubmenuItem[];
};