'use client';

import '@/global.scss';
import styles from './page.module.scss';
import * as React from 'react';

import DefaultLayout from '@/components/page/DefaultLayout';
import DefaultActionBar from '@/components/page/DefaultActionBar';
import Grid from '@/components/Grid';
import Card from '@/components/Card';
import CardDouble from '@/components/CardDouble';
import Button from '@/components/Button';
import Row from '@/components/Row';
import Badge from '@/components/Badge';
import MarsMatrixLoader from '@/components/MarsMatrixLoader';
import Divider from '@/components/Divider';
import ActionButton from '@/components/ActionButton';
import ActionListItem from '@/components/ActionListItem';
import SidebarLayout from '@/components/SidebarLayout';
import Avatar from '@/components/Avatar';
import Indent from '@/components/Indent';

// export const dynamic = 'force-static';

export default function Page() {
  const [selectedClient, setSelectedClient] = React.useState<string | null>('near'); // Default to first client

  const clients = [
    { 
      id: 'near', 
      name: 'NEAR', 
      project: "Proof of Response",
      brief: 'Data pipeline architecture & ML infrastructure', 
      logo: '/client-logos/near-foundation-white.svg',
      website: 'https://near.foundation/',
      duration: '8 months',
      technologies: ['Python', 'Apache Kafka', 'Kubernetes', 'PostgreSQL', 'Redis', 'OpenAI API', 'LangChain', 'Pinecone', 'Docker', 'AWS'],
      fullDescription: `We architected and implemented a comprehensive data processing infrastructure for NEAR Foundation's blockchain ecosystem. The project involved building high-throughput data ingestion pipelines capable of processing millions of blockchain transactions daily, with real-time transformation and enrichment capabilities.

Our team developed a sophisticated embeddings generation system using state-of-the-art language models to create semantic representations of blockchain data, enabling advanced search and analysis capabilities. We implemented custom vector search infrastructure supporting millions of documents with sub-second query times.

Key achievements included reducing data processing latency by 85%, implementing fault-tolerant mechanisms for 99.9% uptime, and creating a scalable architecture that automatically handles traffic spikes during high blockchain activity periods. The system now serves as the backbone for NEAR's data analytics and machine learning initiatives.`
    },
    { 
      id: 'sweetspot', 
      name: 'SWEETSPOT', 
      project: "USASpending Data Pipeline",
      brief: 'Custom MCP host with enterprise scaling', 
      logo: '/client-logos/sweetspot.svg',
      website: 'https://sweetspot.so',
      duration: '6 months',
      technologies: ['TypeScript', 'Node.js', 'React', 'WebSockets', 'Redis', 'PostgreSQL', 'Docker', 'Model Context Protocol', 'OAuth 2.0', 'JWT'],
      fullDescription: `Sweetspot needed a robust Model Context Protocol (MCP) implementation that could scale to enterprise requirements while maintaining security and compliance standards. We developed a custom MCP host from the ground up, designed specifically for their unique business requirements.

The solution featured advanced connection pooling and load balancing to handle thousands of concurrent AI model interactions. We implemented sophisticated caching strategies and request deduplication to optimize API costs while maintaining low latency. The system integrates seamlessly with existing enterprise authentication systems via SAML and OAuth 2.0.

Our security-first approach included end-to-end encryption, audit logging, and role-based access control. We also built comprehensive monitoring and alerting systems that provide real-time insights into system performance and usage patterns. The platform now handles over 10 million requests daily with 99.95% availability.`
    },
    { 
      id: 'tlon', 
      name: 'TLON', 
      project: "Zenith Blockchain",
      brief: 'Distributed systems & network protocols', 
      logo: '/client-logos/tlon.svg',
      website: 'https://tlon.io',
      duration: '12 months',
      technologies: ['Rust', 'Go', 'WebRTC', 'libp2p', 'QUIC', 'Protocol Buffers', 'PostgreSQL', 'Redis', 'Kubernetes', 'Prometheus'],
      fullDescription: `Tlon engaged us to architect and implement the core distributed systems infrastructure for their next-generation decentralized communication platform. This involved designing novel network protocols that could operate efficiently in peer-to-peer environments while maintaining the user experience of centralized systems.

We developed a custom gossip protocol for message propagation that achieves eventual consistency across globally distributed nodes with minimal bandwidth overhead. The system uses advanced NAT traversal techniques and WebRTC for direct peer connections, falling back to relay nodes when necessary. Our implementation includes sophisticated congestion control and quality-of-service mechanisms.

The architecture supports millions of concurrent users across thousands of nodes, with automatic scaling and self-healing capabilities. We implemented comprehensive testing infrastructure including network simulation environments that model real-world conditions like packet loss and variable latency. The platform now serves as the foundation for Tlon's entire communication ecosystem.`
    },
    { 
      id: 'extend', 
      name: 'EXTEND', 
      project: "Database Scaling",
      brief: 'AI development workflow optimization', 
      logo: '/client-logos/extend.svg',
      website: 'https://www.extend.ai/',
      duration: '4 months',
      technologies: ['Python', 'TypeScript', 'LangChain', 'OpenAI API', 'Anthropic API', 'Vector Databases', 'GitHub Actions', 'Docker', 'Terraform', 'AWS'],
      fullDescription: `Extend brought us in to revolutionize their engineering team's development workflows through strategic AI integration. We conducted comprehensive assessments of their existing processes and identified key areas where AI could significantly improve productivity without compromising code quality or security.

We implemented custom AI-powered code review systems that provide intelligent feedback on pull requests, catching potential bugs and suggesting optimizations based on the team's coding standards. Our solution includes context-aware code generation tools that understand the project's architecture and automatically maintain consistency with existing patterns.

Beyond tooling, we developed comprehensive training programs that helped engineers at all levels effectively leverage AI assistants while maintaining critical thinking and code ownership. We established best practices for prompt engineering, security guidelines for handling sensitive data, and metrics for measuring AI tool effectiveness. The team saw a 40% improvement in development velocity while maintaining high code quality standards.`
    },
    { 
      id: 'supplyco', 
      name: 'SUPPLYCO', 
      project: "ETL Support",
      brief: 'Enterprise infrastructure & automation', 
      logo: '/client-logos/supplyco-logo.svg',
      website: 'https://www.supplyco.ai/',
      duration: '10 months',
      technologies: ['Java', 'Spring Boot', 'Apache Spark', 'Kafka', 'Elasticsearch', 'MongoDB', 'React', 'D3.js', 'Kubernetes', 'Terraform'],
      fullDescription: `SupplyCo needed a complete overhaul of their supply chain management infrastructure to handle exponential growth and increasingly complex logistics networks. We designed and implemented a microservices-based architecture that could process millions of transactions while providing real-time visibility into global supply chain operations.

Our solution features advanced optimization algorithms that continuously analyze supply and demand patterns, automatically adjusting inventory levels and routing decisions to minimize costs while meeting service level agreements. We implemented machine learning models for demand forecasting that reduced inventory holding costs by 30% while improving order fulfillment rates.

The system includes comprehensive real-time dashboards built with D3.js that provide executives with instant insights into supply chain performance. We also developed sophisticated alerting mechanisms that proactively identify potential disruptions before they impact operations. The platform now manages over $2 billion in annual inventory movements across 50+ countries with industry-leading efficiency metrics.`
    }
  ];

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

          <Grid style={{ width: '512px'}}>
            <ActionListItem icon={`⭢`} href="/hire">
              Hire us
            </ActionListItem>
            <ActionListItem icon={`⭢`} onClick={() => {
              const element = document.getElementById('clients-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Learn more about our work
            </ActionListItem>
          </Grid>
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
            <ActionButton onClick={() => window.location.href = '/team'}>
              → Meet the rest of the team
            </ActionButton>
          </Grid>
        </div>
        
        <div className={styles.rightColumn}>
          {/* Empty right column as requested */}
        </div>
      </div>

      {/* Clients Section with SidebarLayout */}
      <div id="clients-section" className={styles.gridContainer} style={{ marginTop: '6rem' }}>
        <div style={{ width: '140%'}}>
          <Grid>
            <CardDouble title="OUR WORK & CLIENTS" mode="left">
              <SidebarLayout
                defaultSidebarWidth={25}
                sidebar={
                  <div>
                    {clients.map((client) => (
                      <ActionListItem 
                        key={client.id}
                        icon={`✦`}
                        onClick={() => setSelectedClient(client.id)}
                        style={{ 
                          opacity: selectedClient === client.id ? 1 : 0.6,
                          fontWeight: selectedClient === client.id ? 'bold' : 'normal',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {client.name}
                      </ActionListItem>
                    ))}
                  </div>
                }
              >
                {selectedClient && (() => {
                  const client = clients.find(c => c.id === selectedClient);
                  if (!client) return null;
                  
                  return (
                    <Card style={{ marginLeft: '2rem' }}>
                      {/* Project Name and Logo in one row */}
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1rem',
                        gap: '2rem',
                        height: '60px' // Fixed height for consistency
                      }}>
                        {/* Project name in red, all caps on the left */}
                        <span style={{ 
                          color: 'red',
                          textTransform: 'uppercase',
                          fontWeight: 'bold'
                        }}>
                          {client.project}
                        </span>
                        
                        {/* Logo as link on the right */}
                        <a 
                          href={client.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            width: '200px', // Fixed width container
                            height: '60px', // Fixed height container
                            background: 'transparent',
                            textDecoration: 'none'
                          }}
                        >
                          <img 
                            src={client.logo} 
                            alt={client.name}
                            style={{ 
                              maxWidth: '100%',
                              maxHeight: '100%',
                              width: 'auto',
                              height: 'auto',
                              objectFit: 'contain',
                              cursor: 'pointer',
                              filter: 'brightness(0) saturate(100%) invert(1)',
                              mixBlendMode: 'screen'
                            }}
                          />
                        </a>
                      </div>
                      
                      <Divider type="DOUBLE"/>
                      
                      <br />
                      
                      {/* Project Overview Text (no card) */}
                      <div style={{ 
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap',
                        marginBottom: '2rem'
                      }}>
                        {client.fullDescription}
                      </div>
                      
                      {/* Engagement Duration */}
                      <Row>
                        <Badge>ENGAGEMENT LENGTH: {client.duration}</Badge>
                      </Row>
                      
                      <br />
                      
                      {/* Technologies Card */}
                      <Card title="TECHNOLOGIES USED" mode="left">
                        <div style={{ 
                          display: 'flex', 
                          flexWrap: 'wrap', 
                          gap: '0.5rem'
                        }}>
                          {client.technologies.map((tech, index) => (
                            <Badge key={index}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    </Card>
                  );
                })()}
              </SidebarLayout>
            </CardDouble>
          </Grid>
        </div>
      </div>

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