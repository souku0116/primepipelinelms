import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function CollegePlacement() {
  return (
    <PageShell
      title="College & University Placement"
      subtitle="Expert guidance through the college admissions process."
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/contact" variant="light" size="lg">
            Schedule a Consultation
          </ButtonLink>
          <ButtonLink to="/services" variant="outlineOnDark" size="lg">
            Back to Services
          </ButtonLink>
        </div>
      }
    >
      <ContentSection title="Our College Counseling Services">
        <p>
          The college admissions process can be overwhelming for students and families. Our experienced
          college counselors provide comprehensive guidance to help students find and gain admission to the
          college or university that's right for them.
        </p>
      </ContentSection>

      <ContentSection title="Services We Offer">
        <ul>
          <li>
            <strong>College Search & Selection:</strong> Identifying schools that match a student's interests,
            goals, and qualifications
          </li>
          <li>
            <strong>Application Guidance:</strong> Assistance with applications, essays, and personal statements
          </li>
          <li>
            <strong>Standardized Test Preparation:</strong> SAT/ACT prep and test-optional strategies
          </li>
          <li>
            <strong>Financial Aid & Scholarships:</strong> Guidance on scholarships, grants, and financial aid
            options
          </li>
          <li>
            <strong>Interview Preparation:</strong> Practice and tips for college interviews
          </li>
          <li>
            <strong>Gap Year Planning:</strong> Support for students considering a gap year
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Our Process">
        <ul>
          <li>
            <strong>Initial Assessment:</strong> Understanding a student's interests, goals, and academic
            profile
          </li>
          <li>
            <strong>Research:</strong> Exploring colleges and universities that fit a student's needs
          </li>
          <li>
            <strong>Application Strategy:</strong> Developing a balanced list of reach, match, and safety schools
          </li>
          <li>
            <strong>Essay Coaching:</strong> Helping students craft compelling personal statements
          </li>
          <li>
            <strong>Interview Prep:</strong> Building confidence for college interviews
          </li>
          <li>
            <strong>Decision Support:</strong> Weighing offers and making final decisions
          </li>
        </ul>
      </ContentSection>

      <ContentSection
        title="Getting Started"
        footer={
          <ButtonLink to="/contact" size="lg">
            Schedule a Consultation
          </ButtonLink>
        }
      >
        <p>
          Contact us to schedule a free initial consultation. We'll discuss your child's goals and create a
          personalized college counseling plan.
        </p>
      </ContentSection>
    </PageShell>
  );
}
