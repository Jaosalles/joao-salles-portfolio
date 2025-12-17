import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/jaosalles.png" alt="@jaosalles" />
      <AvatarFallback>JP</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/invalid.png" alt="Invalid" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const OnlyFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/jaosalles.png" />
        <AvatarFallback>JP</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>SN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AA</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/jaosalles.png" />
        <AvatarFallback className="text-xs">JP</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/jaosalles.png" />
        <AvatarFallback>JP</AvatarFallback>
      </Avatar>
      <Avatar className="h-14 w-14">
        <AvatarImage src="https://github.com/jaosalles.png" />
        <AvatarFallback className="text-lg">JP</AvatarFallback>
      </Avatar>
    </div>
  ),
};
