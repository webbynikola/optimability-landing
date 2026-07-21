import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Optimability",
  description:
    "Learn how Optimability collects, uses, and protects your personal information.",
};

const SECTIONS: LegalSection[] = [
  {
    body: [
      "Optimability Privacy Policy",
      "Last Updated: April 21, 2026",
      'Optimability Performance Solutions Inc. ("Optimability," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, share, and protect your information when you use our services.',
      'Our services include health optimization, fitness, nutrition, recovery, and lifestyle automation, available through our website, mobile applications, and other platforms (collectively, the "Services"). Where you elect in-person services, those are coordinated by our US subsidiary, Optimability Inc., under a separate agreement. Both entities follow this Policy.',
      "By using our Services, you agree to the terms of this Privacy Policy.",
    ],
  },
  {
    heading: "1. Contact Information",
    body: [
      "For privacy-related questions, data requests, or exercising your rights, please contact our Privacy Officer, Ioan Popov:",
      [
        "Optimability Performance Solutions Inc.",
        "415 Columbia St E",
        "New Westminster, BC, Canada",
        "privacy@optimability.com",
      ],
    ],
  },
  {
    heading: "2. Legal Basis for Processing",
    body: [
      "We process personal data under the following bases: Contractual necessity to deliver services you purchase. Consent, captured per data category before processing begins and revocable at any time. Legal compliance with regulatory obligations. Legitimate interests in operating, improving, and protecting our business.",
    ],
  },
  {
    heading: "3. Information We Collect",
    body: [
      "We may collect the following categories of information:",
      [
        "Personal identifiers (name, email, phone number, address, date of birth).",
        "Health and fitness data (measurements, training and nutrition logs, blood, gut, and DNA test results, body composition, optional wearable metrics, all with your consent).",
        "Coaching content (discovery and coaching call recordings and transcripts).",
        "Payment information (billing details and transaction history).",
        "Usage data (device information, cookies, IP addresses, browsing behavior).",
        "Communications (interactions with our team, feedback, preferences).",
      ],
      "We do not knowingly collect information from individuals under 18 without parental consent. If such data is discovered, it will be deleted.",
    ],
  },
  {
    heading: "4. Purpose of Data Use",
    body: [
      "We process data to deliver and personalize services, provide health and lifestyle recommendations, generate AI-assisted protocols and lab analysis, improve our programs and platform functionality, communicate with you regarding updates, services, or support, and comply with legal and regulatory requirements. Your data is not used to train any AI model.",
    ],
  },
  {
    heading: "5. AI and Automated Decisions",
    body: [
      "We use AI to analyze your lab results and generate protocol recommendations. You may request human review of any AI-generated protocol at any time by emailing privacy@optimability.com, and a human will respond within 15 business days. A plain-language explanation of how this works is published at app.optimability.com/how-protocols-work. If you do not grant consent for automated decisions, no AI-generated protocol will be created or saved to your record.",
    ],
  },
  {
    heading: "6. Data Sharing and Disclosure",
    body: [
      "We may share your information in limited circumstances: with service providers and subcontractors (including labs, IT infrastructure, payment processors, and independent service providers engaged through our in-person coordination platform) who assist in delivering services and are bound by confidentiality and data-protection terms; to comply with legal obligations, regulations, or court orders; and in the event of a merger, acquisition, or sale of assets. A current list of our subprocessors is maintained at app.optimability.com/subprocessors. We never sell your personal or health data to third parties.",
    ],
  },
  {
    heading: "7. Data Security",
    body: [
      "We implement layered technical and organizational measures to safeguard your data, including encryption at rest and in transit, access controls, multi-factor authentication on administrative accounts, audit logging, and anomaly alerting. A full description is published at app.optimability.com/security. No internet-based system can guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.",
    ],
  },
  {
    heading: "8. Data Retention",
    body: [
      "We retain personal data only as long as necessary to provide services, fulfill legal obligations, or resolve disputes. Active client data is retained during your engagement and for seven years after termination, consistent with medical-information best practice. Consent records are retained indefinitely as proof of consent history. Upon a valid deletion request, data is permanently deleted within 30 days unless retention is required by law or legitimate business needs. Deletion is irreversible.",
    ],
  },
  {
    heading: "9. Your Rights",
    body: [
      "Depending on your jurisdiction, you may have the right to access your personal data, correct inaccuracies, request deletion, withdraw consent to processing, request a copy of your data (data portability), and request human review of AI-generated decisions. To exercise these rights, contact privacy@optimability.com. We will respond in accordance with applicable laws.",
    ],
  },
  {
    heading: "10. Cookies and Tracking",
    body: [
      "We use cookies and similar technologies to improve service performance and user experience. Our systems currently do not respond to Do Not Track signals. You can control cookies through your browser settings.",
    ],
  },
  {
    heading: "11. International Residents",
    body: [
      "European Economic Area (EEA): Processing is carried out under GDPR principles (lawful basis, rights of access, correction, deletion, portability).",
      "California: You have rights under the CCPA and CPRA, including the right to know, delete, correct, limit use of sensitive personal information, and opt out of sale or share. CMIA applies to medical information we hold on behalf of California clients.",
      "Washington: MHMDA consumer-health-data authorization is captured separately from general processing consent.",
      "Quebec: Law 25 rights to be informed of automated decisions, to request human review, and to withdraw consent at any time apply.",
    ],
  },
  {
    heading: "12. Links to Third-Party Sites",
    body: [
      "Our Services may contain links to external websites. We are not responsible for the privacy practices of third-party sites.",
    ],
  },
  {
    heading: "13. Accessibility",
    body: [
      "We are committed to accessibility for individuals with disabilities. To request this policy or related information in alternative formats, please contact privacy@optimability.com.",
    ],
  },
  {
    heading: "14. Updates to This Policy",
    body: [
      'We may update this Privacy Policy from time to time. Changes will be posted on our website with a revised "Last Updated" date. Continued use of our Services constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="Privacy Policy"
      title="Our Privacy Policy"
      subtitle="Learn how we handle your personal information and ensure your privacy and data security on our platform."
      cardTitle="Information We Collect"
      sections={SECTIONS}
    />
  );
}
