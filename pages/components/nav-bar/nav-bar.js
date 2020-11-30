import styles from "./nav-bar.module.scss";
import { useState } from "react";
import Stepper from "../stepper/stepper";

function NavBar() {
  const [stepIn, setStepIn] = useState(1);
  return (
    <>
      <div className={styles.main}>
        <h1>Ramon Paez Profile</h1>
        <div className={styles.main__menu}>
          <nav>
            <ul>
              <li onClick={() => setStepIn(1)}>Home</li>
              <li onClick={() => setStepIn(2)}>Xclusive</li>
              <li onClick={() => setStepIn(3)}>Palma Soft</li>
            </ul>
          </nav>
        </div>
      </div>

      <Stepper
        step={stepIn}
        initialStep={() => setStepIn(1)}
        secondStep={() => setStepIn(3)}
        firstStep={() => setStepIn(2)}
      />
    </>
  );
}

export default NavBar;
