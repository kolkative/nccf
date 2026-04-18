import type { Metadata } from "next";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export const metadata: Metadata = {
  title: "Welcome to NCCF 4.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}