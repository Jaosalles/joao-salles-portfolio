import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'UI/Forms/Switch',
  component: Switch,
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
type Story = StoryObj<typeof Switch>;

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
    <div className="flex items-center gap-3">
      <Switch id="notifications" />
      <label htmlFor="notifications" className="text-sm font-medium cursor-pointer">
        Enable notifications
      </label>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Switch id="email" defaultChecked />
        <label htmlFor="email" className="text-sm font-medium">
          Email notifications
        </label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sms" />
        <label htmlFor="sms" className="text-sm font-medium">
          SMS alerts
        </label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="push" defaultChecked />
        <label htmlFor="push" className="text-sm font-medium">
          Push notifications
        </label>
      </div>
    </div>
  ),
};

export const Settings: Story = {
  render: () => (
    <div className="w-96 border rounded-lg p-4 space-y-4">
      <h3 className="text-lg font-semibold">Preferences</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm">Dark mode</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Sound enabled</span>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Auto-save</span>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  ),
};
