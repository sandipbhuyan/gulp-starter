declare module 'gulp-postcss' {

  interface IPostcss {
    (processors: Array<any>, opts?: Object): NodeJS.ReadWriteStream;
  }

  const postcss: IPostcss;
  export = postcss;
}
