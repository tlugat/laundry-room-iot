import {useAuth} from "app/hooks/useAuth";
import {Link} from "react-router-dom";

import styles from './Header.module.scss'
import Nav from "app/commons/Nav/Nav";
import Dropdown from "app/commons/Dropdown/Dropdown";

import app_logo from "app/assets/img/logo-app.svg";

function Header() {

  const auth = useAuth();

  
  return (
    <header className={styles.container}>
      <Link to="/"><img className={styles.logo} src={app_logo} alt="wave into a circle"/></Link>
      {auth.user && (
        <>
          <div className={styles.navContainer}>
          <Nav/> 
          </div>
          <Dropdown/>
        </>
      )}
    </header>
  )
}

export default Header
