import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bell, Menu, Settings, Share2 } from 'lucide-react';
import { Button } from '../button';
import { Input } from '../forms/input';
import { Label } from '../forms/label';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';

const meta = {
  title: 'Overlays/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A drawer that slides in from the bottom and can contain various types of content.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a drawer with some content.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Drawer content goes here.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button>Continue</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>Update your profile information below.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" placeholder="Tell us about yourself" />
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button>Save Changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const NavigationMenu: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Show Details</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Item Details</DrawerTitle>
          <DrawerDescription>View detailed information about this item.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold">Description</h4>
            <p className="text-sm text-muted-foreground">
              This is a detailed description of the item. It contains more information that would be
              helpful to view in a drawer format.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Details</h4>
            <ul className="text-sm space-y-1">
              <li>Created: January 1, 2024</li>
              <li>Modified: January 15, 2024</li>
              <li>Size: 2.4 MB</li>
            </ul>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Confirm Delete</DrawerTitle>
          <DrawerDescription>Are you sure you want to delete this item?</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            This action cannot be undone. Please make sure you want to proceed.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button variant="destructive">Delete</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>View Full Content</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Long Content</DrawerTitle>
          <DrawerDescription>This drawer contains a lot of content.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="space-y-2">
              <h4 className="font-semibold">Section {i + 1}</h4>
              <p className="text-sm text-muted-foreground">
                This is some content for section {i + 1}. There's a lot of text here to demonstrate
                how the drawer handles scrollable content.
              </p>
            </div>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
