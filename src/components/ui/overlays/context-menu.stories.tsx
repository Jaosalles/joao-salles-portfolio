import type { Meta, StoryObj } from '@storybook/react-vite';
import { Archive, Copy, Delete, Edit, Share } from 'lucide-react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from './context-menu';

const meta = {
  title: 'Overlays/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A menu that appears when the user right-clicks an element.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          <span>Copy</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          <span>Edit</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Delete className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right click for more options
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>File Actions</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Share className="mr-2 h-4 w-4" />
            <span>Share</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Copy Link</ContextMenuItem>
            <ContextMenuItem>Share to Email</ContextMenuItem>
            <ContextMenuItem>Share to Social</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Archive className="mr-2 h-4 w-4" />
            <span>Archive</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Archive</ContextMenuItem>
            <ContextMenuItem>Move to Trash</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-red-600">
          <Delete className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const OnImage: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[200px] w-[300px] items-center justify-center rounded-md bg-gradient-to-r from-blue-400 to-purple-500">
        <span className="text-white text-sm">Right click on this image</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          <span>Copy Image</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          <span>Edit Image</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Share className="mr-2 h-4 w-4" />
          <span>Share</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-red-600">
          <Delete className="mr-2 h-4 w-4" />
          <span>Remove</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const Table: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">Right click on a row for actions</p>
      <div className="border rounded-md">
        {['Row 1', 'Row 2', 'Row 3'].map(row => (
          <ContextMenu key={row}>
            <ContextMenuTrigger className="flex p-4 border-b hover:bg-muted cursor-context-menu last:border-0">
              <span>{row}</span>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit Row</span>
              </ContextMenuItem>
              <ContextMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                <span>Duplicate</span>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="text-red-600">
                <Delete className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </div>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map(item => (
        <ContextMenu key={item}>
          <ContextMenuTrigger className="flex h-[100px] items-center justify-center rounded-md border border-dashed text-sm">
            {item}
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              <span>Copy</span>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="text-red-600">
              <Delete className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  ),
};
