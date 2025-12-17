import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'UI/Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    min: 0,
    max: 100,
  },
};

export const WithStep: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 10,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    disabled: true,
  },
};

export const VolumeControl: Story = {
  render: () => (
    <div className="w-64 space-y-2">
      <label className="text-sm font-medium">Volume</label>
      <Slider defaultValue={[70]} min={0} max={100} className="w-full" />
      <p className="text-xs text-muted-foreground">70%</p>
    </div>
  ),
};

export const PriceRange: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <label className="text-sm font-medium">Price Range</label>
      <Slider defaultValue={[20, 80]} min={0} max={100} className="w-full" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>$20</span>
        <span>$80</span>
      </div>
    </div>
  ),
};
