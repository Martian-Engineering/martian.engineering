'use client';

import ActionButton from '@/components/ActionButton';

export default function TeamActions() {
  return (
    <ActionButton onClick={() => window.location.href = '/team'}>
      → Meet the rest of the team
    </ActionButton>
  );
}