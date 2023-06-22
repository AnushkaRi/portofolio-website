import { Outlet } from "react-router-dom";

import styles from "./styles.module.css";
import Header from "../../components/Header/Header";

function Layout() {
  return (
    <div className={styles.layout_container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
