import { tmpdir } from 'os';
import spawn from 'cross-spawn';
import {sync as globSync} from 'glob';
import {name as pkgName} from '../package.json';


const runTest = file => {
    var p = spawn('node', [file]);

    p.stdout.pipe(process.stdout);
    p.stderr.pipe(process.stderr);
}

globSync(`${tmpdir()}/${pkgName}/*.spec.js`)
    .map(runTest);
