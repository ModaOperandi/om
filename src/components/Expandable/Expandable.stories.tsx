import React from 'react';
import { States } from 'storybook-states';
import { Stack } from '../Stack';
import { Expandable, ExpandableProps } from './Expandable';

export default { title: 'Components|Expandable' };

export const Default = () => (
  <States<Partial<ExpandableProps>> states={[{}, { expanded: true }]}>
    <Expandable name='Editor’s Note'>
      Mark Cross’ ‘Cole’ duffle bag is crafted from textured grain leather with ample space for your
      long-haul travels. It opens to reveal red twill lining and ample compartments for your
      essentials. It has polished silver-tone palladium hardware and is stamped with the label’s
      signature foil logo along the front. Adjust the removable shoulder strap for easy navigation
      through busy airport terminals.
    </Expandable>
  </States>
);

export const ChevronIcon = () => (
  <States<Partial<ExpandableProps>> states={[{}, { expanded: true }]}>
    <Expandable icon="chevron" name='Editor’s Note'>
      Mark Cross’ ‘Cole’ duffle bag is crafted from textured grain leather with ample space for your
      long-haul travels. It opens to reveal red twill lining and ample compartments for your
      essentials. It has polished silver-tone palladium hardware and is stamped with the label’s
      signature foil logo along the front. Adjust the removable shoulder strap for easy navigation
      through busy airport terminals.
    </Expandable>
  </States>
);

export const Stacked = () => (
  <States>
    <Stack space={0}>
      <Expandable name='Editor’s Note' expanded>
        <p>
          Acne Studios’ ‘1996’ jeans are fitted with a high-rise waist and straight-leg silhouette.
          Designed in a dark-blue wash, this five-pocket style is detailed with contrast
          top-stitching to mirror vintage pairs.
        </p>
      </Expandable>

      <Expandable name='Product Details'>
        <ul>
          <li>Belt loops, five-pocket style</li>
          <li>Button and concealed zip fastening at front</li>
          <li>Composition: 100% cotton</li>
          <li>Machine wash</li>
        </ul>
        <p>Made in Italy Product Code 684196</p>
      </Expandable>
      <Expandable name='Size &amp; Fit'>
        <ul>
          <li>
            Model measurements: height 6&apos;2&quot;/188cm - neck 15.5&quot;/39cm - waist
            30&quot;/76cm
          </li>
          <li>Model is wearing US 30</li>
          <li>This style fits true to size</li>
          <li>We suggest taking your normal size</li>
        </ul>
        <p>
          Questions? Please contact <a href='mailto:care@modaoperandi.com'>care@modaoperandi.com</a>
          .
        </p>
      </Expandable>
    </Stack>
  </States>
);
