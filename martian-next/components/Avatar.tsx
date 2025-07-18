import styles from '@/components/Avatar.module.scss';
import * as React from 'react';

interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  src?: string;
  href?: string;
  target?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

function classNames(...args: any[]): string {
  let classes: string[] = [];

  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i];
    if (!arg) continue;

    let argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    }
  }

  return classes.join(' ');
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, style: propStyle, href, target, children, ...rest } = props;

  const backgroundStyle = src ? { backgroundImage: `url(${src})` } : {};

  const combinedStyle = { ...propStyle, ...backgroundStyle };

  let avatarElement: React.ReactElement;

  if (href) {
    avatarElement = <a className={classNames(src ? styles.root : styles.placeholder)} style={combinedStyle} href={href} target={target} tabIndex={0} role="link" />;
  } else {
    avatarElement = <figure className={classNames(src ? styles.root : styles.placeholder)} style={combinedStyle} />;
  }

  if (!children) {
    return avatarElement;
  }

  return (
    <div className={styles.parent} {...rest}>
      {avatarElement}
      <span className={styles.right}>{children}</span>
    </div>
  );
};

export default Avatar;