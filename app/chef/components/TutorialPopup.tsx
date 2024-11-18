'use client'
import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { Tutorial } from '../types/Tutorial'
import { tutorial } from '../data/tutorial'

const ITEMS_PER_PAGE = 5
const VISIBLE_PAGES = 5

type TutorialPopupProps = {
  onAddBookmark: (bookmark: { id: number; title: string; time: string; isExpanded: boolean; isTutorial: boolean; }) => void;
}

export default function TutorialPopup({ onAddBookmark }: TutorialPopupProps) {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(tutorial.length / ITEMS_PER_PAGE)

  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return tutorial.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [currentPage])

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const handleRowClick = (tutorialId: number) => {
    const selectedTutorial = tutorial.find((t) => t.tutorialId === tutorialId);
    if (selectedTutorial) {
      onAddBookmark({
        id: selectedTutorial.tutorialId,
        title: selectedTutorial.tutorialTitle,
        time: '0:00',
        isExpanded: true,
        isTutorial: true
      })
    }
  }

  const renderPaginationButtons = () => {
    const buttons = []
    let startPage = Math.max(1, currentPage - Math.floor(VISIBLE_PAGES / 2))
    const endPage = Math.min(totalPages, startPage + VISIBLE_PAGES - 1)

    if (endPage - startPage + 1 < VISIBLE_PAGES) {
      startPage = Math.max(1, endPage - VISIBLE_PAGES + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`font-semibold px-4 py-2 ${
            currentPage === i
              ? 'bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white rounded-lg'
              : 'bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text'
          }`}
        >
          {i}
        </button>
      )
    }
    return buttons
  }

  const handlePopupAction = (action: string) => {
    if (action === 'close') {
      setIsPopupVisible(false)
    }
  }

  const renderTableHeader = () => (
    <tr className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white">
      <th className="pl-12 p-4 text-left font-semibold">Tutorial</th>
      <th className="p-4 text-left font-semibold">Name</th>
    </tr>
  )

  const renderTableRow = (tutorial: Tutorial) => (
    <tr
      key={tutorial.tutorialId}
      className="border-x border-gray-200 text-gray-800 hover:bg-gray-200 cursor-pointer"
      onClick={() => handleRowClick(tutorial.tutorialId)}
    >
      <td className="pl-12 px-4 py-2 border-b border-gray-200">
        <Image
          src={tutorial.courseImage}
          alt={tutorial.tutorialTitle}
          width={144}
          height={96}
          className="object-cover rounded"
        />
      </td>
      <td className="px-4 text-left border-b border-gray-200">
        {tutorial.tutorialTitle}
      </td>
    </tr>
  )

  return (
    <div>
      <button
        onClick={() => setIsPopupVisible(!isPopupVisible)}
        className="flex items-center text-[#FE3511] hover:text-[#F0725C]"
      >
        <PlusIcon className="w-5 h-5 mr-1" />
        Tutorial
      </button>

      {isPopupVisible && (
        <div className="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center">
          <div className="relative bg-white rounded-lg w-full h-full p-6 z-20">
            <div className="flex justify-between items-center pb-6">
              <h2 className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-transparent bg-clip-text text-2xl font-medium">
                Upload New Course
              </h2>
              <button
                onClick={() => handlePopupAction('close')}
                className="text-[#FE3511]"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>{renderTableHeader()}</thead>
                  <tbody>{currentPageData.map(renderTableRow)}</tbody>
                </table>
              </div>

              <div className="flex justify-center items-center gap-2 mt-6">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1.5 font-semibold px-4 py-2 disabled:opacity-50"
                >
                  <ChevronLeftIcon className="w-5 h-5" stroke="#F0725C" />
                  <span className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
                    Previous
                  </span>
                </button>
                {renderPaginationButtons()}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1.5 font-semibold px-4 py-2 disabled:opacity-50"
                >
                  <span className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
                    Next
                  </span>
                  <ChevronRightIcon className="w-5 h-5" stroke="#F0725C" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}