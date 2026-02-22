import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function GiftedTalented() {
  return (
    <PageShell
      title="Gifted & Talented Enrichment"
      subtitle="Advanced educational opportunities for high-ability students."
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/contact" variant="light" size="lg">
            Learn More
          </ButtonLink>
          <ButtonLink to="/services" variant="outlineOnDark" size="lg">
            Back to Services
          </ButtonLink>
        </div>
      }
    >
      <ContentSection title="Our Enrichment Program">
        <p>
          Gifted and talented students require unique educational experiences that challenge and engage their
          advanced abilities. Our enrichment program provides challenging academic opportunities that go
          beyond the standard curriculum, helping these students reach their full potential.
        </p>
      </ContentSection>

      <ContentSection title="Services We Offer">
        <ul>
          <li>
            <strong>Advanced Academic Coaching:</strong> Subject-specific instruction at an accelerated pace
          </li>
          <li>
            <strong>Critical Thinking Development:</strong> Logic puzzles, problem-solving, and analytical thinking
          </li>
          <li>
            <strong>Research Projects:</strong> Independent study opportunities in areas of interest
          </li>
          <li>
            <strong>Competition Preparation:</strong> Math, science, and debate competitions
          </li>
          <li>
            <strong>College-Level Courses:</strong> AP, IB, and dual enrollment support
          </li>
          <li>
            <strong>Social-Emotional Support:</strong> Addressing the unique social-emotional needs of gifted
            students
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Who Can Benefit">
        <p>Our gifted enrichment services are ideal for students who:</p>
        <ul>
          <li>Have been identified as gifted or talented</li>
          <li>Show advanced abilities in specific subjects</li>
          <li>Are bored with the standard curriculum</li>
          <li>Want to challenge themselves academically</li>
          <li>Are preparing for academic competitions</li>
        </ul>
      </ContentSection>

      <ContentSection
        title="Our Approach"
        footer={
          <ButtonLink to="/contact" size="lg">
            Learn More
          </ButtonLink>
        }
      >
        <p>
          We recognize that gifted students have unique needs. Our program focuses on depth over breadth,
          encouraging deep exploration of topics, critical thinking, and creative problem-solving. We also
          address the social-emotional aspects of being gifted, helping students develop resilience and
          healthy relationships.
        </p>
      </ContentSection>
    </PageShell>
  );
}
