import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    rows: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is a pre-filled textarea with some content.',
    placeholder: 'Enter your message...',
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'This is disabled',
    disabled: true,
  },
};

export const LargeRows: Story = {
  args: {
    placeholder: 'Enter a longer message...',
    rows: 10,
  },
};

export const SmallRows: Story = {
  args: {
    placeholder: 'Quick note...',
    rows: 3,
  },
};

export const WithForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Subject</label>
        <input
          type="text"
          placeholder="Enter subject..."
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Message</label>
        <Textarea placeholder="Enter your message..." rows={6} />
      </div>
      <button className="h-10 px-4 rounded-md bg-primary text-primary-foreground">Send</button>
    </div>
  ),
};
