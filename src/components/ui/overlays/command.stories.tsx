import type { Meta, StoryObj } from '@storybook/react-vite';
import { Archive, BarChart3, FileText, Search, Settings, Users } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../button';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command';

const meta = {
  title: 'Overlays/Command',
  component: Command,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Fast, composable, unstyled command menu component for React.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[350px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Create Document</span>
          </CommandItem>
          <CommandItem>
            <Search className="mr-2 h-4 w-4" />
            <span>Search Files</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[350px]">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem>
            <BarChart3 className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
            <CommandShortcut>⌘T</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Archive className="mr-2 h-4 w-4" />
            <span>Archive</span>
            <CommandShortcut>⌘A</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Preferences</span>
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const SearchableItems: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[350px]">
      <CommandInput placeholder="Search features..." />
      <CommandList>
        <CommandEmpty>Feature not found.</CommandEmpty>
        <CommandGroup heading="Features">
          <CommandItem>
            <span>Dark Mode</span>
          </CommandItem>
          <CommandItem>
            <span>Notifications</span>
          </CommandItem>
          <CommandItem>
            <span>Two-Factor Auth</span>
          </CommandItem>
          <CommandItem>
            <span>Advanced Analytics</span>
          </CommandItem>
          <CommandItem>
            <span>Custom Themes</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Dialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Command Menu</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => setOpen(false)}>
                <FileText className="mr-2 h-4 w-4" />
                <span>Create</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Search className="mr-2 h-4 w-4" />
                <span>Search</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem onSelect={() => setOpen(false)}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Preferences</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};

export const MenuShortcuts: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[350px]">
      <CommandInput placeholder="Try 'save' or 'undo'..." />
      <CommandList>
        <CommandEmpty>Command not found.</CommandEmpty>
        <CommandGroup heading="Edit">
          <CommandItem>
            <span>Undo</span>
            <CommandShortcut>⌘Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Redo</span>
            <CommandShortcut>⌘Y</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Save</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="View">
          <CommandItem>
            <span>Zoom In</span>
            <CommandShortcut>⌘+</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Zoom Out</span>
            <CommandShortcut>⌘-</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Reset Zoom</span>
            <CommandShortcut>⌘0</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Loading: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <Command className="rounded-lg border shadow-md w-[350px]">
        <CommandInput placeholder="Search..." onValueChange={() => setIsLoading(!isLoading)} />
        <CommandList>
          {isLoading ? (
            <div className="flex items-center justify-center py-6">
              <div className="animate-spin h-5 w-5 border-2 border-muted-foreground border-t-foreground rounded-full" />
            </div>
          ) : (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Items">
                <CommandItem>Item 1</CommandItem>
                <CommandItem>Item 2</CommandItem>
                <CommandItem>Item 3</CommandItem>
              </CommandGroup>
            </>
          )}
        </CommandList>
      </Command>
    );
  },
};
