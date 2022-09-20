// import { getToken, getUsers } from 'components/Api/Api';

import { UserCard } from 'components/UserCard/UserCard';

import s from './WorkingList.module.css';

export const WorkingList = () => {
  return (
    <section className={s.work__list}>
      <h2 className={s.title}>Working with GET request</h2>
      <UserCard />
    </section>
  );
};
