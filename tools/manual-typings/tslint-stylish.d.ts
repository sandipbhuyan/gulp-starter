declare module 'tslint-stylish' {

  interface IOptions {
    emitError?: boolean;
    sort?: boolean;
    bell?: boolean;
  }

  interface ITslintStylish {
    (opts?: IOptions): any;
  }

  const tslintStylish: ITslintStylish;
  export = tslintStylish;
}
