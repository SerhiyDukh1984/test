import s from './Form.module.css';

export const Form = () => {
  return (
    <section className={s.working__form}>
      <h2 className={s.title}>Working with POST request</h2>
      <form className={s.form}>
        <label>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Your name"
          />
        </label>
        <label>
          <input
            className={s.input}
            type="email"
            name="name"
            placeholder="Email"
          />
        </label>
        <label>
          <input
            className={s.input}
            type="tel"
            name="name"
            placeholder="Phone"
          />
        </label>
        <p className={s.text}>+38 (XXX) XXX - XX - XX</p>
        <div className={s.select}>
          <h3 className={s.select__title}>Select your position</h3>
          <label>
            <input className={s.radio} type="radio" />
            Frontend developer
          </label>
          <label>
            <input className={s.radio} type="radio" />
            Backend developer
          </label>
          <label>
            <input className={s.radio} type="radio" />
            Designer
          </label>
          <label>
            <input className={s.radio} type="radio" />
            QA
          </label>
        </div>

        <form className={s.upload__form}>
          <button className={s.upload} type="bsubmit">
            Upload
          </button>
          <label>
            <input
              className={s.input__upload}
              type="file"
              placeholder="Upload your photo"
            />
          </label>
        </form>
        <button className={s.submit} type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
};
