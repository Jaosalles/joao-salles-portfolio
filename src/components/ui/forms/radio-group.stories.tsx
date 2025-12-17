import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupItem } from './radio-group';

const meta: Meta = {
  title: 'UI/Forms/RadioGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <label htmlFor="option-1" className="text-sm font-medium cursor-pointer">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <label htmlFor="option-2" className="text-sm font-medium cursor-pointer">
          Option 2
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <label htmlFor="option-3" className="text-sm font-medium cursor-pointer">
          Option 3
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <RadioGroup defaultValue="choice-1" className="space-y-3">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="choice-1" id="choice-1" />
        <label htmlFor="choice-1" className="text-sm font-medium cursor-pointer">
          Choice 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="choice-2" id="choice-2" />
        <label htmlFor="choice-2" className="text-sm font-medium cursor-pointer">
          Choice 2
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="choice-3" id="choice-3" />
        <label htmlFor="choice-3" className="text-sm font-medium cursor-pointer">
          Choice 3
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="size-sm" className="flex gap-6">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="size-sm" id="size-sm" />
        <label htmlFor="size-sm" className="text-sm font-medium cursor-pointer">
          Small
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="size-md" id="size-md" />
        <label htmlFor="size-md" className="text-sm font-medium cursor-pointer">
          Medium
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="size-lg" id="size-lg" />
        <label htmlFor="size-lg" className="text-sm font-medium cursor-pointer">
          Large
        </label>
      </div>
    </RadioGroup>
  ),
};

export const DisabledOption: Story = {
  render: () => (
    <RadioGroup defaultValue="enabled" className="space-y-3">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="enabled" id="enabled" />
        <label htmlFor="enabled" className="text-sm font-medium cursor-pointer">
          Enabled
        </label>
      </div>
      <div className="flex items-center gap-2 opacity-50">
        <RadioGroupItem value="disabled" id="disabled" disabled />
        <label htmlFor="disabled" className="text-sm font-medium">
          Disabled
        </label>
      </div>
    </RadioGroup>
  ),
};
