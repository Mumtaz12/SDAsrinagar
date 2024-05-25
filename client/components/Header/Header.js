import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import styles from "./Header.module.css"

import {Image} from "semantic-ui-react"

import Navigation from "../Navigation/Navigation"

export default function Header() {
    return (
        <div>
            <div className={styles["topbar"]}>
                GOVERNMENT OF JAMMU AND KASHMIR
            </div>

            <div className={styles["header"]}>

                <div>
                    <img src="/logo.png" height="100px"/>
                </div>

                <div className={styles["header_container"]}>
                    <h1>Srinagar Development Authority (S.D.A)</h1>
                    <h3>Bemina, Bypass,Srinagar, J&K, India. 190018</h3>
                </div>
            </div>

            <div className={styles["navigation_wrapper_main"]}>
               <div className={styles["navigation_wrapper"]}>
               <Navigation/>
               </div>
            </div>
        </div>
    )
}
