import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import PropTypes from "prop-types";
import "./UserItem.css";

export default function UserItem({ user }) {
  const [checked, setChecked] = useState(false);
  const { users, updateUsers } = useContext(UserContext);

  useEffect(() => {
    if (users.find((item) => item.id === user.id)) {
      setChecked(true);
    }
  }, [users, user]);

  return (
    <div className='userContainer'>
      <div
        className={`userName ${checked && 'selected'}`}
      >{`${user.firstName} ${user.lastName}`}</div>
      <span className='radioButtons'>
        <div className='buttonItem'>
          <input
            type="radio"
            name={user.id}
            value={true}
            checked={checked}
            onChange={() => {
              setChecked(true);
              updateUsers({
                type: "selectUser",
                payload: {
                  user,
                },
              });
            }}
          />
          active
        </div>

        <div className='buttonItem'>
          <input
            type="radio"
            name={user.id}
            value={false}
            checked={!checked}
            onChange={() => {
              setChecked(false);
              updateUsers({
                type: "unselectUser",
                payload: {
                  user,
                },
              });
            }}
          />
          not active
        </div>
      </span>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dob: PropTypes.string,
  }).isRequired,
};
