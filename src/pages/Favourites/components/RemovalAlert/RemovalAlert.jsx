import React from 'react'
import styles from "./removal-alert.module.css"

export default function RemovalAlert({ RemoveFromFavourite, closeAlert }) {
    const handleRemoveBtn = () => {
        RemoveFromFavourite()
        closeAlert()
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.alert}>
                <h3>Are You sure ?</h3>
                <div className="btns-row">
                    <button className={styles.ptnr} onClick={handleRemoveBtn}>yes, remove</button>
                    <button className={styles.ptnc} onClick={closeAlert}>no, cancel</button>
                </div>
            </div>
        </div>
    )
}
