declare module 'gulp-progeny' {

  interface IOptions {
    extension?: string;
    extensionsList?: string[];
    regexp?: RegExp;
    prefix?: string;
    exclusion?: RegExp;
    directoryEntry?: string;
    rootPath?: string;
    debug?: boolean;
  }

  interface IProgeny {
    (opts?: IOptions): NodeJS.ReadWriteStream;
  }

  const progeny: IProgeny;
  export = progeny;
}
