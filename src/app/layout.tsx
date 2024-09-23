// /app/layout.jsx
import '../styles/globals.css'
import Sidebar from '~/components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-grow p-8 bg-white">{children}</main>
        </div>
      </body>
    </html>
  );
}
