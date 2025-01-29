export const metadata = {
  title: 'My Portfolio',
  description: 'Showcasing my projects and skills in web development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
      </head>
      <body className="bg-gray-50 text-gray-900">
        {children} {/* This renders the current page (like Home) */}
      </body>
    </html>
  );
}
