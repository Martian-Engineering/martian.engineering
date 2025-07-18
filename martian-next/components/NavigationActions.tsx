'use client';

import ActionListItem from '@/components/ActionListItem';
import Grid from '@/components/Grid';

export default function NavigationActions() {
  return (
    <Grid style={{ width: '512px'}}>
      <ActionListItem icon={`⭢`} href="/hire">
        Hire us
      </ActionListItem>
      <ActionListItem icon={`⭢`} onClick={() => {
        const element = document.getElementById('clients-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
        Learn more about our work
      </ActionListItem>
    </Grid>
  );
}