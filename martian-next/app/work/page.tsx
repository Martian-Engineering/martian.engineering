import WorkPageContent from './WorkPageContent';
import { loadClientData } from '@/common/markdown';

/**
 * Server component for the /work route.
 */
export default async function WorkPage() {
  const clients = await loadClientData();

  return <WorkPageContent clients={clients} />;
}
