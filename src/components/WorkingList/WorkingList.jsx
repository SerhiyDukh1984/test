import s from './WorkingList.module.css';

export const WorkingList = () => {
  return (
    <section className={s.work__list}>
      <ul className={s.list}>
        <li className={s.item}></li>
      </ul>
      <button className={s.button} type="button">
        Show more
      </button>
    </section>
  );
};
