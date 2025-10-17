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
import pageStyles from '@/app/page.module.scss';
import styles from './ClientsSection.module.scss';
import DropdownMenuTrigger from '@/components/DropdownMenuTrigger';
import { usePathname, useRouter } from 'next/navigation';

interface ClientsSectionProps {
  clients: ClientData[];
  initialClientId?: string;
}

export default function ClientsSection({ clients, initialClientId }: ClientsSectionProps) {
  const router = useRouter();
  const pathname = usePathname();

  const clientsById = React.useMemo(() => {
    const map = new Map<string, ClientData>();
    clients.forEach((client) => {
      map.set(client.id, client);
    });
    return map;
  }, [clients]);

  const resolveClientId = React.useCallback(
    (requestedClientId: string | null | undefined) => {
      if (requestedClientId && clientsById.has(requestedClientId)) {
        return requestedClientId;
      }
      return clients.length > 0 ? clients[0].id : null;
    },
    [clients, clientsById]
  );

  const [selectedClient, setSelectedClient] = React.useState<string | null>(() =>
    resolveClientId(initialClientId)
  );
  const [isMobile, setIsMobile] = React.useState(false);

  const selectedClientData = selectedClient ? clientsById.get(selectedClient) ?? null : null;

  React.useEffect(() => {
    const nextSelectedClient = resolveClientId(initialClientId);
    if (nextSelectedClient !== selectedClient) {
      setSelectedClient(nextSelectedClient);
    }
  }, [initialClientId, resolveClientId, selectedClient]);

  const handleSelectClient = React.useCallback(
    (clientId: string) => {
      if (!clientsById.has(clientId)) {
        return;
      }

      const targetPath = `/work/${clientId}`;

      if (selectedClient !== clientId) {
        setSelectedClient(clientId);
      }

      if (pathname !== targetPath) {
        router.push(targetPath);
      }
    },
    [clientsById, pathname, router, selectedClient]
  );

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1064);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div id="clients-section" className={pageStyles.gridContainer} style={{ marginTop: '6rem' }}>
      <div style={{ width: isMobile ? '100%' : '140%'}}>
        <Grid>
          <CardDouble title="OUR WORK & CLIENTS" mode="left">
            {isMobile ? (
              // Mobile view with dropdown
              <div className={styles.mobileContainer}>
                <DropdownMenuTrigger
                  items={clients.map((client) => ({
                    icon: '✦',
                    children: client.short_name,
                    onClick: () => handleSelectClient(client.id)
                  }))}
                >
                  <div style={{ width: '100%' }}>
                    <ActionListItem
                      icon="▾"
                      style={{ width: '100%', cursor: 'pointer' }}
                    >
                      {selectedClientData ? selectedClientData.short_name : 'Select Client'}
                    </ActionListItem>
                  </div>
                </DropdownMenuTrigger>
                {selectedClientData && (() => {
                  const client = selectedClientData;

                  return (
                    <Card style={{ marginTop: '1rem' }}>
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
                      <div dangerouslySetInnerHTML={{ __html: client.htmlContent }} />
                      
                      {/* Engagement Duration */}
                      <Row>
                        <Badge>ENGAGEMENT LENGTH: {client.duration}</Badge>
                      </Row>
                      
                      {/* Resources Card - only show if resources exist */}
                      {client.resources && client.resources.length > 0 && (
                        <>
                          <br />
                          <Card title="LEARN MORE" mode="left">
                            <div>
                              {client.resources.map((resource, index) => {
                                // Handle both string URLs and object format
                                const url = typeof resource === 'string' ? resource : (resource as any).url;
                                let displayText = typeof resource === 'string' 
                                  ? resource 
                                  : (resource as any).title;
                                
                                // Extract domain name from URL if resource is a string
                                if (typeof resource === 'string') {
                                  try {
                                    const urlObj = new URL(resource);
                                    displayText = urlObj.hostname.replace('www.', '');
                                  } catch (e) {
                                    // Fallback to original URL if parsing fails
                                    displayText = resource;
                                  }
                                }
                                
                                return (
                                  <ActionListItem
                                    key={index}
                                    icon="↗"
                                    onClick={() => window.open(url, '_blank')}
                                    style={{
                                      cursor: 'pointer'
                                    }}
                                  >
                                    {displayText}
                                  </ActionListItem>
                                );
                              })}
                            </div>
                          </Card>
                        </>
                      )}

                      {/* Technologies Card */}
                      <Card title="TECHNOLOGIES USED" mode="left" style={{ marginTop: '1rem' }}>
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
              </div>
            ) : (
              // Desktop view with sidebar
              <SidebarLayout
                defaultSidebarWidth={25}
                sidebar={
                  <div>
                    {clients.map((client) => (
                      <ActionListItem 
                        key={client.id}
                        icon="✦"
                        href={`/work/${client.id}`}
                        onClick={(event) => {
                          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
                            return;
                          }

                          event.preventDefault();
                          handleSelectClient(client.id);
                        }}
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
              {selectedClientData && (() => {
                const client = selectedClientData;

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
                    <div dangerouslySetInnerHTML={{ __html: client.htmlContent }} />
                    
                    {/* Engagement Duration */}
                    <Row>
                      <Badge>ENGAGEMENT LENGTH: {client.duration}</Badge>
                    </Row>
                    
                    {/* Resources Card - only show if resources exist */}
                    {client.resources && client.resources.length > 0 && (
                      <>
                        <br />
                        <Card title="LEARN MORE" mode="left">
                          <div>
                            {client.resources.map((resource, index) => {
                              // Handle both string URLs and object format
                              const url = typeof resource === 'string' ? resource : resource.url;
                              let displayText = typeof resource === 'string' 
                                ? resource 
                                : resource.title;
                              
                              // Extract domain name from URL if resource is a string
                              if (typeof resource === 'string') {
                                try {
                                  const urlObj = new URL(resource);
                                  displayText = urlObj.hostname.replace('www.', '');
                                } catch (e) {
                                  // Fallback to original URL if parsing fails
                                  displayText = resource;
                                }
                              }
                              
                              return (
                                <ActionListItem
                                  key={index}
                                  icon="↗"
                                  onClick={() => window.open(url, '_blank')}
                                  style={{
                                    cursor: 'pointer'
                                  }}
                                >
                                  {displayText}
                                </ActionListItem>
                              );
                            })}
                          </div>
                        </Card>
                      </>
                    )}

                    {/* Technologies Card */}
                    <Card title="TECHNOLOGIES USED" mode="left" style={{ marginTop: '1rem' }}>
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
            )}
          </CardDouble>
        </Grid>
      </div>
    </div>
  );
}
