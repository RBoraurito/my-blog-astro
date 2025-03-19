interface MetaData extends pageMetaData {
  author: string;
  publishDate: string;
}

interface pageMetaData {
  metaTitle: string;
  metaDescription: string;
  metaImage: string;
}

declare module "*.yml" {
  const value: any; // Add type definitions here if desired
  export default value;
}
