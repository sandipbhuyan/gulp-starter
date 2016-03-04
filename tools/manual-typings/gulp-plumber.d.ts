declare module 'gulp-plumber' {

  interface IOptions {
    inherit?: boolean;
    errorHandler?: boolean | Function;
  }

  interface IPlumber {
    (opts?: IOptions): NodeJS.ReadWriteStream;

    stop(): any;
  }

  const plumber: IPlumber;
  export = plumber;
}
