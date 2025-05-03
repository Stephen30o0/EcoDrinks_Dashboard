'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value = 0, max = 100, ...props }, ref) => {
  // Validate the `max` and `value` props
  if (typeof max !== 'number' || max <= 0) {
    console.error(`Invalid 'max' prop: ${max}. Defaulting to 100.`);
    max = 100;
  }

  if (typeof value !== 'number' || value < 0 || value > max) {
    console.error(`Invalid 'value' prop: ${value}. It must be between 0 and ${max}. Defaulting to 0.`);
    value = 0;
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value / max) * 100}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
