import { Button } from "@components/Button"
import { ArrowDownIcon } from "@components/icon/ArrowDown"
import { BriefcaseIcon } from "@components/icon/Briefcase"

import content from '../../content/home.yaml'
import type { Home } from '../../types/home';
import {format} from 'date-fns'
import { JobDateFormat } from '../../values/dateFormats';

const { jobs } = content as unknown as Home

const formatDate = (date: string) => {
  console.log(new Date(date))
  return format(new Date(date), JobDateFormat)}

export function Resume() {

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {jobs.map((role) => (
          <li key={role.company} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <img src={role.image} width={40} height={40} alt="" className="h-7 w-7 rounded-full" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.position}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.startDate} until ${role.endDate
                }`}
              >
                <time dateTime={new Date(role.startDate).toDateString()}>
                  {formatDate(role.startDate)}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                {role.isActual ? (
                  <span>Current</span>
                ) : (
                  <time dateTime={new Date(role.endDate).toDateString()}>
                    {formatDate(role.endDate)}
                  </time>
                )}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/cv.pdf" target="_blank" download variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}