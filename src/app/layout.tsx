import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "Notion Clone app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header></Header>
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
