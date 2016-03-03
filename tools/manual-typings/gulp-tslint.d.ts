declare module 'gulp-tslint' {
  import vinyl = require('vinyl');

  namespace gulpTsLint {
    interface GulpTsLint {
      (options?:Options): NodeJS.ReadWriteStream;
      report(reporter?:any, options?:any): NodeJS.ReadWriteStream;
      // report(reporter?: Reporter, options?: ReportOptions): NodeJS.ReadWriteStream;
      report(options?:ReportOptions): NodeJS.ReadWriteStream;
    }

    interface Options {
      configuration?: {};
      rulesDirectory?: string;
      tslint?: GulpTsLint;
    }

    interface ReportOptions {
      emitError?: boolean;
      reportLimit?: number;
      summarizeFailureOutput?: boolean;
    }

    interface Position {
      position: number;
      line: number;
      character: number;
    }

    interface Output {
      name: string;
      failure: string;
      startPosition: Position;
      endPosition: Position;
      ruleName: string;
    }

    type Reporter = string|((output:Output[], file:vinyl, options:ReportOptions) => any);
  }

  var gulpTsLint:gulpTsLint.GulpTsLint;
  export = gulpTsLint;
}
