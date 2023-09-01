import Head from 'next/head'

import { Card } from 'components/Card'
import { Section } from 'components/Section'
import { SimpleLayout } from 'components/SimpleLayout'
import { ReactNode } from 'react';

import * as content from 'content/en/stack.md'
import { StackPage } from 'types/stack';
import { marked } from 'marked';
import { markedUseLink } from 'utils/marked.use';

markedUseLink(marked)

interface ToolsSectionProps {
  children: JSX.Element;
  title: string;
  [key: string]: any;
}

const {
  metaTitle,
  metaDescription,
  metaImage,
  title,
  description,
  sections
} = content as unknown as StackPage

export default function Uses() {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta
          name="description"
          content={metaDescription}
        />
        <meta name='og:image' content={metaImage} />
      </Head>
      <SimpleLayout
        title={title}
        intro={description}
      >
        <div className="space-y-20">
          {sections.map(section => (
            <ToolsSection key={section.title} title={section.title}>
              <>
                {section.tech.map(tech => (
                  <Tool key={tech.title} href={tech.link} title={tech.title}>
                    <div dangerouslySetInnerHTML={{__html: marked.parse(tech.description)}}></div>
                  </Tool>
                ))}
              </>
            </ToolsSection>
          ))}
          <ToolsSection title="Testing">
            <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">Comming soon...</p>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}

function ToolsSection({ children, title, ...props }: ToolsSectionProps) {
  return (
    <Section title={title} {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

interface ToolProps {
  title: string;
  href?: string;
  children: ReactNode; 
}

function Tool({ title, href, children }: ToolProps) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href} target="_blank" hasOverallLink={false}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}
