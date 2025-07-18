'use client';

import ActionListItem from '@/components/ActionListItem';
import Grid from '@/components/Grid';

export default function NavigationActions() {
  return (
    <Grid>
      <ActionListItem icon={`⭢`} href="/hire">
        Hire us
      </ActionListItem>
      <ActionListItem icon={`⭢`} onClick={() => {
        const element = document.getElementById('clients-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
        Learn about our work
      </ActionListItem>
    </Grid>
  );
}