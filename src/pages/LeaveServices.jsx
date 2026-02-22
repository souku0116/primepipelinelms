import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function LeaveServices() {
  return (
    <PageShell
      title="Services for Students on Leave"
      subtitle="Academic and emotional support for students taking medical or personal leave."
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
      <ContentSection title="Understanding Student Leave">
        <p>
          Students may need to take leave from school for various reasons, including medical issues, mental
          health concerns, family emergencies, or personal matters. During this time, it's important to
          maintain academic progress and provide emotional support. Our services are designed to help
          students stay on track and successfully return to their studies.
        </p>
      </ContentSection>

      <ContentSection title="Our Services">
        <ul>
          <li>
            <strong>Academic Tutoring:</strong> Continue learning key subjects while on leave
          </li>
          <li>
            <strong>Homebound Instruction:</strong> On-site or virtual instruction for homebound students
          </li>
          <li>
            <strong>Coursework Support:</strong> Help with assignments, projects, and exam preparation
          </li>
          <li>
            <strong>Communication with School:</strong> Liaising with teachers and administrators
          </li>
          <li>
            <strong>Transition Support:</strong> Assistance returning to school after leave
          </li>
          <li>
            <strong>Counseling Services:</strong> Emotional support during challenging times
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="How We Help">
        <p>We work with students on leave to:</p>
        <ul>
          <li>Maintain academic momentum and prevent falling behind</li>
          <li>Stay connected with their school and peers</li>
          <li>Address any emotional or social concerns</li>
          <li>Develop a plan for a successful return to school</li>
          <li>Communicate with teachers about accommodations needed</li>
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
          Contact us to discuss your situation. We'll work with you and your family to create a
          personalized support plan that meets your academic and emotional needs during your leave.
        </p>
      </ContentSection>
    </PageShell>
  );
}


