import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function Advocacy() {
  return (
    <PageShell
      title="Special Education Advocacy"
      subtitle="Helping families navigate the special education system."
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
      <ContentSection title="Our Advocacy Services">
        <p>
          Navigating the special education system can be challenging for families. Our experienced advocates
          provide expert guidance and support to help families secure the services and accommodations their
          children need to succeed.
        </p>
      </ContentSection>

      <ContentSection title="How We Help">
        <ul>
          <li>
            <strong>Individualized Education Program (IEP) Support:</strong> Guidance through the IEP process
          </li>
          <li>
            <strong>504 Plan Assistance:</strong> Help understanding and securing 504 accommodations
          </li>
          <li>
            <strong>School District Collaboration:</strong> Communication with school staff and administrators
          </li>
          <li>
            <strong>Due Process Representation:</strong> Support during disputes and hearings
          </li>
          <li>
            <strong>Parent Training:</strong> Empowering parents to advocate effectively for their children
          </li>
          <li>
            <strong>Resource Referrals:</strong> Connecting families with appropriate services and support
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Why Advocacy Matters">
        <p>
          Students with special needs are entitled to a free appropriate public education (FAPE). However,
          many families struggle to navigate the complex laws and procedures that govern special education.
          Having an experienced advocate can make a significant difference in ensuring your child receives
          the support they need.
        </p>
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
          Contact us to discuss your situation. We'll help you understand your rights and develop a
          strategy to advocate effectively for your child.
        </p>
      </ContentSection>
    </PageShell>
  );
}
