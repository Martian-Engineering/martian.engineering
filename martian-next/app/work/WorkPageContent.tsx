import styles from "../page.module.scss";

import DefaultLayout from "@/components/page/DefaultLayout";
import DefaultActionBar from "@/components/page/DefaultActionBar";
import Grid from "@/components/Grid";
import Row from "@/components/Row";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import { ClientData } from "@/common/markdown";

interface WorkPageContentProps {
  clients: ClientData[];
  initialClientId?: string;
}

/**
 * Renders the Work page layout and preselects a client when provided.
 */
export default function WorkPageContent({
  clients,
  initialClientId,
}: WorkPageContentProps) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DefaultActionBar />

      <br />
      <br />
      <br />

      {/* Work Header */}
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          <Grid>
            <Row>
              <span style={{ color: "var(--theme-text-header, var(--color-red-80))" }}>OUR WORK & CLIENTS</span>
            </Row>
            <br />
            <Row>
              We&apos;ve partnered with innovative companies across various
              industries to solve their most challenging technical problems.
            </Row>
          </Grid>
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      {/* Clients Section */}
      <ClientsSection clients={clients} initialClientId={initialClientId} />

      <Footer />
    </DefaultLayout>
  );
}
