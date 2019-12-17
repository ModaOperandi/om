import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { shallow } from 'enzyme';

import { Modal } from './Modal';

describe('Modal', () => {
  it('renders correctly', () => {
    const component = shallow(<Modal onClose={() => {}}>Hello</Modal>);
    expect(component.text()).toEqual('Hello');
  });

  it('should only close when the modal wrapper is clicked', () => {
    const onClose = jest.fn();
    const onClickButton = jest.fn();
    const { getByTestId } = render(
      <Modal data-testid='modal' onClose={onClose}>
        <button data-testid='button' onClick={onClickButton}>
          Click Me
        </button>
      </Modal>
    );
    const modal = getByTestId('modal');
    const button = getByTestId('button');

    userEvent.click(button);
    expect(onClose).toBeCalledTimes(0);
    expect(onClickButton).toBeCalledTimes(1);

    userEvent.click(modal);
    expect(onClose).toBeCalledTimes(1);
    expect(onClickButton).toBeCalledTimes(1);
  });
});
