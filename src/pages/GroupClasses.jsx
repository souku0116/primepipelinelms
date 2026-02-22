import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function GroupClasses() {
  return (
    <PageShell
      title="Group Classes"
      subtitle="Small group instruction for collaborative learning experiences."
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/contact" variant="light" size="lg">
            View Current Classes
          </ButtonLink>
          <ButtonLink to="/services" variant="outlineOnDark" size="lg">
            Back to Services
          </ButtonLink>
        </div>
      }
    >
      <ContentSection title="Our Group Class Program">
        <p>
          Group classes offer students the opportunity to learn alongside peers in a collaborative
          environment. Our small group settings provide the benefits of social learning while maintaining
          individualized attention from instructors.
        </p>
      </ContentSection>

      <ContentSection title="Types of Group Classes We Offer">
        <ul>
          <li>
            <strong>Academic Tutoring Groups:</strong> Math, science, English, and other core subjects
          </li>
          <li>
            <strong>Test Prep Groups:</strong> SAT, ACT, GRE, and other standardized test prep
          </li>
          <li>
            <strong>Study Skills Workshops:</strong> Time management, note-taking, study strategies
          </li>
          <li>
            <strong>Social Skills Groups:</strong> Building communication and relationship skills
          </li>
          <li>
            <strong>Executive Functioning Groups:</strong> Organization, planning, and self-regulation
          </li>
          <li>
            <strong>Language Classes:</strong> ESL and foreign language instruction
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Benefits of Group Learning">
        <ul>
          <li>
            <strong>Peer Support:</strong> Students learn from and motivate each other
          </li>
          <li>
            <strong>Social Interaction:</strong> Build friendships and collaborative skills
          </li>
          <li>
            <strong>Diverse Perspectives:</strong> Learn from different viewpoints and approaches
          </li>
          <li>
            <strong>Cost-Effective:</strong> More affordable than individual tutoring
          </li>
          <li>
            <strong>Engaging Environment:</strong> Interactive and dynamic learning experience
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Class Sizes">
        <p>
          We keep our groups small (typically 4-8 students) to ensure each student receives adequate
          attention and support. This allows our instructors to differentiate instruction and address each
          student's unique needs.
        </p>
      </ContentSection>

      <ContentSection
        title="Current Class Offerings"
        footer={
          <ButtonLink to="/contact" size="lg">
            View Current Classes
          </ButtonLink>
        }
      >
        <p>
          Contact us for information about upcoming group classes, schedules, and registration. We regularly
          add new classes based on student interest and demand.
        </p>
      </ContentSection>
    </PageShell>
  );
}
