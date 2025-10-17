"use client";

import styles from "../page.module.scss";
import * as React from "react";

import DefaultLayout from "@/components/page/DefaultLayout";
import DefaultActionBar from "@/components/page/DefaultActionBar";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import CardDouble from "@/components/CardDouble";
import Row from "@/components/Row";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import ActionListItem from "@/components/ActionListItem";
import Footer from "@/components/Footer";

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
            <Row style={{ marginTop: "1.5rem" }}>
              <ActionListItem
                icon={`⭢`}
                href="mailto:clients@martian.engineering"
              >
                Start a project with us
              </ActionListItem>
            </Row>
          </Grid>
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      {/* What We Offer */}
      <div className={styles.gridContainer} style={{ marginTop: "4rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <CardDouble title="WHAT WE OFFER" mode="left">
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
            </CardDouble>
          </Grid>
        </div>
        <div className={styles.rightColumn}></div>
      </div>

      {/* Engagement Models */}
      <div className={styles.gridContainer} style={{ marginTop: "2rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Row>
              <span className={styles.whyAccent}>ENGAGEMENT MODELS</span>
            </Row>
            <br />
            <Row>
              <Badge>PROJECT-BASED</Badge>
            </Row>
            <Row style={{ marginTop: "0.5rem" }}>
              Fixed-scope engagements with clear deliverables
            </Row>
            <br />
            <Row>
              <Badge>TEAM AUGMENTATION</Badge>
            </Row>
            <Row style={{ marginTop: "0.5rem" }}>
              Embedded engineers working alongside your team
            </Row>
            <br />
            <Row>
              <Badge>STRATEGIC CONSULTING</Badge>
            </Row>
            <Row style={{ marginTop: "0.5rem" }}>
              Technical advisory and architecture reviews
            </Row>
          </Grid>
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      {/* Recent Projects */}
      <div className={styles.gridContainer} style={{ marginTop: "2rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Row>
              <span className={styles.whyAccent}>RECENT PROJECTS</span>
            </Row>
            <br />
            <ActionListItem icon={`⊹`} href="/work/near-por">
              Proof of Response network protocol implementation
            </ActionListItem>
            <ActionListItem icon={`⊹`} href="/work/sweetspot-mcp">
              MCP as infrastructure for enterprise agents
            </ActionListItem>
            <ActionListItem icon={`⊹`} href="/work/sweetspot-usaspending">
              USASpending data pipeline for agentic research
            </ActionListItem>
            <ActionListItem icon={`⊹`} href="/work/tlon">
              Zenith + Janus integration for the Urbit ecosystem
            </ActionListItem>
            <ActionListItem icon={`⊹`} href="/work/extend">
              PgBouncer rollout and observability improvements
            </ActionListItem>
          </Grid>
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      {/* Contact CTA */}
      <div className={styles.gridContainer} style={{ marginTop: "4rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Card title="START A CONVERSATION" mode="left">
              Tell us about your technical challenges and let&apos;s explore how
              we can help.
              <br />
              <br />
              <br />
              <br />
              <a href="mailto:clients@martian.engineering">
                <Button>Contact Us</Button>
              </a>
            </Card>
          </Grid>
        </div>
        <div className={styles.rightColumn}>
          <Grid>
            <Card title="WE'RE HIRING" mode="left">
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
      </div>

      <Footer />
    </DefaultLayout>
  );
}
