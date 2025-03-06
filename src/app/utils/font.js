//! font setting

import { Afacad } from 'next/font/google';
export const spFont_init = Afacad({
    subsets: ['latin'],
    variable: '--font-afacad'
});

export const spFont = spFont_init.variable