import base from './base.js';
import {tmpdir} from 'os';
import {sync as globSync} from 'glob';
import {name as pkgName} from '../package.json';
import path from 'path';

export default {
    ...base,
    entry: globSync( path.normalize(__dirname + '/../test') + '/**/*.spec.js'),
    target: "node",
    output: {
        path: `${tmpdir()}/${pkgName}`,
        filename: "[name].spec.js"
    },
    externals: {
        'cheerio': 'global',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
}
