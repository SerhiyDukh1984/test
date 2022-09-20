import s from './Header.module.css';

export const Header = () => {
  return (
    <section className={s.header}>
      <div className={s.container}>
        <div className={s.logo}></div>
        <div className={s.nav}>
          <button className={s.button} type="button">
            Users
          </button>
          <button className={s.button} type="button">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};
