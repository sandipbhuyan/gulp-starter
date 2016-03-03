declare module 'postcss-filter-stream' {

  interface IFilterStream {
    (filter: string | string[], postcssPlugin: Object): NodeJS.ReadWriteStream;
  }

  const filterStream: IFilterStream;
  export = filterStream;
}
