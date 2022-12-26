/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_UPDATE: string;
    readonly VITE_API_ROOMS: string;
    // more env variables...
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}