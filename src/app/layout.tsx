"use client";

import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

const font = Noto_Sans_KR({ weight: "300", subsets: ["latin"] });

const metadata = {
  title: "hyunjae's better world",
  description: "everything by hyunjae",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true} className={font.className}>
        {children}
      </body>
    </html>
  );
}
