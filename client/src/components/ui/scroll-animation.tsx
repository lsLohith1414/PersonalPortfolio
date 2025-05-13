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

  // Custom animation classes
  const getAnimationClass = () => {
    if (!inView) return '';
    
    switch (animation) {
      case 'fade-in-up':
        return 'animate-[fadeInUp_0.6s_ease-out_forwards]';
      case 'fade-in-right':
        return 'animate-[fadeInRight_0.6s_ease-out_forwards]';
      case 'fade-in-left':
        return 'animate-[fadeInLeft_0.6s_ease-out_forwards]';
      case 'fade-in':
        return 'animate-[fadeIn_0.6s_ease-out_forwards]';
      case 'scale-in':
        return 'animate-[scaleIn_0.4s_ease-out_forwards]';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        getAnimationClass(),
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}