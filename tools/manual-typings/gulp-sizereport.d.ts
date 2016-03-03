declare module 'gulp-sizereport' {

  interface IOptions {
    total?: boolean;
    gzip?: boolean;
    minifier?: Function;
  }

  interface ISizereport {
    (opts?: IOptions): NodeJS.ReadWriteStream;
  }

  const sizereport: ISizereport;
  export = sizereport;
}
