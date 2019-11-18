import React from 'react';

import { NavBar } from './NavBar';

export default { title: 'Molecules|NavBar' };

export const Default = () => (
  <NavBar
    sections={[
      {
        label: 'Hello',
        href: '#hello',
        subsections: [
          {
            type: 'default',
            label: 'A default subsection',
            links: [
              { label: 'It has some links', href: '#link' },
              { label: 'Another one', href: '#link' }
            ]
          }
        ]
      },
      {
        label: 'World',
        href: '#world',
        subsections: [
          {
            type: 'default',
            label: 'Another subsection',
            links: [
              { label: 'It has some links', href: '#link' },
              { label: 'Another one', href: '#link' }
            ]
          },
          {
            type: 'highlighted',
            label: 'Highlighted',
            links: [
              {
                label: 'Wow, impressive',
                href: '#wow',
                src: 'https://picsum.photos/id/237/200/300'
              },
              {
                label: 'Cool',
                href: '#cool',
                src: 'https://picsum.photos/id/236/200/300'
              }
            ]
          }
        ]
      }
    ]}
  />
);
