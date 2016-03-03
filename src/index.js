import style from './lib/style.css';
import homer from './lib/homer.png';

// This is the exported JSX/React Component
export default ({ name="Jared", points = 1000, clickAction=()=>{} }) => (
    <div className={style.container} onClick={clickAction}>
        <img className={style.image} src={homer} />
        <span className={style.name}>{name}</span>
        <span className={style.points}>{points}</span>
    </div>
);
