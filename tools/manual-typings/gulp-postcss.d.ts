declare module 'gulp-postcss' {

  interface IPostcss {
    (processors: Array<any>): NodeJS.ReadWriteStream;
  }

  const postcss: IPostcss;
  export = postcss;
}
