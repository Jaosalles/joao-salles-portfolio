import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardHeader, CardTitle } from '../data-display/card';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable';

const meta = {
  title: 'Layout/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Resizable panels that can be dragged to change their size.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="border rounded-md h-[300px] w-[600px]">
      <ResizablePanel defaultSize={40} minSize={20}>
        <Card className="h-full rounded-none border-0">
          <CardHeader>
            <CardTitle className="text-sm">Left Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Drag the handle to resize</p>
          </CardContent>
        </Card>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60} minSize={30}>
        <Card className="h-full rounded-none border-0">
          <CardHeader>
            <CardTitle className="text-sm">Right Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">This panel is resizable</p>
          </CardContent>
        </Card>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup direction="vertical" className="border rounded-md h-[400px] w-[500px]">
      <ResizablePanel defaultSize={40} minSize={20}>
        <Card className="h-full rounded-none border-0">
          <CardHeader>
            <CardTitle className="text-sm">Top Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Vertical resize</p>
          </CardContent>
        </Card>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60} minSize={30}>
        <Card className="h-full rounded-none border-0">
          <CardHeader>
            <CardTitle className="text-sm">Bottom Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Drag to adjust</p>
          </CardContent>
        </Card>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="border rounded-md h-[300px] w-[800px]">
      <ResizablePanel defaultSize={25} minSize={15}>
        <Card className="h-full rounded-none border-0 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xs">Panel 1</CardTitle>
          </CardHeader>
        </Card>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} minSize={30}>
        <Card className="h-full rounded-none border-0 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-xs">Panel 2</CardTitle>
          </CardHeader>
        </Card>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <Card className="h-full rounded-none border-0 bg-pink-50">
          <CardHeader>
            <CardTitle className="text-xs">Panel 3</CardTitle>
          </CardHeader>
        </Card>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const WithHandle: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="border rounded-md h-[300px] w-[600px]">
      <ResizablePanel defaultSize={40} minSize={20}>
        <Card className="h-full rounded-none border-0">
          <CardHeader>
            <CardTitle className="text-sm">Left</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">With handle icon</p>
          </CardContent>
        </Card>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60} minSize={30}>
        <Card className="h-full rounded-none border-0">
          <CardHeader>
            <CardTitle className="text-sm">Right</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Visible resize handle</p>
          </CardContent>
        </Card>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="border rounded-md h-[400px] w-full">
      <ResizablePanel defaultSize={20} minSize={15}>
        <div className="h-full bg-slate-100 p-4">
          <h3 className="font-semibold mb-4">Sidebar</h3>
          <div className="space-y-2">
            <div className="p-2 bg-white rounded text-sm">Nav 1</div>
            <div className="p-2 bg-white rounded text-sm">Nav 2</div>
            <div className="p-2 bg-white rounded text-sm">Nav 3</div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={60}>
            <div className="h-full bg-slate-50 p-4">
              <h3 className="font-semibold">Main Content</h3>
              <p className="text-sm text-muted-foreground mt-2">Resizable dashboard layout</p>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={40}>
            <div className="h-full bg-slate-50 p-4">
              <h3 className="font-semibold text-sm">Details</h3>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
