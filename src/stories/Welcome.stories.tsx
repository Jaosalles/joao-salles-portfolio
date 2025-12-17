import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Getting Started/Welcome',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => (
    <div style={{ maxWidth: '900px', padding: '3rem 2rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        🎨 Welcome to Component Library
      </h1>

      <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
        This is the component library for João Pedro Salles' portfolio. Here you can explore, test,
        and document all components used in the project.
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
          📂 Navigation
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          Use the sidebar on the left to explore components organized by category:
        </p>
        <ul style={{ lineHeight: '1.8', paddingLeft: '2rem' }}>
          <li>
            <strong>UI</strong> - Basic UI components (Button, Toggle, etc.)
          </li>
          <li>
            <strong>UI/Data Display</strong> - Components for displaying data (Badge, Card, etc.)
          </li>
          <li>
            <strong>UI/Feedback</strong> - User feedback components (Alert, Toast, etc.)
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
          🚀 Quick Start
        </h2>
        <ol style={{ lineHeight: '1.8', paddingLeft: '2rem' }}>
          <li>Click on a component in the sidebar</li>
          <li>Explore different variants and states</li>
          <li>Use the Controls panel to interact with props</li>
          <li>Check the Docs tab for API documentation</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
          🛠️ Tech Stack
        </h2>
        <ul style={{ lineHeight: '1.8', paddingLeft: '2rem' }}>
          <li>React 18 - UI Library</li>
          <li>TypeScript - Type Safety</li>
          <li>Vite - Build Tool</li>
          <li>TailwindCSS - Styling</li>
          <li>Radix UI - Accessible Components</li>
          <li>Storybook 8.6 - Component Development</li>
        </ul>
      </section>

      <section
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: '12px',
          padding: '2rem',
          marginTop: '2rem',
        }}
      >
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', marginTop: 0 }}>
          💡 Pro Tips
        </h3>
        <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem', marginBottom: 0 }}>
          <li>
            Use the <strong>Controls</strong> tab to test different props interactively
          </li>
          <li>Switch themes using the toolbar button in the top-right</li>
          <li>Zoom in/out with the viewport controls for responsiveness testing</li>
          <li>
            Check the <strong>Actions</strong> tab to see event emissions
          </li>
        </ul>
      </section>

      <section style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
        <p style={{ color: '#999', fontSize: '0.875rem' }}>
          📚 Need help? Check the docs folder for guides and best practices.
        </p>
      </section>
    </div>
  ),
};
