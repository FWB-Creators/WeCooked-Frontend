"use client";
import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

interface FAQItem {
  question: string
  answer: string
  isOpen?: boolean
}

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: 'Who is this cooking course for?',
      answer:
        "This course is for anyone who loves Italian food, from beginners to experienced cooks. Whether you want to master authentic carbonara or refine your skills, Chef Sieng's approach makes it easy and accessible for all!",
      isOpen: true,
    },
    {
      question: 'Do I need prior cooking experience?',
      answer:
        'No prior cooking experience is needed! Our course is designed to guide you step-by-step through each recipe, starting with basic techniques and gradually building your skills.',
      isOpen: false,
    },
    {
      question: "Can I substitute ingredients if I can't find guanciale?",
      answer:
        "Yes, while traditional carbonara uses guanciale, we'll show you suitable alternatives like pancetta or bacon that can still create a delicious dish while maintaining the authentic flavor profile.",
      isOpen: false,
    }
  ])

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    )
  }

  return (
    <div className="w-full max-w-8xl mx-auto py-12 px-16">
      <h2 className="text-left w-full text-3xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-transparent bg-clip-text mb-8">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="p-12 space-y-4 border border-gray-200 rounded-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="text-gray-800 font-medium">{faq.question}</span>
              <ChevronDownIcon
                className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                  faq.isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {faq.isOpen && (
              <div className="pb-4 text-gray-500">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
