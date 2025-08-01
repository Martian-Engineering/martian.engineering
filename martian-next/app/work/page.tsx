import styles from '../page.module.scss';

import DefaultLayout from '@/components/page/DefaultLayout';
import DefaultActionBar from '@/components/page/DefaultActionBar';
import Grid from '@/components/Grid';
import Row from '@/components/Row';
import ClientsSection from '@/components/ClientsSection';
import { loadClientData } from '@/common/markdown';

export default async function WorkPage() {
  const clients = await loadClientData();

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
              <span style={{ color: 'red' }}>OUR WORK & CLIENTS</span>
            </Row>
            <br />
            <Row>
              We've partnered with innovative companies across various industries to solve their most challenging technical problems.
            </Row>
          </Grid>
        </div>
        <div className={styles.rightColumn}>
          {/* Empty right column */}
        </div>
      </div>

      {/* Clients Section */}
      <ClientsSection clients={clients} />

      <div className={styles.gridContainer} style={{ marginTop: '4rem' }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Row>
              © 2025 Martian Engineering, LLC
            </Row>
          </Grid>
        </div>
        <div className={styles.rightColumn}>
          {/* Empty right column */}
        </div>
      </div>
    </DefaultLayout>
  );
}