import styles from '@/components/DropdownMenu.module.scss';

import * as React from 'react';

import ActionListItem from '@/components/ActionListItem';

import { useHotkeys } from '@/hooks/useHotkeys';

interface DropdownMenuItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  modal?: any;
  modalProps?: Record<string, unknown>;
}

interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: (event?: MouseEvent | TouchEvent | KeyboardEvent) => void;
  items?: DropdownMenuItemProps[];
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>((props, ref) => {
  const { onClose, items, style, ...rest } = props;

  const handleHotkey = () => {
    if (onClose) onClose();
  };

  useHotkeys('space', handleHotkey);

  return (
    <div ref={ref} className={styles.root} style={style} {...rest}>
      {items &&
        items.map((each, index) => {

          return (
            <ActionListItem
              key={`action-items-${index}`}
              icon={each.icon}
              href={each.href}
              target={each.target}
              onClick={() => {
                if (each.onClick) {
                  each.onClick();
                }

                if (onClose) {
                  onClose();
                }
              }}
            >
              {each.children}
            </ActionListItem>
          );
        })}

    </div>
  );
});

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
