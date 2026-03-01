import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { ButtonLink } from "../components/ButtonLink";
import { PageShell } from "../components/PageShell";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell
      title="Contact Us"
      subtitle="Get in touch with us to learn more about our educational services."
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/services" variant="outlineOnDark" size="lg">
            View Services
          </ButtonLink>
          <ButtonLink to="/" variant="light" size="lg">
            Back to Home
          </ButtonLink>
        </div>
      }
    >
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Contact Details</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Share a bit about your goals and we'll help you choose the right next step.
          </p>

          <ul className="mt-6 space-y-4 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
              <span>
                123 Education Way
                <br />
                Suite 100
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-700 shrink-0" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-700 shrink-0" />
              <span>info@elevateeducate.com</span>
            </li>
          </ul>

          <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 p-5">
            <h3 className="text-sm font-semibold text-slate-900">What to include</h3>
            <div className="mt-3 rich-text">
              <ul>
                <li>Student age/grade</li>
                <li>What you'd like support with</li>
                <li>Any timeline or upcoming deadlines</li>
              </ul>
            </div>
          </div>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Send a Message</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Fill out the form below and we'll get back to you shortly.
          </p>

          {submitted ? (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              Thanks — we've received your message. (Demo form: no email is sent yet.)
            </div>
          ) : null}

          <div className="mt-6 grid gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-900">Full name</label>
              <input
                required
                type="text"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">Email</label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">Service of interest</label>
              <select className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20">
                <option>Not sure yet</option>
                <option>Coaching</option>
                <option>College Placement</option>
                <option>Assessment</option>
                <option>Counseling</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">Message</label>
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                placeholder="Tell us what you need help with"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
            >
              Send message
            </button>

            <p className="text-xs text-slate-500">
              This is a demo form in the Test-Application project; it won't actually send an email yet.
            </p>
          </div>
        </form>
      </section>

      <section className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-white">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold">Prefer to browse first?</h2>
            <p className="mt-3 text-slate-200 leading-relaxed">
              Explore our services to see what's available, then reach out when you're ready.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <ButtonLink to="/services" variant="light" size="lg">
              Explore Services
            </ButtonLink>
            <ButtonLink to="/about" variant="outlineOnDark" size="lg">
              About Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
