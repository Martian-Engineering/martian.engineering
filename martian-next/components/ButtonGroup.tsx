"use client";

import styles from "@/components/ButtonGroup.module.scss";

import * as React from "react";
import * as Utilities from "@/common/utilities";

import ActionButton from "@/components/ActionButton";

interface ButtonGroupItem {
  body: React.ReactNode;
  onClick?: () => void;
  hotkey?: React.ReactNode;
  openHotkey?: string;
  selected?: boolean;
  items?: unknown;
}

interface ButtonGroupProps {
  items: ButtonGroupItem[];
  isFull?: boolean;
}

/**
 * Renders a horizontal list of action buttons, optionally taking the full width of its container.
 */
const ButtonGroup: React.FC<ButtonGroupProps> = ({ items, isFull = false }) => {
  if (!items?.length) {
    return null;
  }

  return (
    <div
      className={Utilities.classNames(styles.root, isFull ? styles.full : null)}
    >
      {items.map((each, index) => {
        const key = typeof each.body === "string" ? each.body : String(index);
        return (
          <ActionButton
            key={key}
            onClick={each.onClick}
            hotkey={each.hotkey}
            isSelected={each.selected}
          >
            {each.body}
          </ActionButton>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
