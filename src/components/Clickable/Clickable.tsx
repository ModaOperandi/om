import React from 'react';
import classNames from 'classnames';
// Import just what we need - both v5 and v7 have Link and similar props
import { Link } from 'react-router-dom';

import './Clickable.scss';

type ButtonElProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorElProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Define minimal LinkProps that work with both v5 and v7
// Using Omit to remove conflicting HTML attributes, then add router-specific props
type RouterLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string | { pathname?: string; search?: string; hash?: string };
  replace?: boolean;
  innerRef?: React.Ref<HTMLAnchorElement>;
};

export type ClickableProps = {
  disabled?: boolean;
  styleless?: boolean;
} & (ButtonElProps | AnchorElProps | RouterLinkProps);

const isLink = (props: ButtonElProps | AnchorElProps | RouterLinkProps): props is RouterLinkProps =>
  'to' in props;
const isAnchor = (props: ButtonElProps | AnchorElProps | RouterLinkProps): props is AnchorElProps =>
  'href' in props && !('to' in props);
const isButton = (props: ButtonElProps | AnchorElProps | RouterLinkProps): props is ButtonElProps =>
  !('href' in props) && !('to' in props);

export const Clickable = React.forwardRef(
  (
    { className, styleless = false, disabled, ...rest }: ClickableProps,
    ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const baseClassName = classNames(
      { Clickable: !styleless, 'Clickable--disabled': disabled },
      className
    );

    if (isLink(rest)) {
      // Link doesn't support disabled prop, but we handle it via CSS class
      return <Link {...rest} className={baseClassName} ref={ref as React.Ref<HTMLAnchorElement>} />;
    }

    // For anchor and button, include the disabled prop
    const props = { ...rest, className: baseClassName, disabled };

    if (isAnchor(props)) return <a {...props} ref={ref as React.Ref<HTMLAnchorElement>} />;
    if (isButton(props)) return <button {...props} ref={ref as React.Ref<HTMLButtonElement>} />;

    return null;
  }
);

Clickable.displayName = 'Clickable';
