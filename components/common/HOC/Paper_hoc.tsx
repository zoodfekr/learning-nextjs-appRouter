import React from 'react';

// تابع تبدیل hex به rgba با آلفا
function hexToRgba(hex: string, alpha: number) {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    return `rgba(${(num >> 16) & 255},${(num >> 8) & 255},${num & 255},${alpha})`;
}

const Paper_hoc = ({
    children,
    className,
    color,
}: {
    children: React.ReactNode;
    className?: string;
    color?: string;
}) => {
    // اگر رنگ hex بود، تبدیل کن به rgba با آلفای کم
    const fadedColor = color && color.startsWith('#') ? hexToRgba(color, 0.3) : color;

    return (
        <div
            style={{
                backgroundImage: color
                    ? `linear-gradient(to top right, ${fadedColor},rgba(50,50,50,0.6) ,  rgba(50,50,50,0.9))`
                    : 'linear-gradient(to top right, rgba(50,50,50,0.7), rgba(0,0,0,0.9))',
                boxShadow: 'inset 0 2px 16px 0 rgba(0,0,0,0.10)',
            }}
            className={`relative p-5 border-gray-400 rounded-2xl transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    );
};

export default Paper_hoc;
