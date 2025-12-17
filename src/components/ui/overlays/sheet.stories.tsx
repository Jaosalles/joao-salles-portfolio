import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';
import { Input } from '../forms/input';
import { Label } from '../forms/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

const meta = {
  title: 'Overlays/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A side sheet overlay component similar to a drawer but more full-featured.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet description or instructions go here.</SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p>Sheet content goes here.</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Right Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Right Side Sheet</SheetTitle>
          <SheetDescription>This sheet slides in from the right side.</SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p>Right-aligned sheet content</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top Sheet</SheetTitle>
          <SheetDescription>This sheet slides in from the top.</SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p>Top-aligned sheet content</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Edit Settings</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Settings</SheetTitle>
          <SheetDescription>Update your settings below</SheetDescription>
        </SheetHeader>
        <div className="space-y-6 py-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" placeholder="Tell us about yourself" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Wide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Wide Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[600px] sm:w-[700px]">
        <SheetHeader>
          <SheetTitle>Wide Sheet</SheetTitle>
          <SheetDescription>A wider sheet with more content</SheetDescription>
        </SheetHeader>
        <div className="py-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Field 1</Label>
              <Input placeholder="Enter value" />
            </div>
            <div>
              <Label>Field 2</Label>
              <Input placeholder="Enter value" />
            </div>
            <div>
              <Label>Field 3</Label>
              <Input placeholder="Enter value" />
            </div>
            <div>
              <Label>Field 4</Label>
              <Input placeholder="Enter value" />
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Submit</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const NarrowLeft: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Sidebar</Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 py-6">
          <Button variant="ghost" className="w-full justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Help
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};
