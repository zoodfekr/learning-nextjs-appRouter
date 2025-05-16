'use client';

import { useEffect, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

export function useAverageColor(imageUrl: string) {
    const [color, setColor] = useState<string | null>(null);

    useEffect(() => {
        if (!imageUrl) return;

        const img = new Image();
        img.crossOrigin = 'anonymous'; // اگر عکس از دامنه خارجی است
        img.src = imageUrl;

        const fac = new FastAverageColor();

        img.onload = () => {
            fac.getColorAsync(img)
                .then((res) => {
                    setColor(res.hex);
                })
                .catch((e) => {
                    console.error('خطا در دریافت رنگ میانگین:', e);
                });
        };

        img.onerror = (e) => {
            console.error('خطا در بارگذاری تصویر:', e);
        };
    }, [imageUrl]);

    return color;
}
