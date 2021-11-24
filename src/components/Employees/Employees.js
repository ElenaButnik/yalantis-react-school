import React from "react";
import ListByLetter from "../ListByLetter/ListByLetter";
import { getAlphabetMap, alphabet } from "../../helpers/alphabet.helper";
import PropTypes from "prop-types";
import s from "./Employees.module.css";

export default function Employees({ data }) {
  const users = getAlphabetMap(data);
  return (
    <div className={s.employees}>
      <h2>Employees</h2>
      <div className={s.alphabet}>
        <ul>
          {alphabet.map((item, i) => {
            return (
              <div key={i}>
                <li className={s.alphabetLetter}>
                  <div className={s.letter}>{item}</div>
                  <div className={s.usersByLetter}>
                    {users.get(item) ? (
                      <ListByLetter users={users.get(item)} />
                    ) : (
                      <div className={s.noEmployees}>No Employees</div>
                    )}
                  </div>
                </li>
                <hr />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

Employees.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      dob: PropTypes.string,
    })
  ).isRequired,
};
