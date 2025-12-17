import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'range',
      min: 0,
      max: 100,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 65,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <div className="space-y-1">
        <p className="text-sm font-medium">Loading: 25%</p>
        <Progress value={25} />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Upload: 50%</p>
        <Progress value={50} />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Download: 75%</p>
        <Progress value={75} />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Complete: 100%</p>
        <Progress value={100} />
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-64 space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">Installation Progress</span>
        <span className="text-sm text-muted-foreground">72%</span>
      </div>
      <Progress value={72} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-1">
        <p className="text-sm font-medium">Small</p>
        <Progress value={60} className="h-1" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Default</p>
        <Progress value={60} />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Large</p>
        <Progress value={60} className="h-3" />
      </div>
    </div>
  ),
};
