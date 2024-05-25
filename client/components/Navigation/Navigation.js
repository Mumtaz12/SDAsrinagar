
 import React, { useState, useEffect } from "react";
 import Link from "next/link";
 import {Icon, Menu,DropdownItem, DropdownMenu, DropdownDivider, Dropdown} from "semantic-ui-react";
 import styles from "./Navigation.module.css";
 import Router from "next/router";
import {main_backend_path} from "../../constants/constants";
 import "semantic-ui-css/semantic.min.css";
 // import {DropdownItem, DropdownMenu, DropdownDivider, Dropdown} from "react-bootstrap";

 export default function Navigation() {
   const [activeItem, setActiveItem] = useState("home");
   const [menuHidden, setMenuHidden] = useState(true);

   useEffect(() => {
     const handleRouteChangeStart = () => {
       setMenuHidden(true);
     };

     Router.events.on("routeChangeStart", handleRouteChangeStart);

     return () => {
       Router.events.off("routeChangeStart", handleRouteChangeStart);
     };
   }, []);

   return (
       <div className={styles["supreme_wrapper"]}>
         <div className={styles["icons_wrapper"]}>
           <Icon
               name="unordered list"
               size="big"
               style={{ color: "white", margin: "1rem" }}
               onClick={() => setMenuHidden(!menuHidden)}

           />
         </div>
         <div className={menuHidden ? styles["main_wrapper"] : styles["menu_hidden"]}>
           <Menu size="large" stackable borderless>
             <Menu.Item
                 name="home"
                 active={activeItem === "home"}
                 onClick={() => setActiveItem("home")
             }
                 href="/"
             >
               Home
             </Menu.Item>
             {/* Other menu items */}




             <Dropdown text="Organization" className="link item">
               <DropdownMenu>
                 <DropdownItem icon='Dropdown'>
                   <Link href="/organization/Reach">
                     How to Reach
                   </Link>
                 </DropdownItem>
                 <Dropdown.Divider />
                 <DropdownItem>
                   <Link href="/About">
                     Mission & Objectives
                   </Link>
                 </DropdownItem>

                 <DropdownDivider />

                 <DropdownItem>
                   <Link
                       href="https://backendsdasrinagar.jk.gov.in/uploads/Citizen_char_a8618a4dce.pdf"
                       target="_blank"
                   >
                     Citizen Charter
                   </Link>
                 </DropdownItem>
                 <DropdownDivider />

                 <DropdownItem>
                   <Link href="/organization/Board">
                     SDA Board Members
                   </Link>
                 </DropdownItem>
                 <DropdownItem>
                   <Link href="/pdfs/organization.pdf" target="_blank">
                     Organizational Chart
                   </Link>
                 </DropdownItem>
                 <DropdownItem>
                   <Link href="/organization/AdministrativeSetup">
                     Administrative Setup
                   </Link>
                 </DropdownItem>

                 <DropdownItem>
                   <Link href="/organization/Achievements">
                     Achievements
                   </Link>
                 </DropdownItem>

                 <DropdownItem>
                   <Link
                       href="https://backendsdasrinagar.jk.gov.in/uploads/works_prog_2022_ea6cb216b6.pdf"
                       target="_blank"
                   >
                     Works Programme
                   </Link>
                 </DropdownItem>

                 <DropdownDivider />
                 <DropdownItem>
                   <Link href="/organization/SeniorityList">
                     Seniority List
                   </Link>
                 </DropdownItem>

                 <DropdownDivider />
                 <DropdownItem>
                   <Link href="/organization/AuctionCommittee">
                     Auction Committee
                   </Link>
                 </DropdownItem>
                 <DropdownItem>
                   <Link href="/organization/PromotionCommittee">
                     Departmental Promotion Committee
                   </Link>
                 </DropdownItem>

                 <DropdownItem>
                   <Link href="/organization/PurchaseCommittee">
                     Purchase Committee
                   </Link>
                 </DropdownItem>

                 <DropdownItem>
                   <Link href="/organization/WorksCommittee">
                     Works Committee
                   </Link>
                 </DropdownItem>

                 <DropdownDivider />
                 <DropdownItem>
                   <Link
                       target="_blank"
                       href={
                           main_backend_path + "/uploads/former_V_Cs_6f9db65fde.png"
                       }
                   >
                     Former VCs of SDA
                   </Link>
                 </DropdownItem>
                 {/* <Dropdown.Item>*/}
                 {/*  <Link href='/organization/TelephoneDirectory'>*/}
                 {/*    Telephone Directory*/}
                 {/*  </Link>*/}
                 {/*</Dropdown.Item>*/}
               </DropdownMenu>
             </Dropdown>

             <Dropdown text="Notifications" className="link item">
               <DropdownMenu>
                 <DropdownItem>
                   <Link href="/information/Notices">Public Notices</Link>
                 </DropdownItem>

                 <DropdownItem>
                   <Link href="/information/Tenders">Tenders</Link>
                 </DropdownItem>

                 <DropdownItem>
                   <Link href="/information/Circular_Order">
                     Circulars and Orders
                   </Link>
                 </DropdownItem>

                 <DropdownItem>
                   <Link href="/information/EOI">Expression of Interest</Link>
                 </DropdownItem>

                 <DropdownItem>
                   <Link href="/information/STQ">Auction Notices</Link>
                 </DropdownItem>
               </DropdownMenu>
             </Dropdown>

             <Dropdown  text="Projects" className="link item">
               <DropdownMenu>
                 <DropdownItem>
                   <Link href="/projects/Housing">Housing Projects</Link>
                 </DropdownItem>
                 <DropdownItem>
                   <Link href="/projects/Commercial">Commercial Projects</Link>
                 </DropdownItem>
                 <DropdownItem>
                   <Link href="/projects/Infrastructural">
                     Infrastructural Projects
                   </Link>
                 </DropdownItem>
               </DropdownMenu>
             </Dropdown>

             <Dropdown text="Planning" className="link item">
               <Dropdown.Menu>
                 <Dropdown.Item>
                   <Link href="/planning/MasterPlan">
                     Srinagar Master Plan-2035
                   </Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link href="https://backendsdasrinagar.jk.gov.in/uploads/build_byelaws_fb7b7c9c13.pdf">
                     J&K Unified Building Bylaws-2021
                   </Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link href="/land_management/DocumentsRequired">
                     Building Plan Approval
                   </Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link href="/planning/BOCA">BOCA Committees</Link>
                 </Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>

             <Dropdown text="e-Governance" className="link item">
               <Dropdown.Menu>
                 <Dropdown.Item>
                   <a target="_blank" href="https://www.jkhuddobps.in">
                     Online Building Permission System
                   </a>
                 </Dropdown.Item>

                 <Dropdown.Item>
                   <Link target="_blank" href="https://www.sdaservices.in/">
                     Property Management Portal
                   </Link>
                 </Dropdown.Item>

                 <Dropdown.Item>
                   <Link
                       target="_blank"
                       href="https://jkgrievance.in/AwazAAwam/index.aspx"
                   >
                     Online Public Grievance Monitoring
                   </Link>
                 </Dropdown.Item>

                 <Dropdown.Item>
                   <Link target="_blank" href="https://jktenders.gov.in">
                     Online Tenders
                   </Link>
                 </Dropdown.Item>

                 <Dropdown.Item>
                   <Link target="_blank" href="https://jkhm.auctiontiger.net/EPROC/">
                     Online e-Auction System
                   </Link>
                 </Dropdown.Item>

                 <Dropdown.Item>
                <span
                    onClick={() => {
                      let link =
                          "https://jkdeersgis.users.earthengine.app/view/sgr-mp";
                      let res = confirm(
                          "The land use shown by the application is indicatory.It does not confer the applicant any right to claim the authenticity of land use."
                      );

                      console.log({ res });

                      if (res) {
                        Router.replace(link);
                      }
                    }}
                >
                  Know Master Plan Land use
                </span>
                 </Dropdown.Item>

                 <Dropdown.Item>
                   <Link target="_blank" href="https://jkhm.in">
                     JK Housing Mission (JK-HM)
                   </Link>
                 </Dropdown.Item>

                 <Dropdown.Item>
                   <Link target="_blank" href="https://www.sdabillpayment.com">
                     Tenant Rent Collection Portal
                   </Link>
                 </Dropdown.Item>

               </Dropdown.Menu>
             </Dropdown>

             <Dropdown text="Land Management" className="link item">
               <Dropdown.Menu>
                 <Dropdown.Item>
                   <Link href="/land_management/AllotmentPolicy">
                     Allotment Policy
                   </Link>
                 </Dropdown.Item>

                 <Dropdown.Item>
                   <Link href="/land_management/TransferPolicy">
                     Transfer Policy
                   </Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link href="/land_management/FutureLandPolicy">
                     Future Land Policy
                   </Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link
                       href={
                           main_backend_path +
                           "/uploads/Land_Bank_Srinagar_Development_Authority_57b8c1cc60.pdf"
                       }
                       target="_blank"
                   >
                     Land Bank
                   </Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link href="/land_management/ParkingLots">
                     SDA Parking Lots
                   </Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link
                       target="_blank"
                       href={main_backend_path + "/uploads/Shops1_d12d0f2a94.pdf"}
                   >
                     Shops/Shopsites
                   </Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link href="/land_management/Schemes">Government Schemes</Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link href="/land_management/DrawOfLots">Draw of lots</Link>
                 </Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>

             <Dropdown text="RTI" className="link item">
               <Dropdown.Menu>
                 <Dropdown.Item>
                   <Link href="/rti/RTI">RTI Details</Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link href="/rti/Applications">RTI Applications</Link>
                 </Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>

             <Dropdown text="Media Gallery" className="link item">
               <Dropdown.Menu>
                 <Dropdown.Item>
                   <Link href="/gallery/PhotoGallery">Photo Gallery</Link>
                 </Dropdown.Item>
                 <Dropdown.Item>
                   <Link
                       target="_blank"
                       href="https://www.youtube.com/channel/UCjo52sg8J-hLuAihb1csZDQ"
                   >
                     Video Gallery
                   </Link>
                 </Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>

             {/* <Menu.Item
            name='downloads'
            active={activeItem === "downloads"}
            onClick={handleItemClick}>
            <Link href='/downloads/Downloads'>Downloads</Link>
          </Menu.Item> */}

             <Menu.Item>
               <Link href="/contact/Contact">Contact Us</Link>
             </Menu.Item>
           </Menu>
         </div>
       </div>
   );
 }





