declare module 'del' {

  interface IOptions {
    force?: boolean;
    dryRun?: boolean;
    cwd?: string;
  }

  interface IDel {
    (patterns: string[], opts?: IOptions): Promise.IThenable<any>;
  }

  const del: IDel;
  export = del;
}
