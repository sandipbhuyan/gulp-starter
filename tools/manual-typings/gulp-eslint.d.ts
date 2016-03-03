declare module 'gulp-eslint' {

  interface IOptions {
    rules?: Object;
    globals?: Object;
    fix?: boolean;
    quiet?: boolean;
    envs?: Array<any> | Object;
    rulePaths?: string[];
    configFile?: string;
    warnFileIgnored?: boolean;
    useEslintrc?: boolean;
  }

  interface IEsLint {
    (opts?: IOptions): NodeJS.ReadWriteStream;

    result(): any;

    results(): any;

    failOnError(): any;

    failAfterError(): any;

    format(): any;

    formatEach(): any;

  }

  const esLint:IEsLint;
  export = esLint;
}
