declare module 'gulp-notify' {

  import nodeNotifier = require('node-notifier');

  interface IOptions extends nodeNotifier.Notification {
    onLast?: boolean;
    emitError?: boolean;
    templateOptions?: Object;
    notifier?: Function;
  }

  interface INotify {
    (opts?: IOptions | string | Function): NodeJS.ReadWriteStream;

    on(): any;

    withReporter(): any;

    onError(message: string | Function): any;

    logLevel(): any;
  }

  const notify:INotify;
  export = notify;
}
