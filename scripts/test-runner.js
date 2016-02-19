import webpack from 'webpack';
import memfs from 'memory-fs';
import config, { testFiles } from '../webpack-configs/test.js';



const fs = new memfs();

const buildTests = () => new Promise( (resolve, reject) => {
    try {
        const compiler = webpack(config);
        compiler.outputFileSystem = fs;

        compiler.run( (err, stats) => {
            if(err) return reject(err);
            resolve(stats);
        });
    } catch(error) {
        reject(error);
    }
});


(async ()=>{
    try {
        await buildTests();
        testFiles
            .map(file=>fs.readFileSync(file, 'utf8') )
            .map( d => eval(d) );

    } catch(error) {
        process.stderr.write(error);
        process.exit(1);
    }

})()
