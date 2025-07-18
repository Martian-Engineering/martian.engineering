'use client';

import '@/global.scss';
import styles from '../page.module.scss';
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
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
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
        </div>
        <div className={styles.rightColumn}>
          {/* Empty right column */}
        </div>
      </div>

      {/* Blog Posts */}
      <div className={styles.gridContainer} style={{ marginTop: '4rem' }}>
        <div className={styles.leftColumn}>
          <Grid>
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
        </div>
        <div className={styles.rightColumn}>
          {/* Empty right column */}
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className={styles.gridContainer} style={{ marginTop: '4rem' }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Card title="COMING SOON">
              We're currently building out our blog infrastructure. 
              In the meantime, follow our technical work on <a href="https://github.com/martian-engineering" target="_blank" style={{ color: 'red' }}>GitHub</a>.
            </Card>
          </Grid>
        </div>
        <div className={styles.rightColumn}>
          {/* Empty right column */}
        </div>
      </div>

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