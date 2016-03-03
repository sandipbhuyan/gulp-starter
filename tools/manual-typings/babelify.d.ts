declare module 'babelify' {

  interface IConfigureOptions {
    presets?: string[];
    ignore?: RegExp;
    only?: RegExp;
  }

  interface IBabelify {
    (): NodeJS.ReadWriteStream;

    configure(opts: IConfigureOptions): NodeJS.ReadWriteStream;
  }

  const babelify: IBabelify;
  export = babelify;
}
