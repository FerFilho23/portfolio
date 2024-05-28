import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernando's Portfolio",
  description: "Modern and Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark" //TODO: Add a toggle for dark and light mode (https://ui.shadcn.com/docs/dark-mode/next)
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider></body>
    </html>
  );
}
