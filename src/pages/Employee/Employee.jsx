import styles from "./Employee.module.css";
import Card from "../../components/Card/Card";
import AllUsers from "../../components/AllUsers/AllUsers";
import { useState } from "react";

function Employee() {
  const [cardnumber, setCardNumber] = useState(0);
  const handleClick = (i) => {
    setCardNumber(i);
  };
  return (
    <div className={styles.employee}>
      <div className={styles.header}>
        <h1>Welcome, Employee</h1>
      </div>

      {cardnumber === 0 && (
        <div className={styles.grid_cont}>
          <Card
            img="src/pages/Employee/report.svg"
            title="Reports"
            description="View reports"
            onClick={() => {
              handleClick(1);
            }}
          />
          <Card
            img="src/pages/Employee/add.svg"
            title="Add Employee"
            description="Add new employee"
            onClick={() => {
              handleClick(2);
            }}
          />
          <Card
            img="src/pages/Employee/user.svg"
            title="Users"
            description="View users"
            onClick={() => {
              handleClick(3);
            }}
          />
          <Card
            img="src/pages/Employee/pro.svg"
            title="Products"
            description="View products"
            onClick={() => {
              handleClick(4);
            }}
          />
        </div>
      )}

      {cardnumber === 3 && (
        <>
          <Card
            img="src/pages/Employee/user.svg"
            title="Users"
            description="View users"
            onClick={() => {
              handleClick(0);
            }}
          />

          <AllUsers />
        </>
      )}
    </div>
  );
}

export default Employee;
