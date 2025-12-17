import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent } from '../data-display/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

const meta = {
  title: 'Layout/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A carousel component that slides through a collection of items.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6 bg-gradient-to-r from-blue-400 to-purple-500">
                <span className="text-4xl font-semibold text-white">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const WithImages: Story = {
  render: () => (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        {[
          'from-blue-400 to-purple-500',
          'from-purple-400 to-pink-500',
          'from-pink-400 to-red-500',
          'from-red-400 to-orange-500',
          'from-orange-400 to-yellow-500',
        ].map((gradient, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent
                className={`flex aspect-video items-center justify-center bg-gradient-to-r ${gradient}`}
              >
                <span className="text-2xl font-semibold text-white">Slide {index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const ThreeItems: Story = {
  render: () => (
    <Carousel className="w-full max-w-3xl">
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center bg-muted">
                <span className="text-2xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const TwoItems: Story = {
  render: () => (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400">
                <span className="text-3xl font-semibold">Item {index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        {[
          { title: 'First', desc: 'Beautiful carousel component' },
          { title: 'Second', desc: 'Smooth transitions' },
          { title: 'Third', desc: 'Fully responsive' },
          { title: 'Fourth', desc: 'Easy to customize' },
        ].map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6 aspect-auto bg-muted">
                <span className="text-xl font-semibold">{item.title}</span>
                <p className="text-sm text-muted-foreground text-center">{item.desc}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const NoButtons: Story = {
  render: () => (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-video items-center justify-center bg-gradient-to-r from-indigo-400 to-purple-500">
                <span className="text-2xl font-semibold text-white">Slide {index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  ),
};
