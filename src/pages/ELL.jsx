import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function ELL() {
  return (
    <PageShell
      title="English Language Learners (ELL)"
      subtitle="Supporting multilingual students on their journey to English proficiency."
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
      <ContentSection title="Our ELL Program">
        <p>
          Our English Language Learners program is designed to help non-native English speakers develop
          language proficiency while also building academic skills. We understand the unique challenges
          that ELL students face and provide a supportive, encouraging environment for language learning.
        </p>
      </ContentSection>

      <ContentSection title="Services We Offer">
        <ul>
          <li>
            <strong>ESL Instruction:</strong> English as a Second Language instruction at all proficiency levels
          </li>
          <li>
            <strong>Academic Language Support:</strong> Help with understanding academic vocabulary and concepts
          </li>
          <li>
            <strong>Reading & Writing Development:</strong> Strategies for developing literacy skills in English
          </li>
          <li>
            <strong>Speaking & Listening Practice:</strong> Opportunities to practice conversational and academic
            English
          </li>
          <li>
            <strong>Test Preparation:</strong> Preparation for English proficiency tests (TOEFL, IELTS, etc.)
          </li>
          <li>
            <strong>Cultural Adjustment Support:</strong> Helping students adjust to new cultural contexts
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Who Can Benefit">
        <p>Our ELL services are ideal for:</p>
        <ul>
          <li>International students</li>
          <li>Students from immigrant families</li>
          <li>Students seeking to improve their English proficiency</li>
          <li>Students preparing for English proficiency exams</li>
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
          We use evidence-based teaching methods and create a supportive learning environment where
          students feel comfortable taking risks and making mistakes. Our instructors are experienced in
          working with ELL students and understand the language acquisition process.
        </p>
      </ContentSection>
    </PageShell>
  );
}


