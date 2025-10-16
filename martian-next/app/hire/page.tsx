"use client";

import styles from "../page.module.scss";
import * as React from "react";

import DefaultLayout from "@/components/page/DefaultLayout";
import DefaultActionBar from "@/components/page/DefaultActionBar";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Row from "@/components/Row";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import ActionListItem from "@/components/ActionListItem";

export default function HirePage() {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DefaultActionBar />

      <br />
      <br />
      <br />

      {/* Hire Header */}
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          <Grid>
            <Row>
              <span className={styles.whyAccent}>HIRE US</span>
            </Row>
            <br />
            <Row>
              <Text>
                <span className={styles.whyAccent}>
                  We drop into large existing codebases with ease
                </span>{" "}
                and ship the production systems your team is counting on.
              </Text>
            </Row>
            <Row style={{ marginTop: "1rem" }}>
              <Text>
                Our breadth of experience lets us{" "}
                <span className={styles.whyAccent}>
                  learn unfamiliar stacks quickly
                </span>{" "}
                and contribute to large, complex codebases without slowing your
                team down.
              </Text>
            </Row>
            <Row style={{ marginTop: "1rem" }}>
              <Text>
                As founders and former CTOs, we{" "}
                <span className={styles.whyAccent}>
                  take ownership of outcomes
                </span>
                —you outline the objective and we drive it to completion.
              </Text>
            </Row>
            <Row style={{ marginTop: "1rem" }}>
              <Text>
                We pair distributed-systems instincts with AI-native workflows
                to{" "}
                <span className={styles.whyAccent}>
                  move fast while preserving the quality
                </span>{" "}
                required for mission-critical software.
              </Text>
            </Row>
          </Grid>
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      {/* What We Offer */}
      <div className={styles.gridContainer} style={{ marginTop: "4rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Card title="WHAT WE OFFER">
              <strong>Full-Stack Engineering Teams</strong>
              <br />
              From architecture to implementation, we deliver production-ready
              solutions.
              <br />
              <br />
              <strong>Technical Leadership</strong>
              <br />
              Experienced CTOs and architects to guide your technical strategy.
              <br />
              <br />
              <strong>AI Integration Expertise</strong>
              <br />
              Help your team adopt AI development workflows responsibly and
              effectively.
              <br />
              <br />
              <strong>Specialized Domain Knowledge</strong>
              <br />
              Deep expertise in distributed systems, network protocols,
              security, and infrastructure.
            </Card>
          </Grid>
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      {/* Recent Projects */}
      <div className={styles.gridContainer} style={{ marginTop: "2rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
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
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      {/* Engagement Models */}
      <div className={styles.gridContainer} style={{ marginTop: "2rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Card title="ENGAGEMENT MODELS">
              <Row>
                <Badge>PROJECT-BASED</Badge> Fixed-scope engagements with clear
                deliverables
              </Row>
              <br />
              <Row>
                <Badge>TEAM AUGMENTATION</Badge> Embedded engineers working
                alongside your team
              </Row>
              <br />
              <Row>
                <Badge>STRATEGIC CONSULTING</Badge> Technical advisory and
                architecture reviews
              </Row>
            </Card>
          </Grid>
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      {/* Contact CTA */}
      <div className={styles.gridContainer} style={{ marginTop: "4rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Card title="START A CONVERSATION">
              Tell us about your technical challenges and let's explore how we
              can help.
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
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      {/* We're Also Hiring */}
      <div className={styles.gridContainer} style={{ marginTop: "4rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Card title="WE'RE ALSO HIRING">
              Looking for engineers who get things done, love to learn, and want
              to use the best tools available to build high-quality software
              across diverse industries and tech stacks.
              <br />
              <br />
              <a href="mailto:jobs@martian.engineering">
                <Button theme="SECONDARY">Join Our Team</Button>
              </a>
            </Card>
          </Grid>
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      <div className={styles.gridContainer} style={{ marginTop: "4rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Row>© 2025 Martian Engineering, LLC</Row>
          </Grid>
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>
    </DefaultLayout>
  );
}
