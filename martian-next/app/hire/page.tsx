'use client';

import '@/global.scss';
import * as React from 'react';

import DefaultLayout from '@/components/page/DefaultLayout';
import DefaultActionBar from '@/components/page/DefaultActionBar';
import Grid from '@/components/Grid';
import Card from '@/components/Card';
import Row from '@/components/Row';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import ActionListItem from '@/components/ActionListItem';

export default function HirePage() {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DefaultActionBar />
      
      <br />
      <br />
      <br />
      
      {/* Hire Header */}
      <Grid>
        <Row>
          <span style={{ color: 'red' }}>HIRE US</span>
        </Row>
        <br />
        <Row>
          We partner with ambitious companies to solve their most complex technical challenges. 
          Our team brings enterprise-grade engineering expertise combined with startup agility.
        </Row>
      </Grid>

      {/* What We Offer */}
      <Grid style={{ marginTop: '4rem' }}>
        <Card title="WHAT WE OFFER">
          <strong>Full-Stack Engineering Teams</strong>
          <br />
          From architecture to implementation, we deliver production-ready solutions.
          <br />
          <br />
          
          <strong>Technical Leadership</strong>
          <br />
          Experienced CTOs and architects to guide your technical strategy.
          <br />
          <br />
          
          <strong>AI Integration Expertise</strong>
          <br />
          Help your team adopt AI development workflows responsibly and effectively.
          <br />
          <br />
          
          <strong>Specialized Domain Knowledge</strong>
          <br />
          Deep expertise in distributed systems, network protocols, security, and infrastructure.
        </Card>
      </Grid>

      {/* Recent Projects */}
      <Grid style={{ marginTop: '2rem' }}>
        <Card title="RECENT PROJECTS">
          <ActionListItem icon={`⊹`}>
            Custom MCP (Model Context Protocol) host with enterprise scaling
          </ActionListItem>
          <ActionListItem icon={`⊹`}>
            Large-scale data ingestion pipeline and embeddings generation
          </ActionListItem>
          <ActionListItem icon={`⊹`}>
            Peer-to-peer network protocol design with economic incentives
          </ActionListItem>
          <ActionListItem icon={`⊹`}>
            AI-powered code review and development workflow automation
          </ActionListItem>
          <ActionListItem icon={`⊹`}>
            Enterprise infrastructure modernization and cloud migration
          </ActionListItem>
        </Card>
      </Grid>

      {/* Engagement Models */}
      <Grid style={{ marginTop: '2rem' }}>
        <Card title="ENGAGEMENT MODELS">
          <Row>
            <Badge>PROJECT-BASED</Badge> Fixed-scope engagements with clear deliverables
          </Row>
          <br />
          <Row>
            <Badge>TEAM AUGMENTATION</Badge> Embedded engineers working alongside your team
          </Row>
          <br />
          <Row>
            <Badge>STRATEGIC CONSULTING</Badge> Technical advisory and architecture reviews
          </Row>
        </Card>
      </Grid>

      {/* Contact CTA */}
      <Grid style={{ marginTop: '4rem' }}>
        <Card title="START A CONVERSATION">
          Tell us about your technical challenges and let's explore how we can help.
          <br />
          <br />
          <a href="mailto:clients@martian.engineering">
            <Button>Contact Us</Button>
          </a>
          <br />
          <br />
          <span style={{ opacity: 0.7 }}>clients@martian.engineering</span>
        </Card>
      </Grid>

      {/* We're Also Hiring */}
      <Grid style={{ marginTop: '4rem' }}>
        <Card title="WE'RE ALSO HIRING">
          Looking for engineers who get things done, love to learn, and want to use the best tools available 
          to build high-quality software across diverse industries and tech stacks.
          <br />
          <br />
          <a href="mailto:jobs@martian.engineering">
            <Button theme="SECONDARY">Join Our Team</Button>
          </a>
        </Card>
      </Grid>

      <Grid style={{ marginTop: '4rem' }}>
        <Row>
          © 2025 Martian Engineering, LLC
        </Row>
      </Grid>
    </DefaultLayout>
  );
}