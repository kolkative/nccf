import type { Metadata } from "next";
import "../styles/global.css";
import "react-notion-x/src/styles.css"; 
import "../styles/notion.css";             
import "../styles/prism-theme.css";

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