import React from 'react'
import styles from "./normalButton.module.css"

function NormalButton({buttonText}) {
    return (
        <div className={`${styles.normalButton}`}>
            {buttonText}
        </div>
    )
}

export  {NormalButton}
