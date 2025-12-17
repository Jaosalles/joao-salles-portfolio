import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea, ScrollBar } from './scroll-area';

const meta = {
  title: 'Layout/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Augment native scroll functionality with a custom scrollbar.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        ))}
      </div>
      <ScrollBar />
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 h-72 rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 h-64 w-64 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-semibold"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const Both: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[400px] rounded-md border">
      <div className="p-4">
        <div className="w-max">
          <table className="border-collapse">
            <thead>
              <tr>
                {['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'].map((col, i) => (
                  <th key={i} className="border p-2 text-left font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 20 }).map((_, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-muted' : ''}>
                  <td className="border p-2">Row {i + 1}</td>
                  <td className="border p-2">Data A</td>
                  <td className="border p-2">Data B</td>
                  <td className="border p-2">Data C</td>
                  <td className="border p-2">Data D</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ScrollBar />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <ScrollArea className="h-[250px] w-[300px] rounded-md border p-4">
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <h4 className="font-semibold">Section {i + 1}</h4>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
      <ScrollBar />
    </ScrollArea>
  ),
};

export const Images: Story = {
  render: () => (
    <ScrollArea className="w-full h-[300px] rounded-md border">
      <div className="flex w-max space-x-2 p-4">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 h-64 w-48 rounded-md bg-gradient-to-br from-slate-300 via-purple-300 to-slate-300 flex items-center justify-center font-semibold text-slate-700"
          >
            Image {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const LargeText: Story = {
  render: () => (
    <ScrollArea className="h-[350px] w-[400px] rounded-md border p-6">
      <div className="space-y-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>
            <h3 className="font-bold text-lg mb-2">Chapter {i + 1}</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
      <ScrollBar />
    </ScrollArea>
  ),
};
