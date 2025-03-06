import '../styles/global.css';
import { spFont } from './utils/font';
import ClientLayout from './layout';

export const metadata = {
    title: "My Portfolio",
    icons: {
        icon: "/react-projects/me.png",
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={spFont}>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}