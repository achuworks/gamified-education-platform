declare module 'react-session-api' {
    export class Session {
      static set(key: string, value: any): void;
      static get<T = any>(key: string): T | null;
      static has(key: string): boolean;
      static remove(key: string): void;
    }
  }
  