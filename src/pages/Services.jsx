import { Link } from "react-router-dom";

import { ButtonLink } from "../components/ButtonLink";
import { PageShell } from "../components/PageShell";

const services = [
  {
    title: "Elevate Coaching",
    description:
      "One-on-one academic coaching to help students develop effective study strategies, time management skills, and achieve academic success.",
    to: "/coaching",
    icon: "🎯",
  },
  {
    title: "English Language Learners (ELL)",
    description: "Support for non-native English speakers to develop language proficiency and academic skills.",
    to: "/ell",
    icon: "🌍",
  },
  {
    title: "Services for Students on Leave",
    description: "Academic support and counseling services for students taking medical or personal leave.",
    to: "/leave-services",
    icon: "🏠",
  },
  {
    title: "College & University Placement",
    description:
      "Comprehensive guidance through the college application process, from school selection to enrollment.",
    to: "/college-placement",
    icon: "🎓",
  },
  {
    title: "Special Education Advocacy",
    description:
      "Expert advocacy services to help families navigate the special education system and secure appropriate services.",
    to: "/advocacy",
    icon: "🛡️",
  },
  {
    title: "Psychological Assessment",
    description:
      "Comprehensive psychological and educational assessments to identify learning styles, strengths, and areas for growth.",
    to: "/assessment",
    icon: "📋",
  },
  {
    title: "Counseling",
    description:
      "Social-emotional counseling and support for students dealing with anxiety, depression, stress, and other challenges.",
    to: "/counseling",
    icon: "💬",
  },
  {
    title: "Group Classes",
    description: "Small group instruction in various subjects, providing collaborative learning opportunities.",
    to: "/group-classes",
    icon: "👥",
  },
];

export default function Services() {
  return (
    <PageShell
      title="Our Services"
      subtitle="Comprehensive educational support tailored to meet each student’s unique needs."
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/contact" variant="light" size="lg">
            Free Consultation
          </ButtonLink>
          <ButtonLink to="/about" variant="outlineOnDark" size="lg">
            Learn About Us
          </ButtonLink>
        </div>
      }
    >
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.to}
            to={service.to}
            className="group bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.description}</p>
                <div className="mt-4 text-sm font-semibold text-blue-700">Learn more →</div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-white">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold">Not sure what you need?</h2>
            <p className="mt-3 text-slate-200 leading-relaxed">
              Contact us for a free consultation, and we’ll help you find the right support for your child.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <ButtonLink to="/contact" variant="light" size="lg">
              Get in Touch
            </ButtonLink>
            <ButtonLink to="/" variant="outlineOnDark" size="lg">
              Back to Home
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}


