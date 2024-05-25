import Link from 'next/link';
import React from 'react';



import {Divider,Container,Header,Image} from "semantic-ui-react"

import {backend,main_backend_path} from "../../constants/constants"

import styles from "./PhotoGallery.module.css"

export default function PhotoGallery(props){
    return (
        <div style={{padding:"2rem"}}>


            <Container className={styles["main_wrapper"]}>
                <Header>Photo Gallery</Header>
                <Divider/>


                 <div className={styles["image_wrapper"]}>

                     {props["images"].map((image)=>{
                         return (
                             <Link href={"/gallery/"+image["id"]} legacyBehavior>
                                 <Image className={styles["image"]} src={ main_backend_path+image["thumbnail"]["formats"]["small"]["url"]}/>
                             </Link>
                         );
                     })}

                 </div>

            </Container>
        </div>
    );
}

export async function getServerSideProps(context){
    let images = await (await fetch(backend+"gallery-photos")).json()
    return {
        props:{
            images
        }
    }
}
