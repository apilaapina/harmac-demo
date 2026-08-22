'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { MachineFAQ } from '@/lib/machines'
import { Lang } from '@/context/LanguageContext'

type Props = {
  faqs: MachineFAQ[]
  lang: Lang
}

export default function FAQAccordion({ faqs, lang }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span className="text-sm font-medium text-text pr-4">
              {faq.question[lang]}
            </span>
            <ChevronDown
              size={16}
              className={`flex-shrink-0 text-text-muted transition-transform duration-200 ${
                openIdx === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIdx === i && (
            <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed">
              {faq.answer[lang]}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
