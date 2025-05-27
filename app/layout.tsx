import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "../app/providers";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Drop_box",
  description: "Secure cloud storage for your images, powered by ImageKit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} font-inter antialiased`}>
          
            <Providers themeProps={{ attribute: "class", defaultTheme: "dark", themes: ["light", "dark", "blue"] }}>{children}</Providers>
          
        </body>
      </html>
    </ClerkProvider>
  );
}