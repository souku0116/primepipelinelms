import { ButtonLink } from "../components/ButtonLink";
import { PageShell } from "../components/PageShell";

const teamMembers = [
  {
    name: "Jon",
    role: "Founder & Lead Educator",
    bio: "Jon is the founder of Elevate Educate with over 15 years of experience in special education and educational psychology. He is passionate about helping students overcome learning challenges and achieve their goals.",
  },
  {
    name: "Sarah Johnson",
    role: "Special Education Specialist",
    bio: "Sarah specializes in working with students with learning disabilities and ADHD. She has a Master's degree in Special Education and is dedicated to creating inclusive learning environments.",
  },
  {
    name: "Michael Chen",
    role: "College Admissions Counselor",
    bio: "Michael has helped hundreds of students gain admission to top universities. With his expertise in college applications and financial aid, he guides families through the entire admissions process.",
  },
  {
    name: "Emily Rodriguez",
    role: "School Counselor",
    bio: "Emily provides social-emotional support and counseling services to students of all ages. She is trained in cognitive-behavioral therapy and trauma-informed practices.",
  },
  {
    name: "Dr. Lisa Park",
    role: "Licensed Educational Psychologist",
    bio: "Dr. Park conducts comprehensive psychological assessments to identify learning styles, cognitive strengths, and areas for growth. She holds a Ph.D. in Educational Psychology.",
  },
];

export default function Team() {
  return (
    <PageShell
      title="Our Team"
      subtitle="Meet the dedicated professionals who make Elevate Educate special."
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/contact" variant="light" size="lg">
            Contact Us
          </ButtonLink>
          <ButtonLink to="/services" variant="outlineOnDark" size="lg">
            Our Services
          </ButtonLink>
        </div>
      }
    >
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg font-semibold">
                {member.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-blue-700">{member.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">{member.bio}</p>
          </article>
        ))}
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900">Join Our Team</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We're always looking for passionate educators to join our team. If you're interested in
              working with us, please contact us.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <ButtonLink to="/contact" size="lg">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}


