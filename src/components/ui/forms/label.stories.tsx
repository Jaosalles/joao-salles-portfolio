import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'UI/Forms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Email address',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2 w-64">
      <Label htmlFor="email">Email</Label>
      <input
        id="email"
        type="email"
        placeholder="Enter email..."
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground"
      />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <Label>
      Name <span className="text-red-500">*</span>
    </Label>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2 w-64 opacity-50">
      <Label htmlFor="disabled">Disabled field</Label>
      <input id="disabled" disabled placeholder="Disabled" className="flex h-10 w-full" />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-1">
      <Label htmlFor="password">Password</Label>
      <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
    </div>
  ),
};
