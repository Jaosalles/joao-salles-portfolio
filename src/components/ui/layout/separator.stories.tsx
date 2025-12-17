import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Layout/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Section 1</h3>
        <p className="text-sm text-muted-foreground">Content for section 1</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold">Section 2</h3>
        <p className="text-sm text-muted-foreground">Content for section 2</p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <p className="text-2xl font-bold">1.2K</p>
        <p className="text-xs text-muted-foreground">Views</p>
      </div>
      <Separator orientation="vertical" className="h-10" />
      <div className="text-center">
        <p className="text-2xl font-bold">234</p>
        <p className="text-xs text-muted-foreground">Likes</p>
      </div>
      <Separator orientation="vertical" className="h-10" />
      <div className="text-center">
        <p className="text-2xl font-bold">89</p>
        <p className="text-xs text-muted-foreground">Comments</p>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>Content above</div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <div>Content below</div>
    </div>
  ),
};

export const List: Story = {
  render: () => (
    <div className="w-96 space-y-0">
      <div className="p-4">Item 1</div>
      <Separator />
      <div className="p-4">Item 2</div>
      <Separator />
      <div className="p-4">Item 3</div>
    </div>
  ),
};
