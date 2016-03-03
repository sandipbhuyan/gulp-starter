declare module 'watchify' {

  import BrowserifyObject = Browserify.BrowserifyObject;

  interface IWatchify {
    (opts: BrowserifyObject): BrowserifyObject;

    args: Object;
  }

  const watchify: IWatchify;
  export = watchify;
}
