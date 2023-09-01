export interface Home {
  metaTitle: string;
  metaDescription: string;
  metaImage: string;
  title: string;
  description: string;
  jobs: Job[];
}

export interface Job {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  isActual: boolean;
  image: string;
}