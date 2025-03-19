/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  PUBLIC_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
