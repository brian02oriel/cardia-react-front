/// <reference path="../.astro/types.d.ts" />
interface IImportMetaEnv {
    readonly PUBLIC_API_URL: string;
  }
  
  interface ImportMeta {
    readonly env: IImportMetaEnv;
  }