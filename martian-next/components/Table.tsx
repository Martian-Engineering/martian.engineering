'use client';

import styles from '@/components/Table.module.scss';

import * as React from 'react';

type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  children?: React.ReactNode;
};

/**
 * Simple table wrapper that applies shared styles and ensures children live inside tbody.
 */
const Table: React.FC<TableProps> = ({ children, ...rest }) => {
  return (
    <table className={styles.root} {...rest}>
      <tbody className={styles.body}>{children}</tbody>
    </table>
  );
};

Table.displayName = 'Table';

export default Table;
