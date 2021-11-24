import React from "react";
import moment from "moment";
import { getBirthdayMap } from "../../helpers/month.helper";
import s from "./UserBirthdayItem.module.css";
import PropTypes from "prop-types";

export default function UserBirthdayItem({ users, month }) {
  return (
    <div>
      {getBirthdayMap(users).get(month) ? (
        <ul>
          {getBirthdayMap(users)
            .get(month)
            .map((user) => {
              return (
                <li key={user.id} className={s.userBirthday}>
                  {`${user.firstName} ${user.lastName} - ${moment(
                    user.dob
                  ).format("DD MMMM, YYYY")} year`}
                </li>
              );
            })}
        </ul>
      ) : (
        <div className={s.noUsers}>No Employees</div>
      )}
    </div>
  );
}

UserBirthdayItem.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      dob: PropTypes.string,
    }).isRequired
  ).isRequired,
  month: PropTypes.string,
};
