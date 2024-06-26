import "@/styles/globals.css";
import { Metadata } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={clsx(
          "overflow-hidden min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-white to-black">
          <Navbar />
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow overflow-hidden">
            {children}
          </main>
          <footer className="w-full flex items-center justify-center py-3"></footer>
        </div>
      </body>
    </html>
  );
}
