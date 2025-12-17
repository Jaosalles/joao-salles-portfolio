import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Checkbox id="react" defaultChecked />
        <label htmlFor="react" className="text-sm font-medium">
          React
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="typescript" defaultChecked />
        <label htmlFor="typescript" className="text-sm font-medium">
          TypeScript
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="tailwind" />
        <label htmlFor="tailwind" className="text-sm font-medium">
          Tailwind CSS
        </label>
      </div>
    </div>
  ),
};
