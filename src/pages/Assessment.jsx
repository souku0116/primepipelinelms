import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function Assessment() {
  return (
    <PageShell
      title="Psychological Assessment"
      subtitle="Comprehensive psychological and educational assessments to understand a student's unique learning profile."
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/contact" variant="light" size="lg">
            Request an Assessment
          </ButtonLink>
          <ButtonLink to="/services" variant="outlineOnDark" size="lg">
            Back to Services
          </ButtonLink>
        </div>
      }
    >
      <ContentSection title="What We Assess">
        <ul>
          <li>
            <strong>Learning Profile:</strong> Strengths, challenges, and learning style indicators
          </li>
          <li>
            <strong>Attention & Executive Function:</strong> Planning, organization, and focus
          </li>
          <li>
            <strong>Academic Skills:</strong> Reading, writing, and math (as appropriate)
          </li>
          <li>
            <strong>Social-Emotional Factors:</strong> Well-being, stressors, and coping skills
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="What You Receive">
        <ul>
          <li>A clear, structured summary of findings</li>
          <li>Actionable recommendations and next steps</li>
          <li>Support coordinating with school teams when needed</li>
        </ul>
      </ContentSection>

      <ContentSection
        title="Next Steps"
        footer={
          <ButtonLink to="/contact" size="lg">
            Request an Assessment
          </ButtonLink>
        }
      >
        <p>
          If you're considering an assessment, contact us to discuss your goals. We'll help determine the
          right next step and outline what the process could look like.
        </p>
      </ContentSection>
    </PageShell>
  );
}
