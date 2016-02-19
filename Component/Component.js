import style from './style.css';

export default ({ name="Jared", points = 1000, clickAction=()=>{} }) => (
    <div className={style.container} onClick={clickAction}>
        <span className={style.name}>{name}</span>
        <span className={style.points}>{points}</span>
    </div>
);
