declare module 'gulp-rev-napkin' {

  interface IOptions {
    verbose?: boolean;
    force?: boolean;
  }

  interface IRevNapkin {
    (opts?: IOptions): NodeJS.ReadWriteStream;
  }

  const revNapkin: IRevNapkin;
  export = revNapkin;
}
