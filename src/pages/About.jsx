import { ButtonLink } from "../components/ButtonLink";
import { ContentSection } from "../components/ContentSection";
import { PageShell } from "../components/PageShell";

export default function About() {
  return (
    <PageShell
      title="About Us"
      subtitle="Learn more about our mission and the story behind Elevate Educate."
      actions={
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/contact" variant="light" size="lg">
            Contact Us
          </ButtonLink>
          <ButtonLink to="/services" variant="outlineOnDark" size="lg">
            View Services
          </ButtonLink>
        </div>
      }
    >
      <ContentSection title="Our Mission">
        <p>
          At Elevate Educate, our mission is to empower students of all ages and backgrounds to reach
          their full academic and personal potential. We believe that every student has unique strengths
          and challenges, and our role is to provide the support, guidance, and resources needed to help
          them succeed.
        </p>
      </ContentSection>

      <ContentSection title="Our Story">
        <p>
          Founded by Jon, an experienced educator with a passion for helping students overcome obstacles
          to learning, Elevate Educate has grown from a small tutoring practice into a comprehensive
          educational support center. Jon's background in special education and educational psychology has
          shaped our holistic approach to student support.
        </p>
        <p>
          We believe in building strong relationships with students and families, understanding that
          meaningful progress takes time, patience, and a collaborative effort between educators, parents,
          and students.
        </p>
      </ContentSection>

      <ContentSection title="Our Approach">
        <ul>
          <li>
            <strong>Student-Centered:</strong> We tailor our services to meet each student's unique needs
          </li>
          <li>
            <strong>Evidence-Based:</strong> We use proven teaching methods and strategies
          </li>
          <li>
            <strong>Collaborative:</strong> We work closely with families and other professionals
          </li>
          <li>
            <strong>Comprehensive:</strong> We address academic, social, and emotional needs
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Our Values">
        <ul>
          <li>
            <strong>Excellence:</strong> We strive for the highest quality in everything we do
          </li>
          <li>
            <strong>Compassion:</strong> We treat every student with kindness and respect
          </li>
          <li>
            <strong>Integrity:</strong> We are honest, ethical, and transparent
          </li>
          <li>
            <strong>Innovation:</strong> We continuously improve our methods and services
          </li>
        </ul>
      </ContentSection>
    </PageShell>
  );
}


