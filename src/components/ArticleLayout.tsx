import { Container } from "@components/Container";
import { formatDate } from "../lib/formatDate";
import { Prose } from "@components/Prose";
import { ArrowLeftIcon } from "@components/icon/ArrowLeft";
import { type ReactNode } from "react";
import type { Article } from "../lib/getAllArticles";

export interface ArticleLayoutProps {
  children: JSX.Element;
  meta: Omit<Article, "content">;
  isRssFeed?: boolean;
  previousPathname: string;
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: ArticleLayoutProps) {
  if (isRssFeed) {
    return children;
  }

  return (
    <>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => history.go(-1)}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.publishDate}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.publishDate)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}
