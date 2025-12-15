import { cva } from 'class-variance-authority';

export const toggleVariants = cva(
  'inline-flex h-9 w-9 appearance-none items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border',
      },
      size: {
        default: 'h-9 w-9',
        sm: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export default toggleVariants;
