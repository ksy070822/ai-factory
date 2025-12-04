"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OwnerDashboard() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [hasPets, setHasPets] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 보장
    setIsMounted(true)
    
    // 반려동물 데이터 확인 (localStorage 또는 다른 소스에서)
    const checkPets = () => {
      try {
        // localStorage에서 반려동물 데이터 확인
        const petsData = localStorage.getItem('pets') || localStorage.getItem('userPets')
        if (petsData) {
          const pets = JSON.parse(petsData)
          setHasPets(Array.isArray(pets) && pets.length > 0)
        }
        
        // window 객체에서 확인 (다른 앱에서 설정한 경우)
        if (typeof window !== 'undefined' && (window as any).pets) {
          const windowPets = (window as any).pets
          setHasPets(Array.isArray(windowPets) && windowPets.length > 0)
        }
      } catch (error) {
        console.warn('반려동물 데이터 확인 중 오류:', error)
        setHasPets(false)
      } finally {
        setIsLoading(false)
      }
    }

    // 약간의 지연을 두어 hydration 완료 후 실행
    const timer = setTimeout(checkPets, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleRegisterPet = () => {
    router.push("/dashboard/owner/pet-profile/register")
  }

  // 서버 사이드 렌더링 중에는 기본 레이아웃만 표시
  if (!isMounted || isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-32">
        <Navbar userType="owner" />
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900">환영합니다!</h1>
            <p className="text-gray-600 text-sm mt-1">반려동물을 등록하고 AI 건강 관리를 시작하세요</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <div className="animate-pulse space-y-4">
            <div className="h-32 bg-gray-200 rounded-lg"></div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
            <div className="h-32 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-32">
      <Navbar userType="owner" />

      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">환영합니다!</h1>
          <p className="text-gray-600 text-sm mt-1">
            {hasPets ? "반려동물 건강 관리를 시작하세요" : "반려동물을 등록하고 AI 건강 관리를 시작하세요"}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* AI Diagnosis Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI 증상 진단</h3>
            <p className="text-gray-600 text-sm mb-4">증상을 입력하면 AI가 분석해드립니다</p>
            <Link href="/dashboard/owner/ai-diagnosis">
              <Button
                variant="outline"
                className="w-full text-blue-500 border-blue-500 hover:bg-blue-50 bg-transparent"
              >
                진단 시작
              </Button>
            </Link>
          </Card>

          {/* Hospital Booking Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-3xl">🏥</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">병원 예약</h3>
            <p className="text-gray-600 text-sm mb-4">근처 동물병원을 검색하고 예약하세요</p>
            <Link href="/dashboard/owner/hospital-booking">
              <Button
                variant="outline"
                className="w-full text-blue-500 border-blue-500 hover:bg-blue-50 bg-transparent"
              >
                병원 찾기
              </Button>
            </Link>
          </Card>

          {/* Health Records Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">건강 기록</h3>
            <p className="text-gray-600 text-sm mb-4">일일 케어 및 건강 상태 추적</p>
            <Link href="/dashboard/owner/records">
              <Button
                variant="outline"
                className="w-full text-blue-500 border-blue-500 hover:bg-blue-50 bg-transparent"
              >
                기록 보기
              </Button>
            </Link>
          </Card>
        </div>

        {/* Register Pet CTA - 반려동물이 없을 때만 표시 */}
        {!hasPets && (
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">반려동물을 등록해주세요</h2>
            <p className="text-gray-600 mb-6">처음이신가요? 반려동물 정보를 등록하여 맞춤형 관리를 시작하세요</p>
            <Button 
              onClick={handleRegisterPet}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6"
            >
              반려동물 등록하기
            </Button>
          </Card>
        )}

        {/* 반려동물이 있을 때 표시할 내용 */}
        {hasPets && (
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">반려동물 관리</h2>
            <p className="text-gray-600 mb-6">등록된 반려동물을 관리하고 건강 상태를 추적하세요</p>
            <Link href="/dashboard/owner/pet-profile">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6">
                반려동물 목록 보기
              </Button>
            </Link>
          </Card>
        )}
      </div>
    </main>
  )
}
