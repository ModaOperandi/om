import React from 'react';
import classNames from 'classnames';
import { Text, TextTreatment, TextColor, TextFontFamily } from '../Text';

import './Divider.scss';

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  text?: string;
  treatment?: TextTreatment;
  color?: TextColor;
  family?: TextFontFamily;
  type?: 'no-line' | 'two-line';
  verticalPadding?: string;
};

export const Divider: React.FC<DividerProps> = ({
  text,
  treatment,
  color,
  family,
  type,
  className,
  ...rest
}) => {
  const defaultTreatment = type === 'two-line' ? 'eyebrow' : 'h5';
  const defaultFamily = type === 'two-line' ? undefined : 'serif';

  return (
    <div className={classNames('Divider', type ? `Divider--${type}` : '', className)} {...rest}>
      {text && (
        <Text
          className='Divider__text'
          treatment={treatment ?? defaultTreatment}
          color={color}
          family={family ?? defaultFamily}
        >
          {text}
        </Text>
      )}
    </div>
  );
};
