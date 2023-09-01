
interface SocialLinkProps {
  icon: JSX.Element;
  href: string;
}

export function SocialLink({ icon: Icon, href ,...props }: SocialLinkProps) {
  return (
    <a className="group -m-1 p-1" href={href} {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
}