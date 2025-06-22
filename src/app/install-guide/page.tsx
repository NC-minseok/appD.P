"use client";

import Link from "next/link";
import { useState } from "react";

export default function InstallGuide() {
  const [activeTab, setActiveTab] = useState<"android" | "ios">("android");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-pink-600 hover:text-pink-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-pink-600">설치 방법</h1>
              <p className="text-sm text-gray-600">테스트 앱 설치 가이드</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl p-1 mb-6 shadow-sm border border-pink-100">
          <div className="flex">
            <button
              onClick={() => setActiveTab("android")}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                activeTab === "android"
                  ? "bg-green-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.523 15.3414c-.5665 0-1.0253.4588-1.0253 1.0253s.4588 1.0253 1.0253 1.0253 1.0253-.4588 1.0253-1.0253-.4588-1.0253-1.0253-1.0253zm-11.046 0c-.5665 0-1.0253.4588-1.0253 1.0253s.4588 1.0253 1.0253 1.0253 1.0253-.4588 1.0253-1.0253-.4588-1.0253-1.0253-1.0253zm11.405-6.34L9.6576 1.7827c-.3908-.2555-.9102-.1513-1.1657.2395-.2555.3908-.1513.9102.2395 1.1657l8.1589 5.3367c-.4629-.1428-.9557-.2205-1.4703-.2205-2.94 0-5.3248 2.3848-5.3248 5.3248s2.3848 5.3248 5.3248 5.3248 5.3248-2.3848 5.3248-5.3248c0-1.8602-.9557-3.4971-2.407-4.4357z" />
                </svg>
                Android
              </div>
            </button>
            <button
              onClick={() => setActiveTab("ios")}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                activeTab === "ios"
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                iOS
              </div>
            </button>
          </div>
        </div>

        {/* Android Installation Guide */}
        {activeTab === "android" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">1</span>
                </span>
                알 수 없는 소스 허용
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p>테스트 앱을 설치하기 위해 먼저 다음 설정을 변경해주세요:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>설정</strong> → <strong>보안</strong> →{" "}
                      <strong>알 수 없는 소스</strong> 활성화
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      또는 <strong>설정</strong> → <strong>앱 및 알림</strong> →{" "}
                      <strong>특별한 앱 액세스</strong> →{" "}
                      <strong>알 수 없는 앱 설치</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">2</span>
                </span>
                APK 파일 다운로드
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  메인 페이지에서 <strong>Android 다운로드</strong> 버튼을 눌러
                  APK 파일을 다운로드하세요.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800">
                    <strong>참고:</strong> 다운로드가 완료되면 알림창에서 바로
                    설치할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">3</span>
                </span>
                앱 설치하기
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>다운로드된 APK 파일을 탭하여 실행</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>설치</strong> 버튼 클릭
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      설치 완료 후 <strong>열기</strong> 버튼으로 앱 실행
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* iOS Installation Guide */}
        {activeTab === "ios" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                TestFlight 앱 설치
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p>iOS 테스트 앱은 Apple의 TestFlight를 통해 배포됩니다:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      App Store에서 <strong>TestFlight</strong> 앱을 먼저
                      설치하세요
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>TestFlight는 Apple에서 제공하는 무료 앱입니다</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                초대 링크 접속
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  메인 페이지에서 <strong>iOS 다운로드</strong> 버튼을 눌러
                  TestFlight 초대 링크에 접속하세요.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-800">
                    <strong>참고:</strong> 초대 링크는 TestFlight 앱에서
                    자동으로 열립니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                테스트 앱 설치
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      TestFlight에서 <strong>수락</strong> 버튼 클릭
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>설치</strong> 버튼을 눌러 앱 다운로드
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>설치 완료 후 홈 화면에서 앱 실행</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">💡</span>
                </span>
                추가 정보
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>테스트 기간은 90일이며, 자동으로 업데이트됩니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>TestFlight에서 피드백을 보낼 수 있습니다</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Troubleshooting */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-8">
          <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            문제가 있나요?
          </h3>
          <div className="text-sm text-yellow-800 space-y-2">
            <p>설치 과정에서 문제가 발생하면:</p>
            <ul className="space-y-1 ml-4">
              <li>• 기기를 재시작해보세요</li>
              <li>• 충분한 저장공간이 있는지 확인하세요</li>
              <li>• 안정적인 Wi-Fi 연결을 사용하세요</li>
              <li>• 동아리 관리자에게 문의하세요</li>
            </ul>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 shadow-sm"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}
