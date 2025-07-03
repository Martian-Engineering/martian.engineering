import '@/global.scss';

import DefaultLayout from '@/components/page/DefaultLayout';
import Grid from '@/components/Grid';
import Block from '@/components/Block';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Row from '@/components/Row';
import Badge from '@/components/Badge';
import DebugGrid from '@/components/DebugGrid';

export const dynamic = 'force-static';

export default async function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <br />
      <Grid>
        <Row>
          MARTIAN ENGINEERING
        </Row>
        <Row>Hard Problems, Modern Solutions</Row>
      </Grid>

      <DebugGrid />

      <Grid>
        <Card title="ABOUT">
          We are a team of senior engineers who solve complex technical problems across diverse domains. 
          Our expertise spans data engineering, network protocols, distributed systems, embedded systems, and security. 
          We combine deep technical knowledge with sophisticated AI development workflows to deliver robust, 
          production-ready solutions with exceptional thoroughness and quality.
          <br />
          <br />
          <a href="mailto:clients@martian.engineering">
            <Button>Contact us</Button>
          </a>
        </Card>
      </Grid>

      <Grid>
        <Card title="WHAT WE DO">
          Recent projects include:
          <br />
          <br />
          ▪ Custom MCP (Model Context Protocol) host with enterprise scaling
          <br />
          ▪ Large-scale data ingestion pipeline and embeddings generation
          <br />
          ▪ Peer-to-peer network protocol design with economic incentives
          <br />
          ▪ Automated code review systems
          <br />
          <br />
          We also help established engineering teams adopt AI development practices responsibly. We've trained teams 
          at major tech companies on integrating AI tools effectively while maintaining security practices and 
          compliance requirements—knowledge gained from years of building our own disciplined, production-ready workflows.
        </Card>
      </Grid>
    </DefaultLayout>
  );
}