import React from "react";
import styles from '../styles/Table.module.css'

class Table extends React.Component {
  render() {
    return (
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Age</th>
            <th className={styles.th}>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>John Doe</td>
            <td className={styles.td}>30</td>
            <td className={styles.td}>Male</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Jane Smith</td>
            <td className={styles.td}>25</td>
            <td className={styles.td}>Female</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Bob Johnson</td>
            <td className={styles.td}>40</td>
            <td className={styles.td}>Male</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
