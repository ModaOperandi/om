import React, { useEffect, useState, useCallback } from 'react';
import { action } from '@storybook/addon-actions';
import { States } from '../../utilities';
import { Input } from '../Field';
import { Select, SelectProps } from './Select';
import { MultiSelect } from './MultiSelect';

export default { title: 'Components/Select' };

const OPTIONS = [
  { value: 'featured', label: 'Featured' },
  {
    value: 'recency',
    label: "What's New",
    disabled: true
  },
  {
    value: 'high',
    label: 'Price High to Low'
  },
  {
    value: 'low',
    label: 'Price Low to High'
  }
];

export const Default = () => (
  <States<Partial<SelectProps>>
    states={[
      { idRef: '1' },
      { idRef: '2', value: 'high' },
      { idRef: '3', label: 'Sort — ' },
      { disabled: true, idRef: '4', label: 'Sort' },
      { idRef: '5', label: '' },
      { idRef: '5', label: '', error: 'Error' },
      { idRef: '6', label: '', dropDirection: 'up' },
      { idRef: '7', label: undefined, placeholder: 'Placeholder' }
    ]}
  >
    <Select label='Sort by' options={OPTIONS} onChange={action('onChange')} />
  </States>
);

export const Colored = () => (
  <States<Partial<SelectProps>>>
    <Select
      label='Color'
      colorSwatch='strawberry'
      options={[
        { value: '🍓', label: 'Strawberry', colorSwatch: 'strawberry' },
        {
          value: 'ink',
          label: 'Ink',
          disabled: true,
          colorSwatch: 'ink'
        },
        {
          value: 'money-good',
          label: 'Money Good',
          disabled: true,
          colorSwatch: 'money-good'
        }
      ]}
      onChange={action('onChange')}
      value='🍓'
    />
  </States>
);

export const ChangingValue = () => {
  const [cursor, setCursor] = useState(0);

  const values = OPTIONS.map(({ value }) => value);
  const value = values[cursor % values.length];
  const HALF_SECOND_INTERVAL = 500;

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor(prevCursor => prevCursor + 1);
    }, HALF_SECOND_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return <Select label='Sort by' options={OPTIONS} onChange={action('onChange')} value={value} />;
};

const COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua & Deps',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Rep',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo {Democratic Rep}',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland {Republic}',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea North',
  'Korea South',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar, {Burma}',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'St Kitts & Nevis',
  'St Lucia',
  'Saint Vincent & the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome & Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad & Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

export const Long = () => (
  <Select
    label='Choose country'
    options={COUNTRIES.map(country => ({ label: country, value: country }))}
  />
);

export const AutoFill = () => (
  <>
    <Input label='Address*' name='addressLine1' />
    <Input label='City' name='city' />
    <Input label='Choose country' name='country'>
      <Select
        options={COUNTRIES.map(country => ({ label: country, value: country }))}
        allowAutoFill
      />
    </Input>
  </>
);

export const InsideInputComponent = () => (
  <Input error>
    <Select options={OPTIONS} />
  </Input>
);

export const MultiSelectComponent = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSetItems = useCallback(
    (items: string[]) => setSelectedItems(items),
    [setSelectedItems]
  );

  return (
    <MultiSelect
      onChange={handleSetItems}
      value={selectedItems}
      options={COUNTRIES.map(country => ({ label: country, value: country }))}
    />
  );
};

export const MultiSelectWithDefaultsComponent = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>(['Canada', 'Albania', 'Greece']);

  const handleSetItems = useCallback(
    (items: string[]) => setSelectedItems(items),
    [setSelectedItems]
  );

  return (
    <MultiSelect
      onChange={handleSetItems}
      value={selectedItems}
      placeholder='United States'
      defaultValue={['Canada', 'Albania', 'Greece']}
      options={COUNTRIES.map(country => ({ label: country, value: country }))}
    />
  );
};

export const MultiSelectUncontrolledComponent = () => {
  return (
    <MultiSelect
      placeholder='United States'
      defaultValue={['Canada', 'Albania', 'Greece']}
      options={COUNTRIES.map(country => ({ label: country, value: country }))}
    />
  );
};

export const MultiSelectUncontrolledSearchComponent = () => {
  return (
    <MultiSelect
      searchable
      placeholder='United States'
      defaultValue={['Canada', 'Albania', 'Greece']}
      options={COUNTRIES.map(country => ({ label: country, value: country }))}
    />
  );
};
