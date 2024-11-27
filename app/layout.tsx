import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { inter } from '@/components/ui/fonts'
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.className} antialiased`}>
          <Header />
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-4 overflow-y-auto bg-gray-100">{children}</main>
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}