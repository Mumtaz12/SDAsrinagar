import React from "react";
import { Divider, Header } from "semantic-ui-react";

import { main_backend_path } from "../constants/constants";

import PageContainer from "../components/PageContainer/PageContainer";

export default function PSGAct() {
  return (
    <PageContainer>
      <Header>J&K PSG ACT</Header>
      <Divider />
      <div style={{ position: "relative" }}>
        <ol>
          <li>
            <a
              href={
                main_backend_path + "/uploads/jk_psg_act_2011_bb9eb79abe.pdf"
              }>
              THE JAMMU AND KASHMIR PUBLIC SERVICES GUARANTEE ACT,2011
            </a>
          </li>

          <li>
            <a
              href={
                main_backend_path + "/uploads/jk_psg_rules_2011_9bb2b660b0.pdf"
              }>
              THE JAMMU AND KASHMIR PUBLIC SERVICES GUARANTEE RULES,2011
            </a>
          </li>

          <li>
            <a href={main_backend_path + "/uploads/PGA_a7852fb904.pdf"}>
              Information under JKPSG-ACT-2011 (check list of documents attached
              with the application for NOCs and building permissions)
            </a>
          </li>
        </ol>
      </div>
    </PageContainer>
  );
}
