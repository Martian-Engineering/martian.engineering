'use client';

import '@/global.scss';
import * as React from 'react';

import DefaultLayout from '@/components/page/DefaultLayout';
import DefaultActionBar from '@/components/page/DefaultActionBar';
import Grid from '@/components/Grid';
import Card from '@/components/Card';
import Row from '@/components/Row';
import ActionListItem from '@/components/ActionListItem';

export default function BlogPage() {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DefaultActionBar />
      
      <br />
      <br />
      <br />
      
      {/* Blog Header */}
      <Grid>
        <Row>
          <span style={{ color: 'red' }}>BLOG</span>
        </Row>
        <br />
        <Row>
          Insights from our engineering team on distributed systems, network protocols, 
          AI development workflows, and the future of software engineering.
        </Row>
      </Grid>

      {/* Blog Posts */}
      <Grid style={{ marginTop: '4rem' }}>
        <Card title="RECENT POSTS">
          <ActionListItem icon={`⭢`} href="#">
            Building Production-Ready MCP Hosts at Scale
            <br />
            <span style={{ opacity: 0.7, fontSize: '0.9em' }}>December 2024</span>
          </ActionListItem>
          
          <ActionListItem icon={`⭢`} href="#">
            Lessons from Implementing Distributed Consensus in Rust
            <br />
            <span style={{ opacity: 0.7, fontSize: '0.9em' }}>November 2024</span>
          </ActionListItem>
          
          <ActionListItem icon={`⭢`} href="#">
            AI-Assisted Code Review: Best Practices for Engineering Teams
            <br />
            <span style={{ opacity: 0.7, fontSize: '0.9em' }}>October 2024</span>
          </ActionListItem>
          
          <ActionListItem icon={`⭢`} href="#">
            Optimizing Vector Databases for Enterprise Search
            <br />
            <span style={{ opacity: 0.7, fontSize: '0.9em' }}>September 2024</span>
          </ActionListItem>
        </Card>
      </Grid>

      {/* Coming Soon Notice */}
      <Grid style={{ marginTop: '4rem' }}>
        <Card title="COMING SOON">
          We're currently building out our blog infrastructure. 
          In the meantime, follow our technical work on <a href="https://github.com/martian-engineering" target="_blank" style={{ color: 'red' }}>GitHub</a>.
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