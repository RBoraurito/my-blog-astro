import Link from 'next/link'
import clsx from 'clsx'
import { ChevronRightIcon } from 'components/icon/ChevronRight'
import React, { ReactNode } from 'react';

interface CardProps {
  as?: string;
  className?: string;
  children: ReactNode;
}

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export function Card({ as: Component = 'div', className, children }: CardProps) {
  const Wrapper = ({children,...props}: WrapperProps) => <Component {...props}>{children}</Component>

  return (
    <Wrapper
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Wrapper>
  )
}


interface CardLinkProps {
  children: ReactNode;
  href?: string;
  target?: string;
  hasOverallLink?: boolean;
  [key: string]: any;
}

Card.Link = function CardLink({ children, href, target, hasOverallLink = true,...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link href={href} target={target} {...props}>
        {hasOverallLink && (
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        )}
        <span className="relative z-10 hover:underline">{children}</span>
      </Link>
    </>
  )
}

interface CardTitleProps {
  as?: string;
  href?: string;
  hasOverallLink?: boolean;
  children: ReactNode;
  target?: string;
}

Card.Title = function CardTitle({ as: Component = 'h2', href, target = '', hasOverallLink = true, children }: CardTitleProps) {
  const Wrapper = ({children,...props}: WrapperProps) => <Component {...props}>{children}</Component>

  return (
    <Wrapper className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href} target={target} hasOverallLink={hasOverallLink}>{children}</Card.Link> : children}
    </Wrapper>
  )
}

Card.Description = function CardDescription({ children }) {
  return (
    <div className="prose relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </div>
  )
}

Card.Cta = function CardCta({ children }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

interface CardEyebrowProps extends CardProps {
  decorate?: boolean;
  [key: string]: any;
}

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps) {

  const Wrapper = ({children,...props}: WrapperProps) => <Component {...props}>{children}</Component>

  return (
    <Wrapper
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      <>
        {decorate && (
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          </span>
        )}
        {children}
      </>
    </Wrapper>
  )
}
