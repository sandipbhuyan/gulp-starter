declare module 'postcss-scss' {

  interface IPostcssScss {
    (): any;
  }

  const postcssScss: IPostcssScss;
  export = postcssScss;
}
