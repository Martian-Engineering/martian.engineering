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
import MarsMatrixLoader from '@/components/MarsMatrixLoader';
import BlockLoader from '@/components/BlockLoader';
import Divider from '@/components/Divider';
import HoverComponentTrigger from '@/components/HoverComponentTrigger';

// export const dynamic = 'force-static';

export default function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <Navigation 
        logo="MARTIAN ENGINEERING" 
        logoHref="/"
        right={
          <a href="mailto:team@martian.engineering">
            <Button theme="SECONDARY">Contact</Button>
          </a>
        }
      />
      
      <br />
      
      <Grid>
        <Card>
          <MarsMatrixLoader />
        </Card>
      </Grid>
      
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

      <Grid>
        <Card title="WE'RE HIRING">
          We're looking for engineers who get things done, love to learn, and want to use the best tools available to build high-quality software across diverse industries and tech stacks. If you're excited about joining a fast-paced environment and becoming top-notch at leveraging AI to build real software, we'd love to hear from you.
          <br />
          <br />
          <a href="mailto:jobs@martian.engineering">
            <Button>Send us your resume</Button>
          </a>
        </Card>
      </Grid>

      <Grid>
        <Card title="PRINCIPALS">
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
      </Grid>
    </DefaultLayout>
  );
}