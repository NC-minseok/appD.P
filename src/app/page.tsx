"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [userAgent, setUserAgent] = useState("");
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isExistingUserOpen, setIsExistingUserOpen] = useState(false);
  const [isLoginIssueOpen, setIsLoginIssueOpen] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    setUserAgent(ua);
    setIsAndroid(/Android/i.test(ua));
    setIsIOS(/iPhone|iPad|iPod/i.test(ua));
  }, []);

  const handleDownload = (platform: "android" | "ios") => {
    const links = {
      android:
        "https://drive.google.com/drive/folders/1eVtrhKUWr-4n-Sj9lauCmFlQXjZLFI14",
      ios: "https://testflight.apple.com/join/cV56naSP",
    };

    window.open(links[platform], "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-pink-600 mb-1">
              NCMN 체리동아리
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-3xl flex items-center justify-center shadow-lg p-3">
            <Image
              src="/logo.png"
              alt="NCMN 로고"
              width={72}
              height={72}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            NCMN 체리동아리
          </h2>
        </div>

        {/* Device Detection */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-pink-100">
          <h3 className="font-semibold text-gray-800 mb-4 text-center">
            앱 다운로드
          </h3>

          {/* Smart Download Button */}
          {isAndroid && (
            <button
              onClick={() => handleDownload("android")}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-3 mb-4 shadow-sm"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.33 8L18.5 6.83c.12-.12.12-.32 0-.44s-.32-.12-.44 0L16.83 7.62c-.68-.3-1.45-.45-2.24-.45s-1.56.15-2.24.45L11.12 6.39c-.12-.12-.32-.12-.44 0s-.12.32 0 .44L11.86 8c-1.54.76-2.64 2.19-2.8 3.91h11.88c-.16-1.72-1.26-3.15-2.8-3.91zM13.5 9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm-3 0c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM8 13v6c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h2v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1v-6H8zM6 13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm12 0c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1z" />
              </svg>
              Android에서 다운로드
            </button>
          )}

          {isIOS && (
            <button
              onClick={() => handleDownload("ios")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-3 mb-4 shadow-sm"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              iOS에서 다운로드
            </button>
          )}

          {/* Both platform buttons for desktop or undetected devices */}
          {!isAndroid && !isIOS && (
            <div className="space-y-3">
              <button
                onClick={() => handleDownload("android")}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.33 8L18.5 6.83c.12-.12.12-.32 0-.44s-.32-.12-.44 0L16.83 7.62c-.68-.3-1.45-.45-2.24-.45s-1.56.15-2.24.45L11.12 6.39c-.12-.12-.32-.12-.44 0s-.12.32 0 .44L11.86 8c-1.54.76-2.64 2.19-2.8 3.91h11.88c-.16-1.72-1.26-3.15-2.8-3.91zM13.5 9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm-3 0c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM8 13v6c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h2v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1v-6H8zM6 13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm12 0c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1z" />
                </svg>
                Android 다운로드
              </button>
              <button
                onClick={() => handleDownload("ios")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                iOS 다운로드
              </button>
            </div>
          )}
        </div>

        {/* Installation Guide Link */}
        <div className="text-center mb-8">
          <Link
            href="/install-guide"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            설치 방법 자세히 보기
          </Link>
        </div>

        {/* Login Guide */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
          <h3 className="font-semibold text-gray-800 mb-4 text-red-600">
            📋 필독
          </h3>
          <div className="space-y-3 text-sm">
            {/* 기존 사역자 현황 조사 참여자 */}
            <div className="border border-blue-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setIsExistingUserOpen(!isExistingUserOpen)}
                className="w-full p-4 bg-blue-50 hover:bg-blue-100 transition-colors duration-200 flex items-center justify-between text-left"
              >
                <span className="font-medium text-blue-800">
                  기존 사역자현황 조사 참여자
                </span>
                <svg
                  className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                    isExistingUserOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isExistingUserOpen && (
                <div className="p-4 bg-white border-t border-blue-200">
                  <div className="space-y-3 text-gray-700">
                    <p>계정이 생성되어 있습니다.</p>
                    <p>
                      <span className="font-medium">전화번호</span>와 초기
                      비밀번호{" "}
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs">
                        Ncmn0214!
                      </span>{" "}
                      로 로그인 후<br />
                      이메일 등록을 진행하면 접속 가능합니다.
                    </p>
                    <p className="text-red-600 font-medium">
                      ⚠️ 보안을 위해 꼭 '더보기' → '내정보'에서
                      <br />
                      비밀번호 변경을 진행하세요.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* 로그인이 안 되는 경우 */}
            <div className="border border-yellow-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setIsLoginIssueOpen(!isLoginIssueOpen)}
                className="w-full p-4 bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200 flex items-center justify-between text-left"
              >
                <span className="font-medium text-yellow-800">
                  로그인이 안 되는 경우
                </span>
                <svg
                  className={`w-5 h-5 text-yellow-600 transition-transform duration-200 ${
                    isLoginIssueOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isLoginIssueOpen && (
                <div className="p-4 bg-white border-t border-yellow-200">
                  <div className="space-y-3 text-gray-700">
                    <p>
                      전화번호와 비밀번호로 로그인이 안 될 경우
                      <br />
                      회원가입을 진행해주세요.
                    </p>
                    <p className="text-orange-600">
                      회원가입 시 "이미 등록된 전화번호"라고 나오는 경우
                      <br />
                      관리자에게 문의해주세요.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 py-6 text-center text-sm text-gray-500">
        <p>© 2025 NCMN 대학캠퍼스</p>
      </footer>
    </div>
  );
}
