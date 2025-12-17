import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertCircle, CheckCircle, HelpCircle, Info } from 'lucide-react';
import { Button } from '../button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

const meta = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="h-5 w-5 cursor-help text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Information tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="h-5 w-5 cursor-help text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Get help with this feature</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <AlertCircle className="h-5 w-5 cursor-help text-yellow-600" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Warning message</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <CheckCircle className="h-5 w-5 cursor-help text-green-600" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Operation completed successfully</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex gap-8 justify-center p-10">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Top
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Top tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Right
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Right tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Bottom
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Bottom tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Left
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Left tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This tooltip contains longer content with more information about the feature or action
          available.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Keyboard: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Ctrl+S</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Save your work</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Ctrl+Z</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Undo last action</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Ctrl+Y</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Redo last action</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm">Feature 1</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Feature 1 description</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm">Feature 2</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Feature 2 description</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm">Feature 3</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Feature 3 description</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};
