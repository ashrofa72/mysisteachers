import React from "react";
import { useLogout } from "../hooks/useLogout";
import { auth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "../styles/Nav.module.css";



function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  console.log(user)

  
  
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <h3>نظام المعلومات المدرسية</h3>
      </div>
      <nav>
        {user ? (
          <>
          
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="/home" className={styles.link}>
                الرئيسية
              </a>
            </li>
            <li className={styles.item}>
              <a href="/profileregister" className={styles.link}>
               ملفك
              </a>
            </li>
            
            <li className={styles.item}>
              <a href="/About" className={styles.link}>
                معلومات
              </a>
            </li>
            <li className={styles.item}>
              <p style={{ color: "white" }}>
                {user ? auth.currentUser.displayName : "No User"}
              </p>
              <a onClick={logout} className={styles.link}>
                {user && <button>خروج</button>}
                
              </a>
            </li>
          </ul>
          </>
        ) : (
          <>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="/login" className={styles.link}>
                دخول
              </a>
            </li>
            <li className={styles.item}>
              <a href="/signup" className={styles.link}>
                تسجيل
              </a>
            </li>

          </ul>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
