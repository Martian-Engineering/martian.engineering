'use client';

import styles from '@/components/page/DefaultActionBar.module.scss';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';

import ActionBar from '@/components/ActionBar';
import { useHotkeys } from '@/hooks/useHotkeys';

interface DefaultActionBarProps {
  items?: {
    hotkey: string;
    onClick: () => void;
    body: React.ReactNode;
    items?: any;
  }[];
}

const DefaultActionBar: React.FC<DefaultActionBarProps> = ({ items = [] }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleHome = () => router.push('/');
  const handleTeam = () => router.push('/team');
  const handleWork = () => router.push('/work');
  const handleHire = () => router.push('/hire');
  const handleGitHub = () => window.open('https://github.com/martian-engineering', '_blank');

  // Add keyboard shortcuts
  useHotkeys('ctrl+i', handleHome);
  useHotkeys('ctrl+t', handleTeam);
  useHotkeys('ctrl+w', handleWork);
  useHotkeys('ctrl+h', handleHire);
  useHotkeys('ctrl+g', handleGitHub);

  return (
    <div className={styles.root}>
      <ActionBar
        items={[
          {
            hotkey: '⌃+I',
            body: <span style={{ color: pathname === '/' ? 'var(--theme-button-text)' : 'var(--theme-text)' }}>●</span>,
            onClick: handleHome,
            selected: pathname === '/',
          },
          {
            hotkey: '⌃+T',
            body: 'TEAM',
            onClick: handleTeam,
            selected: pathname === '/team',
          },
          {
            hotkey: '⌃+W',
            body: 'WORK',
            onClick: handleWork,
            selected: pathname === '/work',
          },
          {
            hotkey: '⌃+H',
            body: 'HIRE',
            onClick: handleHire,
            selected: pathname === '/hire',
          },
          {
            hotkey: '⌃+G',
            body: 'GITHUB',
            onClick: handleGitHub,
            selected: false,
          },
          ...items,
        ]}
      />
    </div>
  );
};

export default DefaultActionBar;
