import React from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

import './Clickable.scss';

type ButtonElProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorElProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ClickableProps = {
  disabled?: boolean;
  styleless?: boolean;
  dataTestId?: string;
} & (ButtonElProps | AnchorElProps | LinkProps);

const isLink = (props: ButtonElProps | AnchorElProps | LinkProps): props is LinkProps =>
  'to' in props;
const isAnchor = (props: ButtonElProps | AnchorElProps | LinkProps): props is AnchorElProps =>
  'href' in props;
const isButton = (props: ButtonElProps | AnchorElProps | LinkProps): props is ButtonElProps =>
  !('href' in props);

export const Clickable = React.forwardRef(
  (
    { className, styleless = false, disabled, dataTestId, ...rest }: ClickableProps,
    ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const props = {
      ...rest,
      className: classNames({ Clickable: !styleless, 'Clickable--disabled': disabled }, className),
      disabled
    };

    if (isLink(props))
      return <Link {...props} ref={ref as React.Ref<HTMLAnchorElement>} data-testid={dataTestId} />;
    if (isAnchor(props))
      return <a {...props} ref={ref as React.Ref<HTMLAnchorElement>} data-testid={dataTestId} />;
    if (isButton(props))
      return (
        <button {...props} ref={ref as React.Ref<HTMLButtonElement>} data-testid={dataTestId} />
      );

    return null;
  }
);

Clickable.displayName = 'Clickable';
