'use client';

import * as React from 'react';
import Card from '@/components/Card';
import CardDouble from '@/components/CardDouble';
import Row from '@/components/Row';
import Badge from '@/components/Badge';
import Divider from '@/components/Divider';
import ActionListItem from '@/components/ActionListItem';
import SidebarLayout from '@/components/SidebarLayout';
import Grid from '@/components/Grid';
import { ClientData } from '@/common/markdown';
import styles from '@/app/page.module.scss';

interface ClientsSectionProps {
  clients: ClientData[];
}

export default function ClientsSection({ clients }: ClientsSectionProps) {
  const [selectedClient, setSelectedClient] = React.useState<string | null>(
    clients.length > 0 ? clients[0].id : null
  );

  return (
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
                      {client.short_name}
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
                          alt={client.full_name}
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
                    <div 
                      style={{ 
                        lineHeight: '1.6',
                        marginBottom: '2rem'
                      }}
                      dangerouslySetInnerHTML={{ __html: client.htmlContent }}
                    />
                    
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
  );
}