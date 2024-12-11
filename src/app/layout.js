export const metadata = {
    title: 'TodoList',
    description: 'this TodoList'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}