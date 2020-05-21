import React from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

import './Clickable.scss';

type ButtonElProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorElProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ClickableProps = {
  disabled?: boolean;
  styleless?: boolean;
  ref?: React.Ref<any>;
} & (ButtonElProps | AnchorElProps | LinkProps);

const isLink = (props: ButtonElProps | AnchorElProps | LinkProps): props is LinkProps =>
  'to' in props;
const isAnchor = (props: ButtonElProps | AnchorElProps | LinkProps): props is AnchorElProps =>
  'href' in props;
const isButton = (props: ButtonElProps | AnchorElProps | LinkProps): props is ButtonElProps =>
  !('href' in props);

export const Clickable = React.forwardRef(
  ({ className, styleless = false, ref, disabled, ...rest }: ClickableProps) => {
    const props = {
      ...rest,
      className: classNames({ Clickable: !styleless, 'Clickable--disabled': disabled }, className),
      ref,
      disabled
    };

    if (isLink(props)) return <Link {...props} />;
    if (isAnchor(props)) return <a {...props} />;
    if (isButton(props)) return <button {...props} />;

    return null;
  }
);

Clickable.displayName = 'Clickable';
