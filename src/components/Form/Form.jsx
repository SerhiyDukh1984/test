import { addUser } from 'components/Api/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './Form.module.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');
  console.log('🚀 ~ photo', photo);

  let inputFile = document.getElementById('file-input');
  let fileNameField = document.getElementById('file-name');

  const handleChange = e => {
    const { name, value } = e.target;
    console.log('🚀 ~ value', value);

    if (name === 'name') {
      setName(value);
    }

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'phone') {
      setPhone(value);
    }

    if (name === 'photo') {
      setPhoto(value);
    }
  };

  const formData = {
    name: name,
    email: email,
    phone: phone,
    photo: photo,
  };

  console.log('🚀 ~ formData', formData);

  const handleSubmit = e => {
    e.preventDefault();

    addUser({ formData });
  };

  return (
    <section className={s.working__form}>
      <h2 className={s.title}>Working with POST request</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            className={s.input}
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
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
          <label className={s.upload__label}>
            <input
              className={s.input__upload}
              id="file-input"
              type="file"
              name="photo"
            />
            &nbsp;Upload
          </label>

          <span className={s.upload__text} id="file-name">
            Upload your photo
          </span>
        </div>
        <button className={s.submit} type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
};
