import style from './style.scss';
import homer from './homer.png';


export default ({ name="Jared", points = 1000, clickAction=()=>{} }) => (
    <div className={style.container} onClick={clickAction}>
        <img className={style.image} src={homer} />
        <span className={style.name}>{name}</span>
        <span className={style.points}>{points}</span>
    </div>
);
