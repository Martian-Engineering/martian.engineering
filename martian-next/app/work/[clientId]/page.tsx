import { notFound } from "next/navigation";

import WorkPageContent from "../WorkPageContent";
import { loadClientData } from "@/common/markdown";

interface WorkClientPageProps {
  params: Promise<{ clientId: string }>;
}

/**
 * Server component for the /work/[clientId] route.
 */
export default async function WorkClientPage({ params }: WorkClientPageProps) {
  const clients = await loadClientData();
  const { clientId } = await params;

  const clientExists = clients.some((client) => client.id === clientId);
  if (!clientExists) {
    notFound();
  }

  return <WorkPageContent clients={clients} initialClientId={clientId} />;
}
