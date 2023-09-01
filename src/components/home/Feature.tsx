import { CheckIcon } from '@heroicons/react/24/outline'
import { Container } from 'components/Container'

const features = [
  {
    name: 'Invite team members',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'List view', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  {
    name: 'Keyboard shortcuts',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

export function Feature() {
  return (
    <Container>
      <dl className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 mx-auto max-w-7xl py-8 sm:py-12 lg:py-16">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <CheckIcon className="absolute mt-1 h-6 w-6 text-blue-700 dark:text-zinc-100" aria-hidden="true" />
              <p className="ml-10 text-lg font-semibold leading-8 text-zinc-800 dark:text-zinc-100">{feature.name}</p>
            </dt>
            <dd className="mt-2 ml-10 text-base leading-7 text-zinc-600 dark:text-zinc-400">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </Container>
  )
}