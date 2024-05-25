import React from "react";
import { Header } from "semantic-ui-react";

import PageContainer from "../../components/PageContainer/PageContainer";

import { main_backend_path } from "../../constants/constants";

export default function DocumentsRequired() {
  return (
    <PageContainer>
      <Header>Building Plan Approval</Header>
      <div>
        <ol>
         <li>
            <a
              target='_blank'
              href={
                main_backend_path + "/uploads/doc_list_0001_c9abf39ed8.pdf"
              }>
              Building Permission Application Processing Steps
            </a>
          </li>
        </ol>
      </div>
    </PageContainer>
  );
}



// import React from "react";
// import { Header } from "semantic-ui-react";
//
// import PageContainer from "../../components/PageContainer/PageContainer";
//
// import { main_backend_path } from "../../constants/constants";
//
// const documents = [
//     {
//         name: "Building Permission Application Processing Steps",
//         url: "/uploads/doc_list_0001_c9abf39ed8.pdf",
//     },
//     // Add more documents here if necessary
// ];
//
// export default function DocumentsRequired() {
//     return (
//         <PageContainer>
//             <Header>Building Plan Approval</Header>
//             <div>
//                 <ol>
//                     {documents.map((doc, index) => (
//                         <li key={index}>
//                             <a
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 href={main_backend_path + doc.url}
//                                 aria-label={`Download ${doc.name}`}
//                             >
//                                 {doc.name}
//                             </a>
//                         </li>
//                     ))}
//                 </ol>
//             </div>
//         </PageContainer>
//     );
// }
