import { getUsers } from 'components/Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';

import s from './UserCard.module.css';

export const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    getUsers(page).then(response => {
      setUsers([...users, ...response.users]);
      setPage(page + 1);
      setTotalUsers(response.total_users);
    });
    // eslint-disable-next-line
  }, []);

  const sortUsers = users.sort(function (a, b) {
    return a.registration_timestamp > b.registration_timestamp;
  });

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
              <img src={user.photo} alt="user foto" className={s.image} />
              <h3 className={s.title}>{user.name}</h3>
              <div className={s.info}>
                <p className={s.text}>{user.position}</p>
                <p className={s.text}>{user.email}</p>
                <p className={s.text}>{user.phone}</p>
              </div>
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
