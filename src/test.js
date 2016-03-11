import MyComponent from './index.js';
import styles from './style.css';
import test from 'tape';
import { shallow } from 'enzyme';

test('<MyComponent> shallow testing', t => {

    const defaultInst = shallow( <MyComponent /> );
    t.ok( defaultInst.hasClass( styles.container), 'it appends the classnames' );

    t.equal("Jared", defaultInst.find(`.${styles.name}`).text(), 'it has default name');
    t.equal("1000", defaultInst.find(`.${styles.points}`).text(), 'it has default points');

    const customInst = shallow( <MyComponent name="sara" points={2000} /> );
    t.equal("sara", customInst.find(`.${styles.name}`).text(), 'it overrides name');
    t.equal("2000", customInst.find(`.${styles.points}`).text(), 'it overrides points');


    let myval = 0,
        incrementer = () => myval++;

    const customInst2 = shallow( <MyComponent clickAction={incrementer} /> );
    customInst2.simulate('click');
    t.equal(myval, 1, 'it properly executes click event');

    t.end();
});
