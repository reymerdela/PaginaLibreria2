import style from "./loading.module.css";
const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.book}>
        <div className={style.inner}>
          <div className={style.left}></div>
          <div className={style.middle}></div>
          <div className={style.right}></div>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default Loading;
