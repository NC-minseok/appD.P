import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NCMN 체리동아리 - 테스트 앱",
  description:
    "NCMN 대학캠퍼스 체리동아리의 테스트 앱을 다운로드하여 새로운 기능을 미리 체험해보세요!",
  keywords: "NCMN, 체리동아리, 테스트앱, 대학캠퍼스, 동아리",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#ec4899",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
