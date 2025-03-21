import { Container } from '@components/Container.tsx'
import { type ReactNode } from 'react'

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="transition hover:text-blue-500 dark:hover:text-blue-400">
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/stack">Stack</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Ricardo Boraure. All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
