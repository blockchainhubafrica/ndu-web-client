import React from 'react'
import styles from "./inputPassword.module.css"

function InputPassword({onClick, ...rest}) {
    return (
          <input type="password" onClick={onClick} {...rest} className={styles.passwordContainer} />
      );
}

export  {InputPassword}
