import React from 'react'

import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css"
import { Container, Divider, Header } from 'semantic-ui-react';
import { backend, main_backend_path } from '../../constants/constants';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

export default function ImageViewer(props) {
    return (
        <Container style={{marginTop:"3rem"}}>
            <Header>
                Image Gallery {props.title}
            </Header>
            <Divider/>
            <ImageGallery items={props["data"]} />
        </Container>
    )
}


export async function getServerSideProps(context){
    let {params,res} = context

    let gallery_id = params["gallery_id"]

    let response = await (await fetch(backend+"gallery-photos/"+gallery_id)).json()


    let data = response["images"].map((image)=>{
        return{
            original:main_backend_path+image["url"],
            thumbnail:main_backend_path+image["formats"]["thumbnail"]["url"]
        }
    })
    return {
        props:{
           data,
           title:response["title"]
        }
    }
}
