// import React from "react";
// import { Container, Header, Image, Button } from "semantic-ui-react";
//
// import { main_backend_path } from "../../constants/constants";
// import PageContainer from "../../components/PageContainer/PageContainer";
//
// export default function MasterPlan() {
//   return (
//     <PageContainer>
//       <Header>Srinagar Master Plan- 2035</Header>
//       <Image src='/assets/srinagar.jpg' />
//       <div style={{ textAlign: "center" }}>
//         <p>
//           credits/source: https://en.wikipedia.org/wiki/File:Srinagar_pano.jpg
//         </p>
//       </div>
//       <p style={{ margin: "1rem", textAlign: "justify" }}>
//         The Master Plan-2035 is a comprehensive public policy document
//         calibrated to ground realities. The plan is at a departure from archaic
//         planning efforts in terms of its public policy approach, development
//         regulations, implementation mechanism, resource mobilisation, mixed
//         landuse regulations etc. The Master Plan has been prepared for a
//         threshold population of around three million by 2035 spread over an area
//         of 766 Sq. Km. The Srinagar Metropolitan Planning limits have been
//         increased from 416 Sq. Km to approximately 766 Sq. Km., i.e.; 84%
//         increase. The Local Area of SDA stands already notified vide SRO-429
//         dated 21.10.2014 (including the municipal areas of Srinagar Municipal
//         Corporation and that of Budgam, Ganderbal, Pampore and Khrew ULBs and
//         additional 160 villages as outgrowths in twelve tehsils of Six districts
//         viz; Srinagar, Budgam, Ganderbal, Pulwama, Bandipora and Baramula).
//       </p>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         <a
//           target='_blank'
//           href={
//             main_backend_path +
//             "/uploads/Master_Plan_2035_Report_Final_d44aae300f.pdf"
//           }>
//           <Button>Approved Report of Srinagar Metropolitan Region-2035</Button>
//         </a>
//
//         <a
//           target='_blank'
//           href={
//             main_backend_path + "/uploads/Final_Landuse_Plan_0eed3696ed.pdf"
//           }>
//           <Button>Approved Land Use Map-2035</Button>
//         </a>
//       </div>
//     </PageContainer>
//   );
// }



// latest code
//
import React from "react";
import { Container, Header, Image, Button } from "semantic-ui-react";

import { main_backend_path } from "../../constants/constants";
import PageContainer from "../../components/PageContainer/PageContainer";

export default function MasterPlan() {
    return (
        <PageContainer>
            <Header>Srinagar Master Plan- 2035</Header>
            <Image src='/assets/srinagar.jpg' />
            <div style={{ textAlign: "center" }}>
                <p>
                    credits/source: https://en.wikipedia.org/wiki/File:Srinagar_pano.jpg
                </p>
            </div>
            <p style={{ margin: "1rem", textAlign: "justify" }}>
                The Master Plan-2035 is a comprehensive public policy document
                calibrated to ground realities. The plan is at a departure from archaic
                planning efforts in terms of its public policy approach, development
                regulations, implementation mechanism, resource mobilisation, mixed
                landuse regulations etc. The Master Plan has been prepared for a
                threshold population of around three million by 2035 spread over an area
                of 766 Sq. Km. The Srinagar Metropolitan Planning limits have been
                increased from 416 Sq. Km to approximately 766 Sq. Km., i.e.; 84%
                increase. The Local Area of SDA stands already notified vide SRO-429
                dated 21.10.2014 (including the municipal areas of Srinagar Municipal
                Corporation and that of Budgam, Ganderbal, Pampore and Khrew ULBs and
                additional 160 villages as outgrowths in twelve tehsils of Six districts
                viz; Srinagar, Budgam, Ganderbal, Pulwama, Bandipora and Baramula).
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <a
                    target='_blank'
                    href={
                        main_backend_path +
                        "/uploads/Master_Plan_2035_Report_Final_d44aae300f.pdf"
                    }>
                    <Button primary>Approved Report of Srinagar Metropolitan Region-2035</Button>
                </a>

                <a
                    target='_blank'
                    href={
                        main_backend_path + "/uploads/Final_Landuse_Plan_0eed3696ed.pdf"
                    }>
                    <Button primary>Approved Land Use Map-2035</Button>
                </a>
            </div>
        </PageContainer>
    );
}
