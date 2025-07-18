'use client';

import '@/global.scss';
import styles from './page.module.scss';
import * as React from 'react';

import DefaultLayout from '@/components/page/DefaultLayout';
import DefaultActionBar from '@/components/page/DefaultActionBar';
import Navigation from '@/components/Navigation';
import Grid from '@/components/Grid';
import Card from '@/components/Card';
import CardDouble from '@/components/CardDouble';
import Button from '@/components/Button';
import Row from '@/components/Row';
import Badge from '@/components/Badge';
import Text from '@/components/Text';
import DebugGrid from '@/components/DebugGrid';
import MarsMatrixLoader from '@/components/MarsMatrixLoader';
import BlockLoader from '@/components/BlockLoader';
import Divider from '@/components/Divider';
import HoverComponentTrigger from '@/components/HoverComponentTrigger';
import ClientLogos from '@/components/ClientLogos';
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
      name: 'NEAR FOUNDATION', 
      project: "Proof of Response Protocol",
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
            <ActionListItem icon={`⭢`} href="mailto:clients@martian.engineering">
              Hire us
            </ActionListItem>
            <ActionListItem icon={`⭢`} href="https://github.com/martian-engineering" target="_blank">
              View our open source work
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
      <div id="team-section" className={styles.gridContainer} style={{ marginTop: '6rem' }}>
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
            <ActionButton onClick={() => window.location.href = '#team-members'}>
              → Meet the rest of the team
            </ActionButton>
          </Grid>
        </div>
        
        <div className={styles.rightColumn}>
          {/* Empty right column as requested */}
        </div>
      </div>

      {/* Clients Section with SidebarLayout */}
      <div className={styles.gridContainer} style={{ marginTop: '6rem' }}>
        <div className={styles.leftColumn}>
          <Grid>
            <CardDouble title="CLIENTS" mode="left">
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

      <Grid>
        {/* <Card title="WHAT WE DO">
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
        </Card> */}
      </Grid>

      <Grid>
        {/* <Card title="WE'RE HIRING">
          We're looking for engineers who get things done, love to learn, and want to use the best tools available to build high-quality software across diverse industries and tech stacks. If you're excited about joining a fast-paced environment and becoming top-notch at leveraging AI to build real software, we'd love to hear from you.
          <br />
          <br />
          <a href="mailto:jobs@martian.engineering">
            <Button>Send us your resume</Button>
          </a>
        </Card> */}
      </Grid>

      {/* <Grid>
        <Card title="OWNERS">
          <Card title="Ted Blackman" mode="left">
            Ted has deep expertise in managing technical projects, including a dozen-person team developing an operating system and network protocol, as Chief Technical Officer of the Urbit Foundation. Previous experience includes robotics, distributed systems, data engineering, full-stack web development, and embedded systems. He was a YC founder in 2011, and holds a degree in physics from MIT.
          </Card>
          <br />
          <Card title="Josh Lehman" mode="left">
            Josh has been leading software organizations for over a decade. He has a knack for organizing teams of developers. Most recently he was the Executive Director of the Urbit Foundation, where he worked closely with Theodore on Urbit's most ambitious core development projects. Previously Josh was the CTO and cofounder of Starcity (YC S16, acquired by Common in 2021).
          </Card>
        </Card>
      </Grid>

      <Grid>
        <Card title="TEAM">
          <Card title="Luke Champine" mode="left">
            <Badge>network protocols</Badge> <Badge>cryptography</Badge>
            <br />
            <br />
            Luke is a 3rd-generation programmer specializing in cryptography, networking protocols, and performance optimization. Since dropping out of college to co-found Sia, a leading cloud storage cryptocurrency, he has worked across all layers of the stack, from ASIC mining firmware to JavaScript frontends; TCP multiplexing to distributed consensus; vectorized assembly to novel Merkle tree research, and more. He treats programming as an end in itself, and outside of work he enjoys tinkering with a new language designed for competitive programming.
          </Card>
          <br />
          <Card title="Rikard Hjort" mode="left">
            <Badge>decentralized finance</Badge> <Badge>blockchain</Badge> <Badge>security</Badge>
            <br />
            <br />
            Rikard is a security auditor and DeFi developer who's has spent the last five years securing a variety of protocols with billions of dollars worth of assets under management and led various auditing teams with a dozen employees. He previously worked on formal verification based audits and tools at Runtime Verification, Inc. and as a lead security researcher for Spearbit, one of the leading cryptocurrency and DeFi auditing organizations. He holds a M.S. in Computer Science from Chalmers University of Engineering, Sweden.
          </Card>
          <br />
          <Card title="Phil Galebach" mode="left">
            <Badge>data engineering</Badge> <Badge>full-stack development</Badge> <Badge>AI optimization</Badge>
            <br />
            <br />
            Phil is a data-focused technologist with a career spanning statistician, senior data engineer, business intelligence manager, digital health COO, and AI optimization specialist. Phil has a particular passion for entrepreneurial work, founding his first business while at Harvard.
            <br />
            <br />
            Since diving headfirst into LLMs, he has worked extensively across the AI stack: from agents and RAG systems to MCPs and workflow automation; database optimizations to full-stack development; healthcare IT systems to digital marketing platforms. His recent focus centers on redesigning our relationship with computers through AI-powered business optimizations. He's worked extensively with heavily regulated enterprises, startups and the USG.
          </Card>
          <br />
          <Card title="Liam Fitzgerald" mode="left">
            <Badge>network protocols</Badge> <Badge>application development</Badge>
            <br />
            <br />
            Liam's experience includes networking protocols, decentralized applications and developer tooling. His most recent project was an experimental application layer for Urbit that unified build systems, smart contracts and user facing applications, which involved subprojects spanning systems, frontend and application programming. His previous projects include Tlon's secure decentralized messenger, which is the largest application on the Urbit platform, as well as working on the Urbit kernel in various capacities. He studied Biomedical Engineering and Mathematics at the University of Queensland before dropping out.
          </Card>
          <br />
          <Card title="~mopfel-winrux" mode="left">
            <Badge>embedded systems</Badge> <Badge>machine learning</Badge>
            <br />
            <br />
            ~mopfel-winrux's previous experience includes processor development and positions at NASA and Lockheed Martin Research & Development. He holds a Ph.D. in Electrical Engineering from Georgia Tech.
          </Card>
          <br />
          <Card title="Brian Bulag" mode="left">
            <Badge>machine learning</Badge> <Badge>data science</Badge>
            <br />
            <br />
            Brian's experience includes computational biology research and machine learning, particularly with kernel methods on social science data within The Institute for Quantitative Social Science at Harvard. He holds degrees in Biology and Philosophy from Stony Brook University, and is an avid Category Theory enthusiast.
          </Card>
          <br />
          <Card title="~barter-simsum" mode="left">
            <Badge>operating systems</Badge> <Badge>memory management</Badge>
            <br />
            <br />
            ~barter-simsum's previous experience includes implementing a novel fault-tolerant persistent memory allocator for Urbit, where he also used pointer compression to expand the addressable memory in a 32-bit language interpreter. Before Urbit, ~barter-simsum worked at Microsoft on optimizing storage drivers in the Windows kernel. ~barter-simsum holds a B.S. in Computer Science from Miami University.
          </Card>
        </Card>
      </Grid>

      <Grid>
        <Row>
          <a href="https://github.com/martian-engineering" target="_blank">
            <Button theme="SECONDARY">GitHub</Button>
          </a>
        </Row>
        <Row>
          © 2025 Martian Engineering, LLC
        </Row>
      </Grid> */}
    </DefaultLayout>
  );
}