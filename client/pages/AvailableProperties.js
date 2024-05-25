import React from "react";

import PageContainer from "../components/PageContainer/PageContainer";

import { Header, Table, Divider } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

import { main_backend_path } from "../constants/constants";

export default function AvailableProperties() {
  return (
    <PageContainer>
      <Header>Available Properties</Header>
      <Divider />

     <div>
     <div>
   <a
     href={
       main_backend_path + "/uploads/Available_Properties_578f997172.pdf"
     }>
     <Button primary>Download Available Properties Document</Button>
   </a>
   </div>
   
  
   
   <div style={{marginTop:"10px"}}>
     <a href="https://jkhm.auctiontiger.net/EPROC/" target="_blank">
     <Button primary>Link to Online e-Auction System</Button></a>
   </div>
   
  </div>
    </PageContainer>
  );
}
