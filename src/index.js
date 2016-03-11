// The default export of this file becomes the main component
import style from './style.css';
import homer from './assets/homer.png';
import props from './props.js';

// This is the exported JSX/React Component
export default ({ name=props.name, points=props.points, clickAction=props.clickAction, className }) => (
    <div className={`${style.container} ${className}`} onClick={clickAction}>
        <img className={style.image} src={homer} />
        <span className={style.name}>{name}</span>
        <span className={style.points}>{points}</span>
    </div>
);
