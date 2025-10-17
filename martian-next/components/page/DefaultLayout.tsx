import styles from '@/components/page/DefaultLayout.module.scss';

import * as React from 'react';
import Image from 'next/image';

interface DefaultLayoutProps {
  previewPixelSRC: string;
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ previewPixelSRC, children }) => {
  return (
    <div className={styles.body}>
      <Image className={styles.pixel} src={previewPixelSRC} alt="" width={1} height={1} />
      {children}
    </div>
  );
};

export default DefaultLayout;
