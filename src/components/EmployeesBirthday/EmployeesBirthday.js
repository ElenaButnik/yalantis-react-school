import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { getMonthArray } from "../../helpers/month.helper";
import UserBirthdayItem from "../UserBirthdayItem/UserBirthdayItem";
import s from "./EmployeesBirthday.module.css";

export default function EmployeesBirthday() {
  const { users } = useContext(UserContext);

  return (
    <div className={s.EmployeesBirthday}>
      <h2>Employees birthday</h2>
      <hr/>
      {users.length === 0 ? (
        <div className={s.emptyList}>Employees List is empty</div>
      ) : (
        <div className={s.birthdays}>
          <ul>
            {getMonthArray().map((item, id) => {
              return (
                <li key={id} className={s.usersByMonth}>
                  <div className={s.monthName}>{item}</div>
                  <div className={s.birthdayList}>
                    <UserBirthdayItem users={users} month={item} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
