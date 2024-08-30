import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

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
        <body
          className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header></Header>
            <div className="flex min-h-screen">
              {/* Sidebar */}
              <Sidebar></Sidebar>

              <div className="flex-1 p-4 bg-gray-100 dark:bg-black overflow-y-auto">
                {children}
              </div>
            </div>
            <Toaster position="top-center"></Toaster>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
