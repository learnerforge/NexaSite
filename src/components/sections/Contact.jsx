import { useState, useCallback } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Toast } from '@/components/ui/Toast'

const initial = { name: '', email: '', message: '' }

export function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    console.log('Contact form submission:', form)
    setForm(initial)
    setToast(true)
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const closeToast = useCallback(() => setToast(false), [])

  return (
    <section id="contact" className="border-t border-theme-border bg-theme-card/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <span className="text-xs font-semibold uppercase tracking-widest text-theme-accent">
            Contact
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let's work together.
          </h2>
          <p className="mt-3 text-theme-muted">
            Have a project in mind? Reach out and we'll discuss how we can help.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-lg space-y-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Input
            label="Name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange('name')}
            error={errors.name}
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange('email')}
            error={errors.email}
          />
          <Textarea
            label="Message"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange('message')}
            error={errors.message}
          />
          <Button type="submit" size="lg" className="w-full">
            Send Message
            <Send size={16} />
          </Button>
        </form>
      </div>

      <Toast message="Thanks! Your message has been sent." show={toast} onClose={closeToast} />
    </section>
  )
}
