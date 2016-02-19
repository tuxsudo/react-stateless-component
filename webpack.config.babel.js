import test from './webpack-configs/test.js';
import demo from './webpack-configs/demo.js';

const config = process.env.NODE_ENV === "test" ? test : demo;

export default config;
