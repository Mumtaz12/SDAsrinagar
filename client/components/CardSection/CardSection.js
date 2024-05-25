import React from "react";
import { Container } from "semantic-ui-react";
import styles from "./CardSection.module.css";
import Card from "./Card/Card";
import { main_backend_path } from "../../constants/constants";

export default function CardSection() {
  return (
      <div className={styles.main_wrapper}>
        <Container>
          <div className={styles.sub_wrapper}>
            <Card
                icon='flag'
                title='Master Plan'
                link='/planning/MasterPlan'
                ariaLabel='View Master Plan'
            />
            <Card
                icon='exclamation triangle'
                title='Enforcement'
                link='/enforcements/'
                ariaLabel='View Enforcement Information'
            />
            <Card
                icon='check circle'
                title='BOCA'
                link='/planning/BOCAMinutes'
                ariaLabel='View BOCA Minutes'
            />
            <Card
                icon='folder'
                title='J&K PSG Act'
                link='/PSGAct'
                ariaLabel='View J&K PSG Act'
            />
            <Card
                icon='file'
                title='Downloads'
                link='/downloads/Downloads'
                ariaLabel='View Downloads'
            />
            <Card
                icon='file'
                title='Procedure for Building Plan Approval'
                link='/land_management/DocumentsRequired'
                ariaLabel='View Building Plan Approval Procedure'
            />
            <Card
                icon='cogs'
                title='Services'
                external
                link={main_backend_path + "/uploads/services_2428bdef1e.pdf"}
                ariaLabel='View Services'
            />
            <Card
                icon='address book'
                title='Citizen Charter'
                external
                link={main_backend_path + "/uploads/Citizen_char_a8618a4dce.pdf"}
                ariaLabel='View Citizen Charter'
            />
          </div>
        </Container>
      </div>
  );
}
