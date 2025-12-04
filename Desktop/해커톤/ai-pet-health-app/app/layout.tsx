import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PetLink AI - 반려동물 진료 관리",
  description: "AI 기반 반려동물 건강 관리 및 병원 예약 플랫폼",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
