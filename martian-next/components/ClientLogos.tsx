import styles from '@/components/ClientLogos.module.scss';
import * as React from 'react';
import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
  url: string;
  needsInvert?: boolean;
}

const clients: Client[] = [
  {
    name: 'NEAR Foundation',
    logo: '/client-logos/near-foundation-white.svg',
    url: 'https://near.foundation/'
  },
  {
    name: 'Sweetspot',
    logo: '/client-logos/sweetspot.svg',
    url: 'https://sweetspot.so'
  },
  {
    name: 'Tlon',
    logo: '/client-logos/tlon.svg',
    url: 'https://tlon.io',
    needsInvert: true
  },
  {
    name: 'Extend',
    logo: '/client-logos/extend.svg',
    url: 'https://www.extend.ai/',
    needsInvert: true
  },
  {
    name: 'supplyco',
    logo: '/client-logos/supplyco-logo.svg',
    url: 'https://www.supplyco.ai/'
  }
];

const ClientLogos: React.FC = () => {
  // Duplicate the clients array to create seamless loop
  const duplicatedClients = [...clients, ...clients];
  
  return (
    <div className={styles.container}>
      <div className={styles.marquee}>
        <div className={styles.logos}>
          {duplicatedClients.map((client, index) => (
            <a
              key={`${client.name}-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              aria-label={`Visit ${client.name}`}
            >
              <div className={`${styles.logoWrapper} ${client.needsInvert ? styles.needsInvert : ''}`}>
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={250}
                  height={100}
                  className={styles.logo}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;