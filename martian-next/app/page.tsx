import '@/global.scss';
import styles from './page.module.scss';

import DefaultLayout from '@/components/page/DefaultLayout';
import DefaultActionBar from '@/components/page/DefaultActionBar';
import Grid from '@/components/Grid';
import Button from '@/components/Button';
import Row from '@/components/Row';
import Badge from '@/components/Badge';
import MarsMatrixLoader from '@/components/MarsMatrixLoader';
import Avatar from '@/components/Avatar';
import Indent from '@/components/Indent';
import ClientsSection from '@/components/ClientsSection';
import NavigationActions from '@/components/NavigationActions';
import TeamActions from '@/components/TeamActions';
import { loadClientData } from '@/common/markdown';

// export const dynamic = 'force-static';

export default async function Page() {
  const clients = await loadClientData();

  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DefaultActionBar />
      
      <br />
      <br />
      <br />
      
      {/* Header Row with Main Content and Mars Loader */}
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          <Grid>
            <Row>
              <span style={{ color: 'red' }}>MARTIAN ENGINEERING</span> <Badge>Hard problems, modern solutions</Badge>
            </Row>
            <br />
            <Row>We are a team of senior engineers who solve complex technical problems across diverse domains. 
              Our expertise spans data engineering, network protocols, infrastructure, distributed systems, embedded systems, and security. 
              We combine deep technical knowledge with sophisticated AI development workflows to deliver robust, 
              production-ready solutions with exceptional thoroughness and quality.</Row>
          </Grid>

          <NavigationActions />
        </div>

        <div className={styles.rightColumn}>
          <div style={{ width: '300px', height: '300px' }}>
            <MarsMatrixLoader direction="left-to-right" rows={15} />
          </div>
        </div>
      </div>

      {/* Team Section - Owners */}
      <div className={styles.gridContainer} style={{ marginTop: '6rem' }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Avatar src="/headshots/ted.jpg" style={{ width: '8ch', height: 'calc(var(--font-size) * var(--theme-line-height-base) * 4)' }}>
              <Indent>
                <strong>TED BLACKMAN</strong>
                <br />
                Ted has deep expertise in managing technical projects, including a dozen-person team developing an operating system and network protocol, as Chief Technical Officer of the Urbit Foundation. Previous experience includes robotics, distributed systems, data engineering, full-stack web development, and embedded systems. He was a YC founder in 2011, and holds a degree in physics from MIT.
              </Indent>
            </Avatar>
            <br />
            <Avatar src="/headshots/josh-1.jpg" style={{ width: '8ch', height: 'calc(var(--font-size) * var(--theme-line-height-base) * 4)' }}>
              <Indent>
                <strong>JOSH LEHMAN</strong>
                <br />
                Josh has been leading software organizations for over a decade. He has a knack for organizing teams of developers. Most recently he was the Executive Director of the Urbit Foundation, where he worked closely with Theodore on Urbit's most ambitious core development projects. Previously Josh was the CTO and cofounder of Starcity (YC S16, acquired by Common in 2021).
              </Indent>
            </Avatar>
            <br />
            <TeamActions />
          </Grid>
        </div>
        
        <div className={styles.rightColumn}>
          {/* Empty right column as requested */}
        </div>
      </div>

      {/* Clients Section */}
      <ClientsSection clients={clients} />

      <Grid style={{ marginTop: '4rem' }}>
        <Row>
          <a href="https://github.com/martian-engineering" target="_blank">
            <Button theme="SECONDARY">GitHub</Button>
          </a>
        </Row>
        <Row>
          © 2025 Martian Engineering, LLC
        </Row>
      </Grid>
    </DefaultLayout>
  );
}