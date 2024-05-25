import React, { useEffect, useState } from 'react';
import { Container, Header } from "semantic-ui-react";
import styles from "../../styles/Reach.module.css";

export default function Reach() {

    return (
        <main className={styles.main_wrapper}>
            <Header as="h3">How To Reach</Header>
            <address>
                <div className={styles.map_container}>
                    <iframe
                        title="SDA Map"
                        className={styles.map_iframe}
                        src="https://maps.google.com/maps?q=srinagar%20development%20authority&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        aria-label="SDA Map"
                    />
                </div>
            </address>
        </main>
    );
}
