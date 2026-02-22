import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function IntSchool() {
  return (
    <PageShell
      title="International School Placement"
      subtitle="Helping families find the right international school for their children."
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/contact" variant="light" size="lg">
            Contact Us
          </ButtonLink>
          <ButtonLink to="/services" variant="outlineOnDark" size="lg">
            Back to Services
          </ButtonLink>
        </div>
      }
    >
      <ContentSection title="Our International School Services">
        <p>
          For families relocating internationally or seeking international education options, finding the
          right school can be challenging. We provide comprehensive guidance to help families identify and
          gain admission to international schools that meet their children's needs.
        </p>
      </ContentSection>

      <ContentSection title="Services We Offer">
        <ul>
          <li>
            <strong>School Research & Selection:</strong> Identifying schools that match a family's needs and goals
          </li>
          <li>
            <strong>Curriculum Guidance:</strong> Understanding IB, AP, British, and other international curricula
          </li>
          <li>
            <strong>Application Support:</strong> Assistance with international school applications
          </li>
          <li>
            <strong>Visit Coordination:</strong> Planning school visits during relocation trips
          </li>
          <li>
            <strong>Enrollment Assistance:</strong> Support through the enrollment process
          </li>
          <li>
            <strong>Transition Support:</strong> Helping students adjust to new schools and cultures
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Why Choose International School?">
        <p>International schools offer:</p>
        <ul>
          <li>Globally recognized curricula and credentials</li>
          <li>Multicultural learning environments</li>
          <li>English-medium instruction in non-English speaking countries</li>
          <li>Preparation for university education worldwide</li>
          <li>Smaller class sizes and individualized attention</li>
        </ul>
      </ContentSection>

      <ContentSection
        title="Getting Started"
        footer={
          <ButtonLink to="/contact" size="lg">
            Contact Us
          </ButtonLink>
        }
      >
        <p>
          Contact us to discuss your family's needs and goals. We'll help you explore international school
          options and guide you through the application process.
        </p>
      </ContentSection>
    </PageShell>
  );
}
