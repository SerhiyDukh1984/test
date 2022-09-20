import { getUsers } from 'components/Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';

import s from './UserCard.module.css';

export const UserCard = () => {
  const [users, setUsers] = useState([]);
  console.log('🚀 ~ users', users);
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  console.log('🚀 ~ totalPages', totalUsers);

  useEffect(() => {
    getUsers(page).then(response => {
      setUsers([...users, ...response.users]);
      setPage(page + 1);
      setTotalUsers(response.total_users);
    });
  }, []);

  const sortUsers = users.sort(function (a, b) {
    return a.registration_timestamp > b.registration_timestamp;
  });
  console.log('🚀 ~ sortUsers', sortUsers);

  const handleClick = () => {
    getUsers(page).then(response => {
      setUsers([...users, ...response.users]);
      setPage(page + 1);
    });
  };

  return (
    <>
      <ul className={s.list}>
        {users !== [] &&
          sortUsers.map(user => (
            <li key={user.id} className={s.item}>
              <img src={user.photo} className={s.image} />
              <h3 className={s.title}>{user.name}</h3>
              <p className={s.text}>{user.position}</p>
              <p className={s.text}>{user.email}</p>
              <p className={s.text}>{user.phone}</p>
            </li>
          ))}
      </ul>
      {users.length !== totalUsers && (
        <button className={s.button} type="button" onClick={handleClick}>
          Show more
        </button>
      )}
    </>
  );
};
