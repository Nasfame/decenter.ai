import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientProvider from "./redux/clientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DecenterAi",
  description: "AI Infrastructure for Model training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>DecenterAi</title>
      </head>
      <body className={inter.className}>
        <ClientProvider>
          <div className="text-white">{children}</div>
        </ClientProvider>
      </body>
    </html>
  );
}
