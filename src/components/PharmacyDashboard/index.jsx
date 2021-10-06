import React from 'react'
import { ActionBox } from '..'
import { DrugsSvg, MicroChipSvg } from '../../assets'
import styles from "./pharmacyDashboard.module.css"

function PharmacyDasboard() {
    return (
        <div className="centerCon">
            <h1 className={`${styles.pharmacyName}`}>Juhel Pharmacy</h1>

            <div className={`${styles.ActionBoxCon}`}>
                <ActionBox title="Generate Hash" image={MicroChipSvg} width="40%" height="295px" />
                <ActionBox title="Drug Inventory" image={DrugsSvg} width="40%" height="295px" />
            </div>
        </div>
    )
}

export {PharmacyDasboard}
