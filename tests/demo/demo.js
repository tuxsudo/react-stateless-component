import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from '../../src/index.js';

// Create demo here...
const demo = (
    <div>
        <MyComponent points={100000} />
        <MyComponent name="You" points={0} />
    </div>
);


ReactDOM.render(
    demo,
    document.getElementById('app')
);
