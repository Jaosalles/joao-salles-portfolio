import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../data-display/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account settings</CardDescription>
          </CardHeader>
          <CardContent>Your account settings content goes here.</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here</CardDescription>
          </CardHeader>
          <CardContent>Password management content goes here.</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent>Notification settings content goes here.</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="privacy">Privacy</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium">Theme</h4>
              <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
            </div>
            <div>
              <h4 className="font-medium">Language</h4>
              <p className="text-sm text-muted-foreground">Select your language preference</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="security" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Two-factor authentication and security options
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="privacy" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Manage your privacy preferences</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="enabled" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="enabled">Enabled</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="content">Content</TabsTrigger>
      </TabsList>
      <TabsContent value="enabled" className="mt-4">
        <Card>
          <CardContent className="pt-6">This tab is enabled and clickable.</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="disabled" className="mt-4">
        <Card>
          <CardContent className="pt-6">This content won't show - tab is disabled</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="content" className="mt-4">
        <Card>
          <CardContent className="pt-6">This tab is also enabled.</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab-1" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab-4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab-5">Tab 5</TabsTrigger>
      </TabsList>
      {Array.from({ length: 5 }, (_, i) => (
        <TabsContent key={i} value={`tab-${i + 1}`} className="mt-4">
          <Card>
            <CardContent className="pt-6">Content for Tab {i + 1}</CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-full">
      <div className="flex gap-4">
        <TabsList className="flex flex-col h-auto">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="account" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>Configure your account preferences</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
              </CardHeader>
              <CardContent>Update your password</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>Manage notification settings</CardContent>
            </Card>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="dashboard" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="dashboard">📊 Dashboard</TabsTrigger>
        <TabsTrigger value="analytics">📈 Analytics</TabsTrigger>
        <TabsTrigger value="reports">📄 Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard" className="mt-4">
        <Card>
          <CardContent className="pt-6">Dashboard overview</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics" className="mt-4">
        <Card>
          <CardContent className="pt-6">Analytics data and charts</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports" className="mt-4">
        <Card>
          <CardContent className="pt-6">Reports and documentation</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};
