'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { machines } from '@/lib/machines'

type FormData = {
  name: string
  company: string
  email: string
  phone: string
  machine: string
  message: string
}

export default function ContactForm() {
  const { t, lang } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="mb-4" style={{ color: 'var(--accent)' }} />
        <p className="text-lg font-semibold text-text">{t('contact.form.success')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            {t('contact.form.name')} <span style={{ color: 'var(--accent)' }}>*</span>
          </label>
          <input
            {...register('name', { required: true })}
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition-shadow ${
              errors.name ? 'border-red-400 focus:ring-red-200' : 'border-border focus:ring-blue-200'
            }`}
            style={{ color: 'var(--text)' }}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{t('contact.form.required')}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            {t('contact.form.company')} <span style={{ color: 'var(--accent)' }}>*</span>
          </label>
          <input
            {...register('company', { required: true })}
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition-shadow ${
              errors.company ? 'border-red-400 focus:ring-red-200' : 'border-border focus:ring-blue-200'
            }`}
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-500">{t('contact.form.required')}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            {t('contact.form.email')} <span style={{ color: 'var(--accent)' }}>*</span>
          </label>
          <input
            type="email"
            {...register('email', { required: true })}
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition-shadow ${
              errors.email ? 'border-red-400 focus:ring-red-200' : 'border-border focus:ring-blue-200'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{t('contact.form.required')}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">
            {t('contact.form.phone')}
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition-shadow"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('contact.form.machine')}
        </label>
        <select
          {...register('machine')}
          className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition-shadow"
        >
          <option value="">{t('contact.form.machine.placeholder')}</option>
          {machines.map((m) => (
            <option key={m.slug} value={m.slug}>
              {m.name} – {m.categoryLabel[lang]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('contact.form.message')} <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <textarea
          {...register('message', { required: true })}
          rows={4}
          placeholder={t('contact.form.message.placeholder')}
          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 resize-none transition-shadow ${
            errors.message ? 'border-red-400 focus:ring-red-200' : 'border-border focus:ring-blue-200'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{t('contact.form.required')}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-60"
        style={{ backgroundColor: 'var(--accent)' }}
        onMouseEnter={(e) =>
          !isSubmitting && (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = 'var(--accent)')
        }
      >
        {isSubmitting ? '...' : t('contact.form.submit')}
      </button>
    </form>
  )
}
