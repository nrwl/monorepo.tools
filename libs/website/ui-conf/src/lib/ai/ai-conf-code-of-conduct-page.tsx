import { PALETTE, FONTS, CONF } from './data';
import { NavBar, ConfFooter } from './shared';

/** Reporting contact for code-of-conduct violations. */
const REPORT_EMAIL = 'devrel@nrwl.io';

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: 40 }}>
      <h2
        style={{
          fontFamily: FONTS.display,
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: -0.5,
          color: PALETTE.text,
          marginBottom: 14,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

const paragraph: React.CSSProperties = {
  fontFamily: FONTS.body,
  fontSize: 16,
  lineHeight: 1.75,
  color: PALETTE.textDim,
  marginBottom: 16,
};

/**
 * Code of Conduct sub-page for the AI ❤️ Monorepos Conf. Content adapted from
 * Nx's standard conference code of conduct; reads as a single long-form page.
 */
export function AiConfCodeOfConductPage() {
  return (
    <div
      style={{
        width: '100%',
        background: PALETTE.bg,
        color: PALETTE.text,
        fontFamily: FONTS.body,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBar accent={PALETTE.pink} linkBase="/conf" />

      <div className="mx-auto w-full max-w-[760px] px-5 py-16 md:px-14 md:py-20">
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 12,
            letterSpacing: 2,
            color: PALETTE.pink,
            marginBottom: 16,
          }}
        >
          {CONF.name.toUpperCase()} {CONF.edition.toUpperCase()}
        </div>
        <h1
          style={{
            fontFamily: FONTS.display,
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: -1.5,
            lineHeight: 1.15,
            color: PALETTE.text,
            marginBottom: 24,
          }}
        >
          Code of Conduct
        </h1>

        <p style={paragraph}>
          All attendees, speakers, sponsors, and volunteers at our conference
          are required to agree with the following code of conduct. Organizers
          will enforce this code throughout the event. We expect cooperation
          from all participants to help ensure a safe environment for everybody.
        </p>

        <Section title="The Quick Version">
          <p style={paragraph}>
            Our conference is dedicated to providing a harassment-free conference
            experience for everyone, regardless of gender, gender identity and
            expression, age, sexual orientation, disability, physical appearance,
            body size, race, ethnicity, religion (or lack thereof), or technology
            choices. We do not tolerate harassment of conference participants in
            any form. Sexual language and imagery are not appropriate for any
            conference venue, including talks, workshops, parties, social media,
            and other online media. Conference participants violating these rules
            may be sanctioned or expelled from the conference without a refund at
            the discretion of the conference organizers.
          </p>
        </Section>

        <Section title="The Less Quick Version">
          <p style={paragraph}>
            Harassment includes offensive verbal comments related to gender,
            gender identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion, technology
            choices, sexual images in public spaces, deliberate intimidation,
            stalking, following, harassing photography or recording, sustained
            disruption of talks or other events, inappropriate physical contact,
            and unwelcome sexual attention.
          </p>
          <p style={paragraph}>
            Participants asked to stop any harassing behavior are expected to
            comply immediately.
          </p>
          <p style={paragraph}>
            Sponsors are also subject to the anti-harassment policy. In
            particular, sponsors should not use sexualized images, activities, or
            other material. Booth staff (including volunteers) should not use
            sexualized clothing/uniforms/costumes or otherwise create a
            sexualized environment.
          </p>
          <p style={paragraph}>
            If a participant engages in harassing behavior, the conference
            organizers may take any action they deem appropriate, including
            warning the offender or expulsion from the conference.
          </p>
          <p style={paragraph}>
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of
            conference staff immediately.
          </p>
          <p style={{ ...paragraph, marginBottom: 0 }}>
            We expect participants to follow these rules at conference and
            workshop venues and conference-related social events.
          </p>
        </Section>

        <Section title="Reporting">
          <p style={paragraph}>
            If you need to report a violation of the code of conduct, please send
            an email to{' '}
            <a
              href={`mailto:${REPORT_EMAIL}`}
              style={{ color: PALETTE.pink, textDecoration: 'none' }}
            >
              {REPORT_EMAIL}
            </a>
            , and describe the violation. Please provide as much info as you feel
            comfortable providing.
          </p>
          <p style={{ ...paragraph, marginBottom: 0 }}>
            Helpful details to include:
          </p>
          <ul
            style={{
              ...paragraph,
              marginTop: 12,
              paddingLeft: 22,
              listStyle: 'disc',
            }}
          >
            <li style={{ marginBottom: 8 }}>
              Your contact info, so we can follow up with you
            </li>
            <li style={{ marginBottom: 8 }}>Date and time of the incident</li>
            <li style={{ marginBottom: 8 }}>Location of the incident</li>
            <li style={{ marginBottom: 8 }}>Description of the incident</li>
            <li>
              Any other helpful information, such as whether you are worried about
              any retaliation
            </li>
          </ul>
        </Section>
      </div>

      <ConfFooter accent={PALETTE.pink} linkBase="/conf" />
    </div>
  );
}

export default AiConfCodeOfConductPage;
