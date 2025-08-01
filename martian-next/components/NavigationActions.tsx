'use client';

import ActionListItem from '@/components/ActionListItem';
import Grid from '@/components/Grid';

export default function NavigationActions() {
  return (
    <Grid>
      <ActionListItem icon={`⭢`} href="/hire">
        Hire us
      </ActionListItem>
      <ActionListItem icon={`⭢`} href="/work">
        Learn about our work
      </ActionListItem>
    </Grid>
  );
}