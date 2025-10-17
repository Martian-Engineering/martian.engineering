import styles from "./page.module.scss";

import DefaultLayout from "@/components/page/DefaultLayout";
import DefaultActionBar from "@/components/page/DefaultActionBar";
import Text from "@/components/Text";
import Grid from "@/components/Grid";
import Row from "@/components/Row";
import Badge from "@/components/Badge";
import MarsMatrixLoader from "@/components/MarsMatrixLoader";
import Avatar from "@/components/Avatar";
import Indent from "@/components/Indent";
import NavigationActions from "@/components/NavigationActions";
import TeamActions from "@/components/TeamActions";
import ClientLogos from "@/components/ClientLogos";
import ActionListItem from "@/components/ActionListItem";
import Card from "@/components/Card";
import CardDouble from "@/components/CardDouble";
import Block from "@/components/Block";
import ListItem from "@/components/ListItem";

// export const dynamic = 'force-static';

export default async function Page() {
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
              <span style={{ color: "var(--theme-text)" }}>
                MARTIAN ENGINEERING
              </span>{" "}
              <Badge>Hard problems, modern solutions</Badge>
            </Row>
            <br />
            <Row>
              <Text>
                We are a <b>USA-based team</b> of{" "}
                <u>senior software engineers</u>.
              </Text>
            </Row>
            <Row style={{ marginTop: "1rem" }}>
              <NavigationActions />
            </Row>
            <Row style={{ marginTop: "1rem" }}>
              <Text>Our expertise spans diverse domains:</Text>
            </Row>
            <Row style={{ marginTop: "1rem" }}>
              <ul>
                <ListItem>Model Context Protocol</ListItem>
                <ListItem>Data engineering</ListItem>
                <ListItem>Network protocols</ListItem>
                <ListItem>Infrastructure</ListItem>
                <ListItem>Distributed systems</ListItem>
                {/* <ListItem>Cryptography</ListItem> */}
              </ul>
            </Row>
            <Row style={{ marginTop: "1rem" }}>
              <Text>
                We combine deep technical knowledge and hard-won experience with
                sophisticated AI development workflows to deliver robust,
                production-ready solutions with exceptional thoroughness,
                quality and speed.
              </Text>
            </Row>
          </Grid>
        </div>

        <div className={styles.rightColumn}>
          <div style={{ width: "300px", height: "300px" }}>
            <MarsMatrixLoader direction="left-to-right" rows={15} />
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className={styles.gridContainer} style={{ marginTop: "4rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <CardDouble title="OUR CLIENTS" mode="left">
              <ClientLogos />
              <div style={{ marginTop: "2rem" }}>
                <Card title="TESTIMONIALS" mode="left">
                  <div className={styles.testimonialShell}>
                    <Avatar
                      src="/headshots/andrew-arkhipov.jpg"
                      style={{ width: "12ch", height: "12ch" }}
                    />
                    <div className={styles.testimonialCopy}>
                      <div className={styles.testimonialMeta}>
                        <Block
                          className={styles.testimonialBlock}
                          aria-hidden="true"
                        />
                        <div>
                          <div className={styles.testimonialName}>
                            Andrew Arkhipov
                          </div>
                          <div className={styles.testimonialRole}>
                            Cofounder · Sweetspot
                          </div>
                        </div>
                      </div>
                      <Text className={styles.testimonialQuote}>
                        &ldquo;Josh Lehman and his team have been incredible for
                        us, probably the best you could ever get when it comes
                        to hiring engineering contractors. We&apos;re happy
                        clients of theirs and will continue to be for any
                        contracting work we need done.&rdquo;
                      </Text>
                    </div>
                  </div>
                </Card>

                <Text style={{ marginTop: "2rem" }}>
                  We work with early-stage startups, established organizations
                  and everything in between.{" "}
                </Text>
                <ActionListItem
                  icon={`⭢`}
                  href="/work"
                  style={{ marginTop: "1rem" }}
                >
                  Learn more about our work
                </ActionListItem>
              </div>
            </CardDouble>
          </Grid>
        </div>
        <div className={styles.rightColumn}></div>
      </div>

      {/*<div className={styles.gridContainer} style={{ marginTop: "2rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <CardDouble title="TESTIMONIALS" mode="left">
              <div className={styles.testimonialShell}>
                <Avatar
                  src="/headshots/andrew-arkhipov.jpg"
                  style={{ width: "12ch", height: "12ch" }}
                />
                <div className={styles.testimonialCopy}>
                  <div className={styles.testimonialMeta}>
                    <Block
                      className={styles.testimonialBlock}
                      aria-hidden="true"
                    />
                    <div>
                      <div className={styles.testimonialName}>
                        Andrew Arkhipov
                      </div>
                      <div className={styles.testimonialRole}>
                        Cofounder · Sweetspot
                      </div>
                    </div>
                  </div>
                  <Text className={styles.testimonialQuote}>
                    &ldquo;Josh Lehman and his team have been incredible for us,
                    probably the best you could ever get when it comes to hiring
                    engineering contractors. We&apos;re happy clients of theirs
                    and will continue to be for any contracting work we need
                    done.&rdquo;
                  </Text>
                </div>
              </div>
            </CardDouble>
          </Grid>
        </div>
        <div className={styles.rightColumn}></div>
      </div>*/}

      {/* Why work with Martian Engineering */}
      <div className={styles.gridContainer} style={{ marginTop: "2rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <Row>
              <span className={styles.whyAccent}>WHY MARTIAN</span>
            </Row>
            <br />
            <Row>
              <Text>
                <strong>Why work with Martian Engineering?</strong>{" "}
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
              <ActionListItem icon={`⭢`} href="/hire">
                Hire us
              </ActionListItem>
            </Row>
          </Grid>
        </div>
        <div className={styles.rightColumn}>{/* Empty right column */}</div>
      </div>

      {/* Team Section */}
      <div className={styles.gridContainer} style={{ marginTop: "2rem" }}>
        <div className={styles.leftColumn}>
          <Grid>
            <CardDouble title="TEAM" mode="left">
              <Avatar
                src="/headshots/ted.jpg"
                style={{
                  width: "8ch",
                  height:
                    "calc(var(--font-size) * var(--theme-line-height-base) * 4)",
                }}
              >
                <Indent>
                  <strong>TED BLACKMAN</strong>
                  <br />
                  Ted has deep expertise in managing technical projects,
                  including a dozen-person team developing an operating system
                  and network protocol, as Chief Technical Officer of the Urbit
                  Foundation. Previous experience includes robotics, distributed
                  systems, data engineering, full-stack web development, and
                  embedded systems. He was a YC founder in 2011, and holds a
                  degree in physics from MIT.
                </Indent>
              </Avatar>
              <br />
              <Avatar
                src="/headshots/josh-1.jpg"
                style={{
                  width: "8ch",
                  height:
                    "calc(var(--font-size) * var(--theme-line-height-base) * 4)",
                }}
              >
                <Indent>
                  <strong>JOSH LEHMAN</strong>
                  <br />
                  Josh has been leading software organizations for over a
                  decade. He has a knack for organizing teams of developers.
                  Most recently he was the Executive Director of the Urbit
                  Foundation, where he worked closely with Theodore on
                  Urbit&apos;s most ambitious core development projects.
                  Previously Josh was the CTO and cofounder of Starcity (YC S16,
                  acquired by Common in 2021).
                </Indent>
              </Avatar>
              <br />

              <div style={{ marginTop: "1rem" }}>
                <TeamActions />
              </div>
            </CardDouble>
          </Grid>
        </div>

        <div className={styles.rightColumn}>
          {/* Empty right column as requested */}
        </div>
      </div>

      <Grid style={{ marginTop: "4rem" }}>
        <Row>© 2025 Martian Engineering, LLC</Row>
      </Grid>
    </DefaultLayout>
  );
}
