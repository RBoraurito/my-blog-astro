export interface StackPage extends pageMetaData {
  title: string;
  description: string;
  sections: StackSection[];
}

interface StackSection {
  title: string;
  tech: Tech[];
}

interface Tech {
  title: string;
  link?: string;
  description: string;
}