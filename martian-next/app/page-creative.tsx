'use client';

import '@/global.scss';
import * as React from 'react';

import DefaultLayout from '@/components/page/DefaultLayout';
import Navigation from '@/components/Navigation';
import Grid from '@/components/Grid';
import Block from '@/components/Block';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Row from '@/components/Row';
import Badge from '@/components/Badge';
import Text from '@/components/Text';
import DebugGrid from '@/components/DebugGrid';
import MatrixLoader from '@/components/MatrixLoader';
import BlockLoader from '@/components/BlockLoader';
import Divider from '@/components/Divider';
import TextArea from '@/components/TextArea';
import ActionButton from '@/components/ActionButton';
import Accordion from '@/components/Accordion';
import BarLoader from '@/components/BarLoader';
import Tooltip from '@/components/Tooltip';
import HoverComponentTrigger from '@/components/HoverComponentTrigger';

export const dynamic = 'force-static';

export default function Page(props) {
  const [loadingProgress, setLoadingProgress] = React.useState(0);
  const [showContent, setShowContent] = React.useState(false);
  const [terminalOutput, setTerminalOutput] = React.useState('');
  const [showSecretMessage, setShowSecretMessage] = React.useState(false);
  const [activeOperation, setActiveOperation] = React.useState(null);

  React.useEffect(() => {
    // Simulate loading sequence
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowContent(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const missionStatement = `> INITIALIZING MARTIAN.ENGINEERING...
> LOADING SYSTEM MODULES...
> ESTABLISHING SECURE CONNECTION...
> 
> WELCOME TO MARTIAN ENGINEERING
> 
> We are elite problem solvers who thrive where others fail.
> Our mission: Transform impossible challenges into elegant solutions.
> Our method: Cutting-edge AI + deep technical expertise.
> Our promise: Production-ready code that exceeds expectations.
> 
> SYSTEM READY. PROCEED WITH CAUTION.`;

  // Easter egg: Konami code
  React.useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeydown = (e) => {
      if (e.key === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
          setShowSecretMessage(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  if (!showContent) {
    return (
      <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <MatrixLoader mode={'greek'} />
          <br />
          <br />
          <Grid>
            <Card title="[ SYSTEM INITIALIZATION ]" mode="center">
              <Row>LOADING MARTIAN ENGINEERING SYSTEMS...</Row>
              <br />
              <BarLoader progress={loadingProgress} />
              <br />
              <Row style={{ fontSize: '0.8em', opacity: 0.7 }}>
                {loadingProgress < 25 && '▸ Bootstrapping quantum flux capacitors...'}
                {loadingProgress >= 25 && loadingProgress < 50 && '▸ Calibrating neural network matrices...'}
                {loadingProgress >= 50 && loadingProgress < 75 && '▸ Syncing distributed consciousness nodes...'}
                {loadingProgress >= 75 && loadingProgress < 100 && '▸ Establishing interplanetary comms link...'}
                {loadingProgress >= 100 && '✓ INITIALIZATION COMPLETE'}
              </Row>
            </Card>
          </Grid>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <Navigation 
        logo={
          <HoverComponentTrigger
            mode="popover"
            component={
              <div style={{ padding: '1rem', background: 'var(--theme-background)', border: '1px solid var(--theme-border)' }}>
                <BlockLoader mode={8} />
                <span> CLASSIFIED: LEVEL 7 CLEARANCE REQUIRED</span>
                <br />
                <br />
                <Text style={{ fontSize: '0.8em' }}>
                  Founded: Stardate 2024.001<br />
                  Status: OPERATIONAL<br />
                  Threat Level: MINIMAL<br />
                  Success Rate: 99.97%
                </Text>
              </div>
            }
          >
            <span style={{ cursor: 'pointer' }}>🚀 MARTIAN ENGINEERING</span>
          </HoverComponentTrigger>
        }
        logoHref="/"
        center={
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ActionButton hotkey="⌘K" onClick={() => alert('Search coming soon...')}>Search</ActionButton>
            <ActionButton hotkey="ESC" onClick={() => window.location.href = 'https://xkcd.com/353/'}>Panic</ActionButton>
          </div>
        }
        right={
          <a href="mailto:team@martian.engineering">
            <Button theme="SECONDARY">
              <BlockLoader mode={4} /> Contact
            </Button>
          </a>
        }
      />
      
      <br />
      
      {showSecretMessage && (
        <>
          <Grid>
            <Card title="🎮 SECRET UNLOCKED 🎮" mode="center">
              <MatrixLoader direction={'left-to-right'} />
              <br />
              <Text>You've discovered the secret Martian protocol!</Text>
              <Text>The red planet sends its regards...</Text>
            </Card>
          </Grid>
          <br />
        </>
      )}

      <Grid>
        <Card title="[ TERMINAL ]" mode="center">
          <TextArea 
            value={missionStatement}
            autoPlay={true}
            autoPlaySpeedMS={30}
            style={{ 
              background: 'transparent', 
              border: 'none',
              color: 'var(--theme-text)',
              minHeight: '320px',
              fontFamily: 'var(--font-family-mono)',
              resize: 'none'
            }}
            readOnly
          />
        </Card>
      </Grid>

      <DebugGrid />

      <Divider type="GRADIENT" />

      <Grid>
        <Accordion
          title={
            <span>
              <BlockLoader mode={1} /> DECRYPT: CLASSIFIED INFORMATION
            </span>
          }
          defaultValue={true}
        >
          <Card title="◢ ABOUT: MISSION PARAMETERS ◣">
            <div style={{ position: 'relative' }}>
              <BlockLoader mode={7} />
              <span style={{ marginLeft: '1rem' }}>ACCESSING SECURE DATABASE...</span>
            </div>
            <br />
            <Divider />
            <br />
            We are a team of senior engineers who solve complex technical problems across diverse domains. 
            Our expertise spans data engineering, network protocols, distributed systems, embedded systems, and security. 
            We combine deep technical knowledge with sophisticated AI development workflows to deliver robust, 
            production-ready solutions with exceptional thoroughness and quality.
            <br />
            <br />
            <HoverComponentTrigger
              mode="tooltip"
              component={<span>Initiate first contact protocol</span>}
            >
              <a href="mailto:clients@martian.engineering">
                <Button>⟨ ESTABLISH CONTACT ⟩</Button>
              </a>
            </HoverComponentTrigger>
          </Card>
        </Accordion>
      </Grid>

      <Grid>
        <Card title="🛸 ACTIVE OPERATIONS" mode="center">
          <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <BlockLoader mode={9} />
            <span> LIVE MISSION FEED - REFRESH RATE: 60Hz</span>
          </div>
          
          <Accordion 
            title="▸ OPERATION: NEURAL LINK [STATUS: ACTIVE]"
            onClick={() => setActiveOperation('neural')}
          >
            <Text>Custom MCP (Model Context Protocol) host with enterprise scaling</Text>
            <BarLoader progress={87} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>⚡ Neural pathways synchronized at 87% efficiency</Text>
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>⚡ Processing 1.2M tokens/second</Text>
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>⚡ Zero downtime since deployment</Text>
          </Accordion>
          <br />
          
          <Accordion 
            title="▸ OPERATION: DATA SINGULARITY [STATUS: ACTIVE]"
            onClick={() => setActiveOperation('data')}
          >
            <Text>Large-scale data ingestion pipeline and embeddings generation</Text>
            <BarLoader progress={92} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>📊 Processing 1.2TB/hour across 47 nodes</Text>
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>📊 Vector dimensions optimized to 1536D</Text>
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>📊 99.97% accuracy on similarity search</Text>
          </Accordion>
          <br />
          
          <Accordion 
            title="▸ OPERATION: MESH PROTOCOL [STATUS: TESTING]"
            onClick={() => setActiveOperation('mesh')}
          >
            <Text>Peer-to-peer network protocol design with economic incentives</Text>
            <BarLoader progress={78} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>🌐 Consensus achieved across 47 planetary nodes</Text>
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>🌐 Latency: <10ms Earth-Mars roundtrip</Text>
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>🌐 Byzantine fault tolerance: ACHIEVED</Text>
          </Accordion>
          <br />
          
          <Accordion 
            title="▸ OPERATION: CODE GUARDIAN [STATUS: DEPLOYED]"
            onClick={() => setActiveOperation('guardian')}
          >
            <Text>Automated code review systems with AI-powered analysis</Text>
            <BarLoader progress={100} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>✅ FULLY OPERATIONAL - 0 bugs escaped to production</Text>
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>✅ 10,000+ pull requests analyzed</Text>
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>✅ 99.9% developer satisfaction rate</Text>
          </Accordion>
          
          <br />
          <br />
          <Divider />
          <br />
          
          We also help established engineering teams adopt AI development practices responsibly. We've trained teams 
          at major tech companies on integrating AI tools effectively while maintaining security practices and 
          compliance requirements—knowledge gained from years of building our own disciplined, production-ready workflows.
        </Card>
      </Grid>

      <Divider type="DOUBLE" />

      <Grid>
        <Card title="⚠️ RECRUITMENT PROTOCOL ACTIVE ⚠️" mode="center">
          <div style={{ background: 'var(--theme-border-subdued)', padding: '1rem', marginBottom: '1rem' }}>
            <BlockLoader mode={10} />
            <span> SCANNING FOR ELITE ENGINEERS...</span>
          </div>
          
          We're looking for engineers who get things done, love to learn, and want to use the best tools available to build high-quality software across diverse industries and tech stacks. If you're excited about joining a fast-paced environment and becoming top-notch at leveraging AI to build real software, we'd love to hear from you.
          <br />
          <br />
          
          <HoverComponentTrigger
            mode="popover"
            component={
              <div style={{ padding: '1rem' }}>
                <Text>Required Skills:</Text>
                <Text>▪ Problem solving: EXPERT</Text>
                <Text>▪ Learning velocity: EXTREME</Text>
                <Text>▪ Coffee consumption: YES</Text>
                <Text>▪ Sense of humor: MANDATORY</Text>
              </div>
            }
          >
            <a href="mailto:jobs@martian.engineering">
              <Button theme="PRIMARY">
                <BlockLoader mode={3} /> TRANSMIT RESUME
              </Button>
            </a>
          </HoverComponentTrigger>
        </Card>
      </Grid>

      <Grid>
        <Card title="🎖️ COMMAND STRUCTURE" mode="center">
          <Accordion title="⟨ COMMANDER ⟩ TED BLACKMAN" defaultValue={true}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <Badge>CLEARANCE: OMEGA</Badge>
                <br /><br />
                Ted has deep expertise in managing technical projects, including a dozen-person team developing an operating system and network protocol, as Chief Technical Officer of the Urbit Foundation. Previous experience includes robotics, distributed systems, data engineering, full-stack web development, and embedded systems. He was a YC founder in 2011, and holds a degree in physics from MIT.
                <br /><br />
                <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>
                  ▸ Specialty: System Architecture<br />
                  ▸ Threat Level: MINIMAL<br />
                  ▸ Status: OPERATIONAL
                </Text>
              </div>
            </div>
          </Accordion>
          <br />
          
          <Accordion title="⟨ COMMANDER ⟩ JOSH LEHMAN">
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <Badge>CLEARANCE: OMEGA</Badge>
                <br /><br />
                Josh has been leading software organizations for over a decade. He has a knack for organizing teams of developers. Most recently he was the Executive Director of the Urbit Foundation, where he worked closely with Theodore on Urbit's most ambitious core development projects. Previously Josh was the CTO and cofounder of Starcity (YC S16, acquired by Common in 2021).
                <br /><br />
                <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>
                  ▸ Specialty: Strategic Operations<br />
                  ▸ Threat Level: MINIMAL<br />
                  ▸ Status: OPERATIONAL
                </Text>
              </div>
            </div>
          </Accordion>
        </Card>
      </Grid>

      <Grid>
        <Card title="🌌 SPECIALIST ROSTER" mode="center">
          <div style={{ marginBottom: '2rem' }}>
            <BlockLoader mode={6} />
            <span> ACCESSING PERSONNEL DATABASE...</span>
          </div>

          <Accordion title="⟨ CRYPTOGRAPHER ⟩ LUKE CHAMPINE">
            <div style={{ marginBottom: '1rem' }}>
              <Badge>network protocols</Badge> <Badge>cryptography</Badge> <Badge>CLEARANCE: DELTA</Badge>
            </div>
            Luke is a 3rd-generation programmer specializing in cryptography, networking protocols, and performance optimization. Since dropping out of college to co-found Sia, a leading cloud storage cryptocurrency, he has worked across all layers of the stack, from ASIC mining firmware to JavaScript frontends; TCP multiplexing to distributed consensus; vectorized assembly to novel Merkle tree research, and more. He treats programming as an end in itself, and outside of work he enjoys tinkering with a new language designed for competitive programming.
            <br /><br />
            <BarLoader progress={95} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>Combat Readiness: 95%</Text>
          </Accordion>
          <br />

          <Accordion title="⟨ SECURITY SPECIALIST ⟩ RIKARD HJORT">
            <div style={{ marginBottom: '1rem' }}>
              <Badge>DeFi</Badge> <Badge>blockchain</Badge> <Badge>security</Badge> <Badge>CLEARANCE: GAMMA</Badge>
            </div>
            Rikard is a security auditor and DeFi developer who's has spent the last five years securing a variety of protocols with billions of dollars worth of assets under management and led various auditing teams with a dozen employees. He previously worked on formal verification based audits and tools at Runtime Verification, Inc. and as a lead security researcher for Spearbit, one of the leading cryptocurrency and DeFi auditing organizations. He holds a M.S. in Computer Science from Chalmers University of Engineering, Sweden.
            <br /><br />
            <BarLoader progress={98} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>Threat Detection: MAXIMUM</Text>
          </Accordion>
          <br />

          <Accordion title="⟨ DATA ARCHITECT ⟩ PHIL GALEBACH">
            <div style={{ marginBottom: '1rem' }}>
              <Badge>data engineering</Badge> <Badge>full-stack</Badge> <Badge>AI optimization</Badge> <Badge>CLEARANCE: BETA</Badge>
            </div>
            Phil is a data-focused technologist with a career spanning statistician, senior data engineer, business intelligence manager, digital health COO, and AI optimization specialist. Phil has a particular passion for entrepreneurial work, founding his first business while at Harvard.
            <br />
            <br />
            Since diving headfirst into LLMs, he has worked extensively across the AI stack: from agents and RAG systems to MCPs and workflow automation; database optimizations to full-stack development; healthcare IT systems to digital marketing platforms. His recent focus centers on redesigning our relationship with computers through AI-powered business optimizations. He's worked extensively with heavily regulated enterprises, startups and the USG.
            <br /><br />
            <BarLoader progress={91} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>Neural Network Sync: 91%</Text>
          </Accordion>
          <br />

          <Accordion title="⟨ PROTOCOL ENGINEER ⟩ LIAM FITZGERALD">
            <div style={{ marginBottom: '1rem' }}>
              <Badge>network protocols</Badge> <Badge>application development</Badge> <Badge>CLEARANCE: BETA</Badge>
            </div>
            Liam's experience includes networking protocols, decentralized applications and developer tooling. His most recent project was an experimental application layer for Urbit that unified build systems, smart contracts and user facing applications, which involved subprojects spanning systems, frontend and application programming. His previous projects include Tlon's secure decentralized messenger, which is the largest application on the Urbit platform, as well as working on the Urbit kernel in various capacities. He studied Biomedical Engineering and Mathematics at the University of Queensland before dropping out.
            <br /><br />
            <BarLoader progress={89} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>Protocol Efficiency: 89%</Text>
          </Accordion>
          <br />

          <Accordion title="⟨ SYSTEMS ENGINEER ⟩ ~MOPFEL-WINRUX">
            <div style={{ marginBottom: '1rem' }}>
              <Badge>embedded systems</Badge> <Badge>machine learning</Badge> <Badge>CLEARANCE: CLASSIFIED</Badge>
            </div>
            ~mopfel-winrux's previous experience includes processor development and positions at NASA and Lockheed Martin Research & Development. He holds a Ph.D. in Electrical Engineering from Georgia Tech.
            <br /><br />
            <BarLoader progress={94} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>System Integration: OPTIMAL</Text>
          </Accordion>
          <br />

          <Accordion title="⟨ ML SPECIALIST ⟩ BRIAN BULAG">
            <div style={{ marginBottom: '1rem' }}>
              <Badge>machine learning</Badge> <Badge>data science</Badge> <Badge>CLEARANCE: ALPHA</Badge>
            </div>
            Brian's experience includes computational biology research and machine learning, particularly with kernel methods on social science data within The Institute for Quantitative Social Science at Harvard. He holds degrees in Biology and Philosophy from Stony Brook University, and is an avid Category Theory enthusiast.
            <br /><br />
            <BarLoader progress={88} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>Model Accuracy: 88%</Text>
          </Accordion>
          <br />

          <Accordion title="⟨ MEMORY SPECIALIST ⟩ ~BARTER-SIMSUM">
            <div style={{ marginBottom: '1rem' }}>
              <Badge>operating systems</Badge> <Badge>memory management</Badge> <Badge>CLEARANCE: CLASSIFIED</Badge>
            </div>
            ~barter-simsum's previous experience includes implementing a novel fault-tolerant persistent memory allocator for Urbit, where he also used pointer compression to expand the addressable memory in a 32-bit language interpreter. Before Urbit, ~barter-simsum worked at Microsoft on optimizing storage drivers in the Windows kernel. ~barter-simsum holds a B.S. in Computer Science from Miami University.
            <br /><br />
            <BarLoader progress={96} />
            <Text style={{ fontSize: '0.8em', opacity: 0.7 }}>Memory Optimization: 96%</Text>
          </Accordion>
        </Card>
      </Grid>

      <Divider type="GRADIENT" />

      <Grid>
        <Row>
          <HoverComponentTrigger
            mode="tooltip"
            component={<span>Access our open source repositories</span>}
          >
            <a href="https://github.com/martian-engineering" target="_blank">
              <Button theme="SECONDARY">
                <BlockLoader mode={5} /> GitHub
              </Button>
            </a>
          </HoverComponentTrigger>
        </Row>
        <Row>
          <span style={{ opacity: 0.7 }}>© 2025 Martian Engineering, LLC | </span>
          <span style={{ fontSize: '0.8em', opacity: 0.5 }}>Try the Konami Code ↑↑↓↓←→←→BA</span>
        </Row>
      </Grid>
    </DefaultLayout>
  );
}