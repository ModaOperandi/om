import React, { useState } from 'react';
import { States } from '../../utilities';
import { ControlLink } from '..';
import { Text } from '../Text';
import { Popover, PopoverProps } from './Popover';

export default { title: 'Components/Popover' };

const LOREM =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, inventore provident distinctio delectus debitis quasi modi adipisci unde esse corrupti molestiae eveniet iste ea illo ad sit fugit officiis explicabo!';

const Content = (
  <div style={{ width: '16rem', padding: '0.5rem' }}>
    <Text>{LOREM}</Text>
  </div>
);

export const Default = () => (
  <div style={{ textAlign: 'center' }}>
    <States<Partial<PopoverProps>>
      states={[
        {},
        { autoPreview: true },
        { smoothTransitioning: true },
        { anchor: 'topCenter' },
        { anchor: 'topRight' },
        { autoPreview: true, smoothTransitioning: true },
        { anchor: 'bottomLeft' },
        { anchor: 'bottomCenter' },
        { anchor: 'bottomRight' },
        { open: true }
      ]}
    >
      <Popover content={Content} style={{ display: 'inline-block' }}>
        <Text>
          <ControlLink href='https://www.modaoperandi.com/women'>Hover on Link</ControlLink>
        </Text>
      </Popover>
    </States>
  </div>
);

/**
 * ## Accessibility
 *
 * The Popover component supports several accessibility props to make it usable
 * with screen readers and keyboard navigation. **Consumers are responsible for
 * adding ARIA attributes to their trigger elements.**
 *
 * ### Available Props
 *
 * | Prop | Type | Description |
 * |------|------|-------------|
 * | `role` | `'tooltip' \| 'dialog' \| 'menu' \| 'listbox'` | Semantic role for the popover content |
 * | `aria-label` | `string` | Accessible label for the popover |
 * | `aria-labelledby` | `string` | ID of element that labels the popover |
 * | `popoverId` | `string` | ID for the content - use in trigger's `aria-controls` or `aria-describedby` |
 * | `openOnFocus` | `boolean` | Open popover when trigger receives focus |
 * | `closeOnEscape` | `boolean` | Close on Escape key (default: true) |
 * | `onClose` | `() => void` | Callback when user attempts to close (Escape key). Required for controlled popovers. |
 * | `autoFocus` | `boolean` | Automatically focus the popover content when opened |
 *
 * ### Trigger ARIA Attributes (Consumer Responsibility)
 *
 * For **dialogs/menus**, add to your trigger:
 * - `aria-expanded={isOpen}`
 * - `aria-haspopup="dialog"` (or "menu", "listbox")
 * - `aria-controls={popoverId}` (when open)
 *
 * For **tooltips**, add to your trigger:
 * - `aria-describedby={popoverId}` (when open)
 */
export const AccessibilityTooltip = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <Text>Hover or focus the button to see a tooltip. Press Escape to dismiss.</Text>
    <br />
    <br />
    <Popover
      role='tooltip'
      popoverId='price-tooltip'
      aria-label='Price explanation'
      openOnFocus
      content={
        <div style={{ padding: '0.5rem', maxWidth: '200px' }}>
          <Text>
            This is the estimated total you&apos;ll pay at checkout, including taxes and shipping.
          </Text>
        </div>
      }
    >
      <button
        type='button'
        aria-describedby='price-tooltip'
        style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
      >
        Est. Total (?)
      </button>
    </Popover>
  </div>
);

AccessibilityTooltip.storyName = 'Accessibility: Tooltip';

/**
 * For controlled popovers like dialogs or menus, you manage the open state
 * and add the appropriate ARIA attributes to your trigger.
 *
 * Use `onClose` to handle dismiss actions (like Escape key) for controlled popovers.
 * Use `autoFocus` to move focus into the dialog when it opens.
 */
export const AccessibilityDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Text>Click the button to open a dialog. Press Escape or click Close to dismiss.</Text>
      <br />
      <br />
      <Popover
        role='dialog'
        popoverId='cart-dialog'
        aria-label='Shopping bag contents'
        open={open}
        onClose={() => setOpen(false)}
        autoFocus
        content={
          <div style={{ padding: '1rem', width: '250px' }}>
            <Text treatment='h4'>Your Bag</Text>
            <hr />
            <Text>2 items in your bag</Text>
            <br />
            <button
              type='button'
              onClick={() => setOpen(false)}
              style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        }
      >
        <button
          type='button'
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-haspopup='dialog'
          aria-controls={open ? 'cart-dialog' : undefined}
          style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
        >
          Shopping Bag (2)
        </button>
      </Popover>
    </div>
  );
};

AccessibilityDialog.storyName = 'Accessibility: Dialog';

/**
 * Use `openOnFocus` to make hover-triggered popovers accessible to keyboard users.
 * The popover opens when the trigger receives focus and closes when focus leaves.
 */
export const AccessibilityKeyboardNavigation = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <Text>Tab to each button to see the popover open on focus.</Text>
    <br />
    <br />
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
      <Popover
        role='tooltip'
        popoverId='info-1'
        openOnFocus
        content={
          <div style={{ padding: '0.5rem' }}>
            <Text>First item info</Text>
          </div>
        }
      >
        <button
          type='button'
          aria-describedby='info-1'
          style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
        >
          Item 1
        </button>
      </Popover>

      <Popover
        role='tooltip'
        popoverId='info-2'
        openOnFocus
        content={
          <div style={{ padding: '0.5rem' }}>
            <Text>Second item info</Text>
          </div>
        }
      >
        <button
          type='button'
          aria-describedby='info-2'
          style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
        >
          Item 2
        </button>
      </Popover>

      <Popover
        role='tooltip'
        popoverId='info-3'
        openOnFocus
        content={
          <div style={{ padding: '0.5rem' }}>
            <Text>Third item info</Text>
          </div>
        }
      >
        <button
          type='button'
          aria-describedby='info-3'
          style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
        >
          Item 3
        </button>
      </Popover>
    </div>
  </div>
);

AccessibilityKeyboardNavigation.storyName = 'Accessibility: Keyboard Navigation';
