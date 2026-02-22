import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function Counseling() {
  return (
    <PageShell
      title="Counseling Services"
      subtitle="Social-emotional support for students navigating life's challenges."
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/contact" variant="light" size="lg">
            Schedule a Session
          </ButtonLink>
          <ButtonLink to="/services" variant="outlineOnDark" size="lg">
            Back to Services
          </ButtonLink>
        </div>
      }
    >
      <ContentSection title="Our Counseling Services">
        <p>
          Students face many challenges that can impact their academic success and overall well-being. Our
          licensed counselors provide a safe, supportive environment where students can explore their
          feelings, develop coping skills, and work through difficulties.
        </p>
      </ContentSection>

      <ContentSection title="Who We Help">
        <p>Our counseling services support students dealing with:</p>
        <ul>
          <li>Anxiety and worry</li>
          <li>Depression and sadness</li>
          <li>Stress and overwhelm</li>
          <li>Relationship difficulties</li>
          <li>Family changes (divorce, moves, etc.)</li>
          <li>Self-esteem issues</li>
          <li>Grief and loss</li>
          <li>Bullying</li>
        </ul>
      </ContentSection>

      <ContentSection title="Our Approach">
        <p>
          We use evidence-based therapeutic approaches tailored to each student's needs and developmental
          level. Our counselors create a welcoming, non-judgmental space where students feel comfortable
          expressing themselves and working through challenges.
        </p>
      </ContentSection>

      <ContentSection title="Services We Offer">
        <ul>
          <li>
            <strong>Individual Counseling:</strong> One-on-one sessions tailored to a student's needs
          </li>
          <li>
            <strong>Group Counseling:</strong> Small groups for social skills, coping skills, and more
          </li>
          <li>
            <strong>Family Counseling:</strong> Support for families navigating challenges together
          </li>
          <li>
            <strong>Crisis Intervention:</strong> Immediate support for urgent situations
          </li>
          <li>
            <strong>Academic Counseling:</strong> Help with academic challenges and goal-setting
          </li>
        </ul>
      </ContentSection>

      <ContentSection
        title="Getting Started"
        footer={
          <ButtonLink to="/contact" size="lg">
            Schedule a Session
          </ButtonLink>
        }
      >
        <p>
          Contact us to schedule a consultation. We'll match you with a counselor who can best address your
          child's needs.
        </p>
      </ContentSection>
    </PageShell>
  );
}
