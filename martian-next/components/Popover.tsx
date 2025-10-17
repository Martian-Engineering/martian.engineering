import * as React from "react";

type PopoverProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Lightweight popover container that simply forwards refs and styling to a positioned div.
 */
const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(({ style, ...rest }, ref) => {
  return <div ref={ref} style={style} {...rest} />;
});

Popover.displayName = "Popover";

export default Popover;
