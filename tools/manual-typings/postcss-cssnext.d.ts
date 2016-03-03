declare module 'postcss-cssnext' {

  interface IOptions {
    browsers?: string[];
    features?: Object;
  }

  interface ICssnext {
    (opts?: IOptions): NodeJS.ReadWriteStream;
  }

  const cssnext: ICssnext;
  export = cssnext;
}
