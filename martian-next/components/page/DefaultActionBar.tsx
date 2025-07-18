'use client';

import styles from '@/components/page/DefaultActionBar.module.scss';

import * as React from 'react';

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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTeam = () => scrollToSection('team-section');
  const handleBlog = () => window.open('https://blog.martian.engineering', '_blank');
  const handleContact = () => window.location.href = 'mailto:clients@martian.engineering';

  // Add keyboard shortcuts
  useHotkeys('ctrl+1', handleTeam);
  useHotkeys('ctrl+2', handleBlog);
  useHotkeys('ctrl+3', handleContact);

  return (
    <div className={styles.root}>
      <ActionBar
        items={[
          {
            hotkey: '⌃+T',
            body: 'TEAM',
            onClick: handleTeam,
          },
          {
            hotkey: '⌃+B',
            body: 'BLOG',
            onClick: handleBlog,
          },
          {
            hotkey: '⌃+O',
            body: 'CONTACT',
            onClick: handleContact,
          },
          ...items,
        ]}
      />
    </div>
  );
};

export default DefaultActionBar;