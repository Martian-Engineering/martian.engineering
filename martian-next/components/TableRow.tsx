'use client';

import styles from '@/components/TableRow.module.scss';

import * as React from 'react';

type TableRowProps = React.ComponentPropsWithoutRef<"tr"> & {
  children?: React.ReactNode;
};

/**
 * Keyboard-focusable table row that mirrors native table semantics.
 */
const TableRow: React.FC<TableRowProps> = ({ children, ...rest }) => {
  return (
    <tr className={styles.root} tabIndex={0} {...rest}>
      {children}
    </tr>
  );
};

TableRow.displayName = 'TableRow';

export default TableRow;
