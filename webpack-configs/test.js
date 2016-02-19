import base from './base.js';
import {sync as globSync} from 'glob';
import path from 'path';

// the output path
const outpath = path.join(__dirname, 'build');

// find all the entry test files
// produces an array files paths, eg: [/path/to/file/0]
const srcFiles = globSync(path.normalize(__dirname + '/../test') + '/**/*.spec.js');

// the entries object derived from srcFiles
// produces an obj like { 0: /path/to/file/0, 2: /path/to/file/1 }
const entryFiles = srcFiles.reduce( (l, c, i) => ({...l, [i]: c }), {});

// export the array of test that webpack will build
// eg: [/path/0.spec.js, /path/1.spec.js]
export const testFiles = Object.keys(entryFiles)
    .map( f => `${f}.spec.js`)
    .map( f => path.join(outpath, f) );

// export the webpack config required to build tests...
export default {
    ...base,
    entry: entryFiles,
    target: "node",
    output: {
        path: outpath,
        filename: "[name].spec.js"
    },
    externals: {
        'cheerio': 'global',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
}
