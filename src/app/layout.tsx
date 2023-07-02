import "./globals.css";
export const metadata = {
  title: "Usman Ahmed",
  description: "Portfolio site for Usman Ahmed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col bg-pink-100">{children}</body>
    </html>
  );
}
