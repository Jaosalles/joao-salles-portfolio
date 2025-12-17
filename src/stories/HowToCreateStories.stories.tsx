import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Getting Started/How to Create Stories',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HowToCreateStories: Story = {
  render: () => (
    <div style={{ maxWidth: '900px', padding: '2rem', lineHeight: '1.8' }}>
      <h1>📖 How to Create Stories</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Basic Structure</h2>
        <p>Every story file should follow this pattern:</p>
        <pre
          style={{
            background: '#f5f5f5',
            padding: '1.5rem',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '0.875rem',
          }}
        >
          {`import type { Meta, StoryObj } from '@storybook/react-vite';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Category/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define controls here
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    // Default props
  },
};

export const Variant: Story = {
  args: {
    // Different props
  },
};`}
        </pre>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>File Organization</h2>
        <ul>
          <li>
            <strong>Naming:</strong> Use \`ComponentName.stories.tsx\` next to the component
          </li>
          <li>
            <strong>Location:</strong> Place in the same directory as the component
          </li>
          <li>
            <strong>Category:</strong> Use hierarchical titles like \`UI/Button\` or \`UI/Data
            Display/Card\`
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Controls Configuration</h2>
        <p>Common control types:</p>
        <ul>
          <li>\`control: 'text'\` - Text input</li>
          <li>\`control: 'number'\` - Number input</li>
          <li>\`control: 'boolean'\` - Toggle switch</li>
          <li>\`control: 'select'\` - Dropdown menu</li>
          <li>\`control: 'radio'\` - Radio buttons</li>
          <li>\`control: 'color'\` - Color picker</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Best Practices</h2>
        <ul>
          <li>✅ Create stories for all main variants</li>
          <li>✅ Show different states (default, loading, error, disabled)</li>
          <li>✅ Use the \`render\` function for complex compositions</li>
          <li>✅ Add \`tags: ['autodocs']\` for automatic documentation</li>
          <li>✅ Use descriptive story names</li>
          <li>❌ Don't create stories for internal/private components</li>
        </ul>
      </section>

      <section
        style={{
          background: '#f0f9ff',
          border: '1px solid #0ea5e9',
          borderRadius: '8px',
          padding: '1.5rem',
          marginTop: '2rem',
        }}
      >
        <strong>💡 Tip:</strong> Check existing stories in the project for examples and patterns!
      </section>
    </div>
  ),
};
