import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'UI/Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'date', 'search'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number...',
  },
};

export const Date: Story = {
  args: {
    type: 'date',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Pre-filled value',
    placeholder: 'Enter text...',
    onChange: () => {},
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Text</label>
        <Input type="text" placeholder="Enter text..." />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Email</label>
        <Input type="email" placeholder="Enter email..." />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Password</label>
        <Input type="password" placeholder="Enter password..." />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Number</label>
        <Input type="number" placeholder="Enter number..." />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Date</label>
        <Input type="date" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Search</label>
        <Input type="search" placeholder="Search..." />
      </div>
    </div>
  ),
};
