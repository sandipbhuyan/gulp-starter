declare module 'require-dir' {

  interface IOptions {
    recurse?: boolean;
    duplicates?: boolean;
    camelcase?: boolean;
  }

  interface IRequireDir {
    (dir: string, options?: IOptions): Object;
  }

  const requireDir: IRequireDir;
  export = requireDir;
}
