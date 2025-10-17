import * as React from 'react';

import styles from '@/components/Footer.module.scss';
import Grid from '@/components/Grid';
import Row from '@/components/Row';
import { GitHubIcon, LinkedInIcon, type SocialIconProps } from '@/components/SocialIcons';

interface FooterProps {
  style?: React.CSSProperties;
}

const GITHUB_URL = 'https://github.com/martian-engineering';
const LINKEDIN_URL = 'https://www.linkedin.com/company/martian-engineering/';

type FooterLink = {
  href: string;
  label: string;
  Icon: React.FC<SocialIconProps>;
};

const links: FooterLink[] = [
  { href: GITHUB_URL, Icon: GitHubIcon, label: 'GitHub' },
  { href: LINKEDIN_URL, Icon: LinkedInIcon, label: 'LinkedIn' },
];

const defaultStyle: React.CSSProperties = {
  marginTop: '4rem',
  paddingBottom: 'calc(var(--font-size) * var(--theme-line-height-base) * 2)',
};

/**
 * Footer renders the site footer with organization social links and branding.
 */
export default function Footer({ style }: FooterProps) {
  const combinedStyle = { ...defaultStyle, ...(style ?? {}) };

  return (
    <Grid className={styles.footer} style={combinedStyle}>
      <Row className={styles.row}>
        <span>© 2025 Martian Engineering, LLC</span>
        <div className={styles.links}>
          {links.flatMap((link, index) => {
            const anchor = (
              <a
                key={link.href}
                className={styles.link}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <link.Icon className={styles.icon} />
              </a>
            );

            if (index === 0) {
              return [anchor];
            }

            return [
              <span key={`${link.href}-separator`} aria-hidden="true" className={styles.separator}>
                •
              </span>,
              anchor,
            ];
          })}
        </div>
      </Row>
    </Grid>
  );
}
