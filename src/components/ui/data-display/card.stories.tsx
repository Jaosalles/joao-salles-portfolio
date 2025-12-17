import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = {
  title: 'UI/Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can place any information.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A simple card with just a title and content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithoutFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Without Footer</CardTitle>
        <CardDescription>This card doesn't have a footer section</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Cards are flexible containers that can be configured in various ways to display different
          types of content.
        </p>
      </CardContent>
    </Card>
  ),
};

export const ProjectCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Portfolio Website</CardTitle>
        <CardDescription>React · TypeScript · TailwindCSS</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          A modern, responsive portfolio website built with cutting-edge technologies and best
          practices.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            React
          </span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            TypeScript
          </span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            Vite
          </span>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="default" size="sm">
          View Project
        </Button>
        <Button variant="outline" size="sm">
          GitHub
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Feature 1</CardTitle>
          <CardDescription>Responsive Design</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Looks great on any device or screen size.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Feature 2</CardTitle>
          <CardDescription>Modern Stack</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Built with the latest technologies.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Feature 3</CardTitle>
          <CardDescription>Best Practices</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Follows industry standards and patterns.</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const FormCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Enter your details to create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                placeholder="Your name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  ),
};
