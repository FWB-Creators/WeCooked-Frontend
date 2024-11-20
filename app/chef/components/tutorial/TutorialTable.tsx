'use client'
import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import TutorialUpload from './TutorialUpload'
import { VideoData } from '../../types/videodata'
import { videoData } from '../../data/videodata'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const ITEMS_PER_PAGE = 5
const VISIBLE_PAGES = 5

type TabType = 'video' | 'enrolled' | 'review'

interface TabButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => (
  <button
    className={`font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-transparent bg-clip-text py-2 px-4 ${
      isActive ? 'border-b-2 border-[#F0725C]' : ''
    }`}
    onClick={onClick}
  >
    {label}
  </button>
)

const Checkbox: React.FC<{
  checked: boolean
  onChange: () => void
}> = ({ checked, onChange }) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      aria-label="Select item"
      className="relative peer rounded-md shrink-0 appearance-none w-5 h-5 border-2 border-[#ff593b] bg-white checked:bg-gradient-to-b from-[#F0725C] to-[#FE3511] checked:border-0 cursor-pointer"
    />
    <svg
      className="absolute w-3.5 h-3.5 hidden peer-checked:block text-white pl-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
)

const CheckboxAll: React.FC<{
  checked: boolean
  indeterminate: boolean
  onChange: () => void
}> = ({ checked, indeterminate, onChange }) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={checked}
      ref={(el) => {
        if (el) {
          el.indeterminate = indeterminate
        }
      }}
      onChange={onChange}
      aria-label="Select all"
      className="relative peer rounded-md shrink-0 appearance-none w-5 h-5 border-2 border-white bg-[#ff593b] checked:bg-white checked:border-0 cursor-pointer"
    />
    <svg
      className="absolute w-3.5 h-3.5 hidden peer-checked:block text-[#ff593b] pl-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
)

export default function TutorialTable() {
  const [activeTab, setActiveTab] = useState<TabType>('video')
  const [typePopup, setTypePopup] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set())

  const totalPages = Math.ceil(videoData.length / ITEMS_PER_PAGE)

  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return videoData.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [currentPage])

  const isAllCurrentPageSelected = currentPageData.every((item) =>
    selectedItems.has(item.courseId)
  )
  const isSomeCurrentPageSelected = currentPageData.some((item) =>
    selectedItems.has(item.courseId)
  )
  const isIndeterminate = isSomeCurrentPageSelected && !isAllCurrentPageSelected

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const handleSelectAll = () => {
    if (isAllCurrentPageSelected) {
      // Unselect all items on current page
      const newSelected = new Set(selectedItems)
      currentPageData.forEach((item) => newSelected.delete(item.courseId))
      setSelectedItems(newSelected)
    } else {
      // Select all items on current page
      const newSelected = new Set(selectedItems)
      currentPageData.forEach((item) => newSelected.add(item.courseId))
      setSelectedItems(newSelected)
    }
  }

  const handleSelectItem = (courseId: number) => {
    const newSelected = new Set(selectedItems)
    if (newSelected.has(courseId)) {
      newSelected.delete(courseId)
    } else {
      newSelected.add(courseId)
    }
    setSelectedItems(newSelected)
  }

  const handleRowClick = (courseId: number) => {
    handleSelectItem(courseId)
  }

  const handleEditClick = (e: React.MouseEvent, courseId: number) => {
    e.stopPropagation()
    console.log('Edit course:', courseId)
  }

  const handleDeleteClick = (e: React.MouseEvent, courseId?: number) => {
    e.stopPropagation()

    if (courseId) {
      console.log('Delete course:', courseId)
      setSelectedItems((prev) => {
        const updated = new Set(prev)
        updated.delete(courseId)
        return updated
      })
    } else {
      console.log('Delete selected courses')
      setSelectedItems(new Set())
    }
  }

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    return date.toLocaleDateString(undefined, options)
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
      setTypePopup(null)
    }
  }

  const handleDeleteConfirm = () => {
    setTypePopup(null)
    console.log('Delete confirmed')
  }

  const renderTableHeader = () => (
    <tr className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white">
      {/* Render for "video" tab */}
      {activeTab === 'video' && (
        <>
          <th className="p-4 pl-8 text-left">
            <CheckboxAll
              checked={isAllCurrentPageSelected}
              indeterminate={isIndeterminate}
              onChange={handleSelectAll}
            />
          </th>
          <th className="p-4 text-left font-semibold">Video</th>
          <th className="p-4 text-left font-semibold">Name</th>
          <th className="p-4 text-center font-semibold">Date</th>
          <th className="flex justify-end p-4 pr-6 font-semibold">
            <TrashIcon
              className="w-6 h-6 cursor-pointer"
              onClick={(e) => {
                handleDeleteClick(e)
                setTypePopup('delete')
              }}
            />
          </th>
        </>
      )}
    </tr>
  )

  const renderTableRow = (video: VideoData) => (
    <tr
      key={video.courseId}
      className="border-x border-gray-200 text-gray-800 hover:bg-gray-50 cursor-pointer"
      onClick={() => handleRowClick(video.courseId)}
    >
      {/* Render for "video" tab */}
      {activeTab === 'video' && (
        <>
          <td
            className="px-4 pl-8 border-b border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Checkbox
              checked={selectedItems.has(video.courseId)}
              onChange={() => handleSelectItem(video.courseId)}
            />
          </td>
          <td className="px-4 py-2 border-b border-gray-200">
            <Image
              src={video.courseImage}
              alt={video.courseTitle}
              width={144}
              height={96}
              className="object-cover rounded"
            />
          </td>
          <td className="px-4 border-b border-gray-200">{video.courseTitle}</td>
          <td className="px-4 text-center border-b border-gray-200">
            {formatDate(video.courseDate)}
          </td>
          <td className="px-4 text-center border-b border-gray-200">
            <div className="flex justify-end">
              <button
                className="py-2 pr-2 cursor-pointer"
                onClick={(e) => handleEditClick(e, video.courseId)}
                aria-label="Edit"
              >
                <PencilSquareIcon className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </td>
        </>
      )}
    </tr>
  )

  return (
    <div className="p-6 px-16">
      <h1 className="py-1.5 font-bold text-6xl bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
        Tutorial Content
      </h1>

      <div className="flex justify-between items-center my-6">
        <div className="flex gap-4">
          {(['video'] as const).map((tab) => (
            <TabButton
              key={tab}
              label={tab.charAt(0).toUpperCase() + tab.slice(1)}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
        {activeTab === 'video' && <TutorialUpload />}
      </div>
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

      {typePopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white text-black w-[47%] h-56 px-6 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center z-10">
            <div className="flex w-11/12 gap-16">
              <div className="">
                <div className="absolute mt-2 w-16 h-16 bg-[#FE3511] opacity-20 rounded-xl"></div>
                <TrashIcon className="relative top-7 left-5 w-6 h-6 text-[#FE3511]" />
              </div>
              <div className="w-5/6">
                <div className="font-semibold text-2xl bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
                  Are you sure you want to delete this video?
                </div>
                <div className="text-gray-500 pr-2">
                  <p className="mt-5 mb-6">
                    Once deleted, this action cannot be undone.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleDeleteConfirm}
              className="py-3 w-11/12 px-4 rounded-lg font-semibold text-white bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Yes, Confirm
            </button>
            <div className="absolute right-0 top-0">
              <button
                onClick={() => handlePopupAction('close')}
                className="absolute right-3 top-3 bg-transparent border-none p-0 cursor-pointer"
              >
                <XMarkIcon className="w-5 h-5 text-[#F0725C] hover:text-[#FE3511] transition-colors" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
