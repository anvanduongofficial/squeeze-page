'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface OptinFormProps {
  buttonText: string
  formId: string
}

export default function OptinForm({ buttonText, formId }: OptinFormProps) {
  const [email, setEmail]   = useState('')
  const [error, setError]   = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function isValid(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid(email)) {
      setLoading(true)
      setError('Please enter a valid email address.')
      return
    }

  const res = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();
  if(data.success) {
    router.push("/thank-you");
  }

  setLoading(false);
    setError('')

    /**
     * ── Wire to your ESP here ──
     *
     * ConvertKit example:
     *   await fetch(`https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe`, {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify({ api_key: process.env.NEXT_PUBLIC_CK_API_KEY, email }),
     *   })
     *
     * Or create app/api/subscribe/route.ts to keep API keys server-side:
     *   await fetch('/api/subscribe', {
     *     method: 'POST',
     *     body: JSON.stringify({ email }),
     *   })
     */

    router.push('/thank-you')
  }

  return (
    <form id={formId} onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@email.com"
        autoComplete="email"
        required
        className="
          w-full px-5 py-4 rounded-xl text-[15px] font-manrope
          bg-surface2 text-textBase placeholder-textMuted/60
          border border-[rgba(124,58,237,0.2)]
          transition-all duration-200 input-purple
        "
      />

      {error && (
        <p className="text-red-400 text-[13px] bg-red-400/10 border border-red-400/20 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
          w-full py-4 px-6 rounded-xl text-base font-bold font-manrope text-white
          bg-gradient-to-r from-purple to-purpleLt
          shadow-[0_4px_20px_rgba(124,58,237,0.45)]
          hover:shadow-[0_8px_28px_rgba(124,58,237,0.55)]
          hover:-translate-y-px active:translate-y-0
          transition-all duration-200 disabled:opacity-60
        "
      >
        {loading ? 'Sending…' : buttonText}
      </button>

      <p className="text-center text-xs text-textMuted flex items-center justify-center gap-1">
        🔒 No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}
