declare module 'gulp-typescript' {

  // TODO(tsm)
  // interface IOptions {}

  interface IPlumber {
    (opts?: Object): NodeJS.ReadWriteStream;

    createProject(tsconfig: string, opts?: Object): any;
  }

  const typescript: IPlumber;
  export = typescript;
}
