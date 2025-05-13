import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-right' | 'fade-in-left' | 'fade-in' | 'scale-in';
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export function ScrollAnimation({
  children,
  className,
  animation = 'fade-in-up',
  threshold = 0.2,
  triggerOnce = true,
  delay = 0,
}: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        inView && `animate-${animation}`,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}