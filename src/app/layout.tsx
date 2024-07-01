import { ReactNode } from "react";

import type { Metadata } from "next";

import { Providers } from "@/components";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "PTS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
