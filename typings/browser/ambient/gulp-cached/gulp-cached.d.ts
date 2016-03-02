// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/0dcd0aec0b31a86ea4d6490952176c22039a2dce/gulp-cached/gulp-cached.d.ts
// Type definitions for gulp-cached
// Project: https://github.com/wearefractal/gulp-cached
// Definitions by: Thomas Corbière <https://github.com/tomc974>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "gulp-cached"
{
    interface ICacheStore
    {
        [name: string]: {};
    }

    interface IOptions
    {
        /**
         * Uses md5 instead of storing the whole file contents.
         * @default false
         */
        optimizeMemory?: boolean;
    }

    interface IGulpCached
    {
        /**
         * Creates a new cache hash or uses an existing one.
         */
        (name: string, options?: IOptions): NodeJS.ReadWriteStream;

        /**
         * Cache store.
         */
        caches: ICacheStore;
    }

    const cached: IGulpCached;
    export = cached;
}