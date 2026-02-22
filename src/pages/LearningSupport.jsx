import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function LearningSupport() {
  return (
    <PageShell
      title="Learning & Behaviour Support"
      subtitle="Specialized support for students with learning differences and behavioral challenges."
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
      <ContentSection title="Our Approach">
        <p>
          We believe that every student can learn and succeed given the right support and environment. Our
          Learning & Behaviour Support services are designed to help students with various learning
          differences develop the skills and strategies they need to thrive academically and socially.
        </p>
      </ContentSection>

      <ContentSection title="Services We Offer">
        <ul>
          <li>
            <strong>Learning Disability Support:</strong> Specialized instruction for students with dyslexia,
            dyscalculia, dysgraphia, and other learning disabilities
          </li>
          <li>
            <strong>ADHD Coaching:</strong> Strategies and support for students with attention deficit
            hyperactivity disorder
          </li>
          <li>
            <strong>Autism Spectrum Support:</strong> Social skills training, sensory integration, and academic
            support for students on the autism spectrum
          </li>
          <li>
            <strong>Behavioral Intervention:</strong> Positive behavior support plans and strategies for
            managing challenging behaviors
          </li>
          <li>
            <strong>Executive Functioning Support:</strong> Building skills in planning, organization, and
            self-regulation
          </li>
          <li>
            <strong>Social Skills Groups:</strong> Group sessions to develop social interaction skills
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Who We Serve">
        <p>We work with students of all ages who have:</p>
        <ul>
          <li>Specific learning disabilities</li>
          <li>ADHD/ADD</li>
          <li>Autism spectrum disorders</li>
          <li>Behavioral challenges</li>
          <li>Executive function difficulties</li>
          <li>Social-emotional needs</li>
        </ul>
      </ContentSection>

      <ContentSection title="Our Team">
        <p>
          Our team consists of certified special education teachers, behavior analysts, and related
          professionals who are passionate about helping students with learning differences succeed.
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
          We begin with a comprehensive assessment to understand your child's unique strengths and needs.
          Based on this evaluation, we'll develop an individualized support plan tailored to their specific
          requirements.
        </p>
      </ContentSection>
    </PageShell>
  );
}


