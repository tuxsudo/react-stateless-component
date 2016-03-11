import MyComponent from './index.js';
import demoStyle from './assets/demo.css';

function stringifyProps(data) {
    return JSON.stringify(data, (k, v) => {
        if(typeof v === "function") {
            return v.name || v.toString();
        }

        return v;
    }, 4);
}


const demoData = [
    {
        name: "Jared",
        points: 1000,
        clickAction: () => console.log('click') // eslint-disable-line
    },
    {
        name: "Sara",
        points: 999
    },
    {
        name: "ET",
        points: -1
    },
    {
        name: "X",
        points: 0
    },
    {
        name: "Mac",
        points: 0
    },
    {
        name: "AAA",
        points: 2
    },
    {
        name: "Mija",
        points: 2
    }
];



export default (
    <div>

        <div className={demoStyle.container}>
            <MyComponent />
            <h5>Default (no props provided)</h5>
        </div>

        <hr />

        {demoData.map( (d, i) => (
            <div className={demoStyle.container} key={i}>
                <MyComponent {...d} className={demoStyle.component} />
                <code className={demoStyle.code}>{stringifyProps(d)}</code>
            </div>
        ))}
    </div>
);
