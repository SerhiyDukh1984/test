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
          <h2 className={s.select__title}>Select your position</h2>
          <label className={s.label}>
            <input className={s.radio} name="name" type="radio" />
            Frontend developer
          </label>
          <label className={s.label}>
            <input className={s.radio} name="name" type="radio" />
            Backend developer
          </label>
          <label className={s.label}>
            <input className={s.radio} name="name" type="radio" />
            Designer
          </label>
          <label className={s.label}>
            <input className={s.radio} name="name" type="radio" />
            QA
          </label>
        </div>

        <div className={s.upload__form}>
          <button className={s.upload} type="submit">
            Upload
          </button>
          <label className={s.upload__label}>
            <input
              className={s.input__upload}
              type="file"
              name="image"
              placeholder="Upload your photo"
            />
            <p className={s.upload__text}>Upload your photo</p>
          </label>
        </div>
        <button className={s.submit} type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
};
