import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function Coaching() {
  return (
    <PageShell
      title="Elevate Coaching"
      subtitle="One-on-one academic coaching to help students achieve their full potential."
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
      <ContentSection title="What is Academic Coaching?">
        <p>
          Academic coaching is a collaborative process between the coach and student designed to help
          students develop the skills and strategies needed to succeed academically. Unlike traditional
          tutoring, which focuses on specific subject content, coaching focuses on the whole student—
          including study skills, time management, organizational strategies, and mindset.
        </p>
      </ContentSection>

      <ContentSection title="Who Can Benefit from Coaching?">
        <p>Our coaching services are ideal for students who:</p>
        <ul>
          <li>Want to improve their grades but don't know where to start</li>
          <li>Struggle with time management and procrastination</li>
          <li>Feel overwhelmed by homework and assignments</li>
          <li>Need help developing effective study habits</li>
          <li>Want to build confidence in their academic abilities</li>
          <li>Are preparing for important exams (SAT, ACT, GRE, etc.)</li>
        </ul>
      </ContentSection>

      <ContentSection title="What We Cover">
        <ul>
          <li>
            <strong>Study Strategies:</strong> Active recall, spaced repetition, note-taking, and more
          </li>
          <li>
            <strong>Time Management:</strong> Creating schedules, prioritizing tasks, avoiding procrastination
          </li>
          <li>
            <strong>Organization:</strong> Keeping track of assignments, materials, and deadlines
          </li>
          <li>
            <strong>Goal Setting:</strong> Setting realistic academic goals and tracking progress
          </li>
          <li>
            <strong>Test Preparation:</strong> Strategies for taking exams effectively
          </li>
          <li>
            <strong>Mindset & Motivation:</strong> Building confidence and maintaining motivation
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Our Approach">
        <p>
          We take a personalized approach to coaching. Each student is unique, and we work with them to
          identify their specific challenges and develop customized strategies for success. Our coaches
          serve as mentors, accountability partners, and cheerleaders throughout the journey.
        </p>
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
          To begin, we offer a free initial consultation to understand your child's needs and goals. Based
          on this, we'll create a personalized coaching plan tailored to their specific requirements.
        </p>
      </ContentSection>
    </PageShell>
  );
}


