import React from 'react';
import { render } from 'enzyme';

import { Tabs } from './Tabs';

describe('Tabs', () => {
  const testList = [
    {
      name: 'tab1',
      title: 'Tab 1',
      panel: <div className='test'>I am a panel</div>
    },
    {
      name: 'tab2',
      title: 'Tab 2',
      panel: <div className='test'>I am also a panel</div>
    }
  ];

  it('renders correctly with first tab displayed', () => {
    const component = render(<Tabs tabs={testList} />);

    expect(component.html()).toEqual(
      '<div class="TabList"><button class="Clickable Tab Tab--active">Tab 1</button><button class="Clickable Tab ">Tab 2</button></div><div class="TabPanels"><div class="TabPanel"><div class="test">I am a panel</div></div></div>'
    );
  });
});
