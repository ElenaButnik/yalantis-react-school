import React from 'react';
import UserItem from '../UserItem/UserItem';
import PropTypes from 'prop-types';
import s from './ListByLetter.module.css';

export default function ListByLetter ({ users }){
    return (
        <div className={s.listByLetter}>
            {users.map(user => {
                return <UserItem user={user} key={user.id} />;
            })}
        </div>
    );
};

ListByLetter.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            dob: PropTypes.string,
        }).isRequired,
    ).isRequired,
};


