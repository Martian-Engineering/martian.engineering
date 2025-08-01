import styles from '@/components/ClientLogos.module.scss';
import * as React from 'react';
import Image from 'next/image';
import clientsData from '@/data/clients.json';

interface Client {
  name: string;
  logo: string;
  url: string;
  needsInvert?: boolean;
  scale?: number;
}

const clients: Client[] = clientsData;

const ClientLogos: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {clients.map((client, index) => (
          <a
            key={`${client.name}-${index}`}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
            aria-label={`Visit ${client.name}`}
          >
            <div 
              className={styles.logoWrapper}
              style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
            >
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
  );
};

export default ClientLogos;