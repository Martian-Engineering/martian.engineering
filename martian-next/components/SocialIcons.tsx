import * as React from 'react';

/**
 * Props supported by the reusable social icon components.
 */
export type SocialIconProps = React.SVGProps<SVGSVGElement>;

/**
 * Renders the X (formerly Twitter) brand icon.
 */
export const XIcon: React.FC<SocialIconProps> = ({ className, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.86 2H21l-6.98 8.2L22 22h-4.14l-5.84-8.38L6.54 22H3.4l7.34-8.58L2 2h4.14l5.36 7.65z"
      />
    </svg>
  );
};

/**
 * Renders the LinkedIn brand icon.
 */
export const LinkedInIcon: React.FC<SocialIconProps> = ({ className, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.98 3.5A2.48 2.48 0 0 1 2.5 6 2.48 2.48 0 0 1 0 3.5 2.48 2.48 0 0 1 2.5 1a2.48 2.48 0 0 1 2.48 2.5ZM.44 8.75h4.12V22H.44Zm7.49 0h3.94v1.82H11a4.22 4.22 0 0 1 3.92-2.16c4.2 0 4.97 2.76 4.97 6.36V22h-4.12v-6.36c0-1.52-.03-3.47-2.12-3.47-2.12 0-2.45 1.66-2.45 3.38V22H7.93Z"
      />
    </svg>
  );
};

/**
 * Renders the GitHub brand icon.
 */
export const GitHubIcon: React.FC<SocialIconProps> = ({ className, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.119 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.104.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .321.216.694.825.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12Z"
      />
    </svg>
  );
};
