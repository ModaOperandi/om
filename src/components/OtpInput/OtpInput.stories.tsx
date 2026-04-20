import React, { useState } from 'react';
import { States } from '../../utilities';
import { OtpInput, OtpInputProps } from './OtpInput';

export default { title: 'Components/OtpInput' };

const StatefulOtpInput = (props: Partial<OtpInputProps>) => {
  const [value, setValue] = useState(props.value || '');

  return <OtpInput {...props} value={value} onChange={setValue} />;
};

export const Default = () => <StatefulOtpInput label='Verification code' numInputs={6} />;

export const Variants = () => (
  <States<Partial<OtpInputProps>>
    states={[
      { numInputs: 6, label: 'Verification code' },
      { numInputs: 6, label: 'Verification code', value: '123', focus: true },
      { numInputs: 6, label: 'Verification code', value: '123456', disabled: true },
      { numInputs: 6, label: 'Verification code', error: 'Invalid code' }
    ]}
  >
    {props => <StatefulOtpInput {...props} />}
  </States>
);
