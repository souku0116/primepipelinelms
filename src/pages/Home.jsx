import { Link } from "react-router-dom";

import { ButtonLink } from "../components/ButtonLink";

const featuredServices = [
  {
    title: "Academic Coaching",
    description:
      "One-on-one guidance to help students develop effective study strategies and achieve academic success.",
    to: "/coaching",
    icon: "🎯",
  },
  {
    title: "College Placement",
    description: "Expert guidance through the college application process and university placement services.",
    to: "/college-placement",
    icon: "🎓",
  },
  {
    title: "Psychological Assessment",
    description: "Comprehensive evaluations to identify learning styles, strengths, and areas for growth.",
    to: "/assessment",
    icon: "📋",
  },
];

export default function Home() {
  return (
    <div>
      <header className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-semibold tracking-wide uppercase">
              Personalized Educational Support
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Welcome to Elevate Educate
            </h1>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              Empowering students to reach their full potential through coaching, learning support,
              counseling, and specialized services.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <ButtonLink to="/login" variant="light" size="lg">
                Portal Login
              </ButtonLink>
              <ButtonLink to="/services" variant="outlineOnDark" size="lg">
                Explore Services
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_70%_20%,#60a5fa_0%,transparent_55%)]" />
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
          <section className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">Who We Are</h2>
              <div className="mt-4 rich-text">
                <p>
                  Elevate Educate is dedicated to providing comprehensive educational services that help
                  students overcome challenges and achieve their academic goals. With a team of experienced
                  educators, counselors, and specialists, we offer personalized support tailored to each
                  student's unique needs.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-sm">
              <h3 className="text-lg font-semibold">Need help choosing?</h3>
              <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                Tell us your goals and we’ll recommend the right service for your child.
              </p>
              <div className="mt-6">
                <ButtonLink to="/contact" variant="outlineOnDark">
                  Free Consultation
                </ButtonLink>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Featured Services</h2>
                <p className="mt-2 text-slate-600">A few ways we support students and families.</p>
              </div>
              <Link
                to="/services"
                className="hidden sm:inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                View all services →
              </Link>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredServices.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="group bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{service.description}</p>
                  <div className="mt-5 text-sm font-semibold text-blue-700">Learn more →</div>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  Ready to start your journey?
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Contact us today to learn how we can help support your child's educational success.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                <ButtonLink to="/contact" size="lg">
                  Contact Us
                </ButtonLink>
                <ButtonLink to="/about" variant="outline" size="lg">
                  Learn About Us
                </ButtonLink>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


