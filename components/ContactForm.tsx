'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { machines } from '@/lib/machines'

type FormData = {
  name: string
  company: string
  email: string
  phone: string
  machine: string
  message: string
  /** Honeypot — hidden from users; bots fill it and get silently dropped. */
  website: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm({ defaultMachine }: { defaultMachine?: string }) {
  const { t, lang } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ defaultValues: { machine: defaultMachine ?? '' } })

  const onSubmit = async (data: FormData) => {
    setSubmitError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('request failed')
      setSubmitted(true)
    } catch {
      setSubmitError(true)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="mb-4" style={{ color: 'var(--brand)' }} />
        <p className="text-lg font-semibold text-text">{t('contact.form.success')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot: visually hidden, off-screen, not focusable, not announced. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-text mb-1.5">
            {t('contact.form.name')} <span style={{ color: 'var(--brand)' }}>*</span>
          </label>
          <input
            id="cf-name"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
            {...register('name', { required: true })}
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition-shadow ${
              errors.name ? 'border-red-400 focus:ring-red-200' : 'border-border focus:ring-blue-200'
            }`}
            style={{ color: 'var(--text)' }}
          />
          {errors.name && (
            <p id="cf-name-err" className="mt-1 text-xs text-red-500">{t('contact.form.required')}</p>
          )}
        </div>
        <div>
          <label htmlFor="cf-company" className="block text-sm font-medium text-text mb-1.5">
            {t('contact.form.company')} <span style={{ color: 'var(--brand)' }}>*</span>
          </label>
          <input
            id="cf-company"
            aria-invalid={errors.company ? 'true' : 'false'}
            aria-describedby={errors.company ? 'cf-company-err' : undefined}
            {...register('company', { required: true })}
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition-shadow ${
              errors.company ? 'border-red-400 focus:ring-red-200' : 'border-border focus:ring-blue-200'
            }`}
          />
          {errors.company && (
            <p id="cf-company-err" className="mt-1 text-xs text-red-500">{t('contact.form.required')}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-text mb-1.5">
            {t('contact.form.email')} <span style={{ color: 'var(--brand)' }}>*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
            {...register('email', { required: true, pattern: EMAIL_RE })}
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition-shadow ${
              errors.email ? 'border-red-400 focus:ring-red-200' : 'border-border focus:ring-blue-200'
            }`}
          />
          {errors.email && (
            <p id="cf-email-err" className="mt-1 text-xs text-red-500">
              {errors.email.type === 'pattern' ? t('contact.form.email.invalid') : t('contact.form.required')}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-medium text-text mb-1.5">
            {t('contact.form.phone')}
          </label>
          <input
            id="cf-phone"
            type="tel"
            {...register('phone')}
            className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition-shadow"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-machine" className="block text-sm font-medium text-text mb-1.5">
          {t('contact.form.machine')}
        </label>
        <select
          id="cf-machine"
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
        <label htmlFor="cf-message" className="block text-sm font-medium text-text mb-1.5">
          {t('contact.form.message')} <span style={{ color: 'var(--brand)' }}>*</span>
        </label>
        <textarea
          id="cf-message"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
          {...register('message', { required: true })}
          rows={4}
          placeholder={t('contact.form.message.placeholder')}
          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 resize-none transition-shadow ${
            errors.message ? 'border-red-400 focus:ring-red-200' : 'border-border focus:ring-blue-200'
          }`}
        />
        {errors.message && (
          <p id="cf-message-err" className="mt-1 text-xs text-red-500">{t('contact.form.required')}</p>
        )}
      </div>

      {submitError && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
          <span>{t('contact.form.error')}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-60"
        style={{ backgroundColor: 'var(--brand)' }}
        onMouseEnter={(e) =>
          !isSubmitting && (e.currentTarget.style.backgroundColor = 'var(--brand-dark)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = 'var(--brand)')
        }
      >
        {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
      </button>
    </form>
  )
}
