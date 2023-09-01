export interface ProjectsPage extends pageMetaData {
  title: string
  description: string
  projects: Project[]
}

interface Project {
  title: string
  description: string
  image: string
  linkLabel: string
  linkHref: string
}