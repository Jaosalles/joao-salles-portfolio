import type { Meta, StoryObj } from '@storybook/react-vite';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';

const meta = {
  title: 'Overlays/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'For sighted users to preview content available behind a link.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="#" className="underline">
          @username
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@username</h4>
            <p className="text-sm">User bio goes here. A brief description of the user.</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">Joined December 2023</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="#" className="flex items-center gap-2 underline">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          <span>John Doe</span>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-sm text-muted-foreground">@johndoe</p>
            </div>
          </div>
          <p className="text-sm">
            Full-stack developer and open-source enthusiast. Passionate about building great
            products.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-semibold">342</p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            <div>
              <p className="text-sm font-semibold">128</p>
              <p className="text-xs text-muted-foreground">Following</p>
            </div>
            <div>
              <p className="text-sm font-semibold">1.2K</p>
              <p className="text-xs text-muted-foreground">Posts</p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex gap-6">
      {['Alice', 'Bob', 'Charlie'].map(name => (
        <HoverCard key={name}>
          <HoverCardTrigger asChild>
            <a href="#" className="underline">
              {name}
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="space-y-2">
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-muted-foreground">
                Team member at Acme Corp. Works on frontend development.
              </p>
              <p className="text-xs text-muted-foreground">Joined 2 years ago</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex gap-8 justify-center p-10">
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="underline">
            Top
          </a>
        </HoverCardTrigger>
        <HoverCardContent side="top" className="w-64">
          <p className="text-sm">Top positioned hover card</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="underline">
            Right
          </a>
        </HoverCardTrigger>
        <HoverCardContent side="right" className="w-64">
          <p className="text-sm">Right positioned hover card</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="underline">
            Bottom
          </a>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" className="w-64">
          <p className="text-sm">Bottom positioned hover card</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="underline">
            Left
          </a>
        </HoverCardTrigger>
        <HoverCardContent side="left" className="w-64">
          <p className="text-sm">Left positioned hover card</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const Statistics: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="#" className="underline">
          View Statistics
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="space-y-4">
          <h4 className="font-semibold">Monthly Statistics</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Visitors</span>
              <span className="font-semibold">12,543</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Engagement</span>
              <span className="font-semibold">8,234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Conversions</span>
              <span className="font-semibold">1,542</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Revenue</span>
              <span className="font-semibold">$12,450</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
