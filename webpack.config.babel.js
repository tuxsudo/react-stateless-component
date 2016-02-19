import test from './webpack-configs/test.js';
import demo from './webpack-configs/demo.js';

export default process.env.NODE_ENV === "test" ? test : demo;
