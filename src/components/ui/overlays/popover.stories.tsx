import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar, Settings, Share2 } from 'lucide-react';
import { Button } from '../button';
import { Input } from '../forms/input';
import { Label } from '../forms/label';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

const meta = {
  title: 'Overlays/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays rich content in a portal, triggered by a button.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-4">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <div className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="width" className="text-xs">
                Width
              </Label>
              <Input id="width" defaultValue="100" className="h-8" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="height" className="text-xs">
                Height
              </Label>
              <Input id="height" defaultValue="25" className="h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-4">
          <h4 className="font-medium leading-none">Settings</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <span>Notifications</span>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <input type="checkbox" className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <span>Compact View</span>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex gap-4 justify-center p-10">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Top
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" className="w-40">
          Top popover content
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Right
          </Button>
        </PopoverTrigger>
        <PopoverContent side="right" className="w-40">
          Right popover content
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Bottom
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-40">
          Bottom popover content
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Left
          </Button>
        </PopoverTrigger>
        <PopoverContent side="left" className="w-40">
          Left popover content
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const Share: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-4">
          <h4 className="font-medium leading-none">Share this item</h4>
          <div className="space-y-2">
            <Label htmlFor="share-link" className="text-xs">
              Share Link
            </Label>
            <div className="flex gap-2">
              <Input
                id="share-link"
                value="https://example.com/share/abc123"
                readOnly
                className="h-8"
              />
              <Button size="sm" className="px-2">
                Copy
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium">Share with</p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                Twitter
              </Button>
              <Button size="sm" variant="outline">
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const DatePicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Calendar className="h-4 w-4" />
          Pick a date
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="font-medium text-sm">Select a date</p>
            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-xs font-semibold text-muted-foreground">
                  {day}
                </div>
              ))}
              {Array.from({ length: 28 }, (_, i) => (
                <Button key={i} variant="ghost" size="sm" className="h-8 w-8 p-0 font-normal">
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">More Info</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="space-y-4">
          <h4 className="font-medium">About this feature</h4>
          <p className="text-sm text-muted-foreground">
            This is a comprehensive explanation of what this feature does and how to use it
            effectively. It provides all the information you need to get started.
          </p>
          <div className="space-y-2">
            <p className="text-sm font-medium">Key points:</p>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>First key point</li>
              <li>Second key point</li>
              <li>Third key point</li>
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
