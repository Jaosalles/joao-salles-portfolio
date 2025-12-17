import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';

const meta = {
  title: 'Layout/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component that can be opened and closed to show or hide content.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">More Information</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2 px-4 text-sm">
          <p>This is additional information that can be toggled.</p>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleItem = (id: string) => {
      setOpenItems(prev => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    return (
      <div className="w-[400px] space-y-4">
        {['item1', 'item2', 'item3'].map(item => (
          <Collapsible
            key={item}
            open={openItems[item] || false}
            onOpenChange={() => toggleItem(item)}
          >
            <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-md">
              <h4 className="text-sm font-semibold">Section {item.charAt(item.length - 1)}</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openItems[item] ? 'rotate-180' : ''}`}
                  />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 py-2 text-sm border border-t-0 bg-muted">
              <p>Content for {item}. This is hidden by default.</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    );
  },
};

export const FAQ: Story = {
  render: () => {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleItem = (id: string) => {
      setOpenItems(prev => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    const faqs = [
      { id: 'q1', q: 'What is this?', a: 'This is a collapsible FAQ component.' },
      { id: 'q2', q: 'How do I use it?', a: 'Click on the question to reveal the answer.' },
      {
        id: 'q3',
        q: 'Can I customize it?',
        a: 'Yes, you can customize the appearance with CSS classes.',
      },
    ];

    return (
      <div className="w-[500px] space-y-2">
        <h2 className="text-lg font-bold mb-4">Frequently Asked Questions</h2>
        {faqs.map(faq => (
          <Collapsible
            key={faq.id}
            open={openItems[faq.id] || false}
            onOpenChange={() => toggleItem(faq.id)}
            className="border rounded-md"
          >
            <CollapsibleTrigger className="flex items-center gap-2 w-full px-4 py-3 hover:bg-muted">
              <ChevronDown
                className={`h-4 w-4 transition-transform ${openItems[faq.id] ? 'rotate-180' : ''}`}
              />
              <span className="font-semibold text-sm">{faq.q}</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-3 bg-muted border-t text-sm">
              {faq.a}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[400px]">
        <div className="border rounded-md">
          <div className="flex items-center justify-between space-x-4 px-4 py-3">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Advanced Settings</h4>
              <p className="text-xs text-muted-foreground">Click to configure advanced options</p>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="border-t px-4 py-3 bg-muted space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Option 1</span>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Option 2</span>
              <input type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
              <span>Option 3</span>
              <input type="checkbox" defaultChecked />
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    );
  },
};

export const Tree: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

    const toggleExpand = (id: string) => {
      setExpanded(prev => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    return (
      <div className="w-[350px] space-y-1 font-mono text-sm">
        <Collapsible open={expanded['root']} onOpenChange={() => toggleExpand('root')}>
          <CollapsibleTrigger className="flex items-center gap-2">
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded['root'] ? 'rotate-180' : ''}`}
            />
            📁 root
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-6 space-y-1">
            <Collapsible open={expanded['src']} onOpenChange={() => toggleExpand('src')}>
              <CollapsibleTrigger className="flex items-center gap-2">
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expanded['src'] ? 'rotate-180' : ''}`}
                />
                📁 src
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-6 space-y-1">
                <div>📄 index.ts</div>
                <div>📄 App.tsx</div>
              </CollapsibleContent>
            </Collapsible>
            <div>📁 public</div>
            <div>📄 package.json</div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};
