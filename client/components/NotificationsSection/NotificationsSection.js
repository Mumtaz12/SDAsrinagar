import React from "react";

import {
  Menu,
  Segment
} from "semantic-ui-react";

import NotificationTable from "./Table/NotificationTable";

import styles from "./NotificationSection.module.css";

export default function NotificationsSection(props) {
  let [activeItem, setActiveItem] = React.useState("Tenders");
  let handleItemClick = (e, { name }) => setActiveItem(name);

  let returnDataBasedOnTab = () => {
    switch (activeItem) {
      case "Public Notices":
        return props["data"]["public_notices"];
        break;

      case "Tenders":
        return props["data"]["tenders"];
        break;

      case "Circulars and Orders":
        return props["data"]["circular_orders"];
        break;

      case "Expression of Interest":
        return props["data"]["eoi"];
        break;

      case "Auction Notices":
        return props["data"]["short_term_quotations"];
        break;

      default:
        return props["data"]["tenders"];
        break;
    }
  };

  return (
    <div
      className={styles["main_wrapper"]}
      style={{ padding: "1.5rem 2rem", backgroundColor: "#EEF0F1" }}>
      {console.log(props.data)}
      <Menu attached='top' stackable tabular  >
        <Menu.Item
          name='Tenders'
          active={activeItem === "Tenders"}
          onClick={handleItemClick}
        />

        <Menu.Item
          name='Expression of Interest'
          active={activeItem === "Expression of Interest"}
          onClick={handleItemClick}
        />

        <Menu.Item
          name='Public Notices'
          active={activeItem === "Public Notices"}
          onClick={handleItemClick}
        />

        <Menu.Item
          name='Circulars and Orders'
          active={activeItem === "Circulars and Orders"}
          onClick={handleItemClick}
        />

        <Menu.Item
          name='Auction Notices'
          active={activeItem === "Auction Notices"}
          onClick={handleItemClick}
        />
      </Menu>

      <Segment
          className={styles.table_segment}
          style={{
            height: "calc(100% - 20px)",  // Ensure the Segment takes up full height of its parent
            padding: '10px', // Remove default padding to ensure the Table fills the Segment

            boxShadow: '0 15px 15px 15px rgba(206, 201, 201, 0.384)',

          }}
          attached="bottom"
      >
        <div className={styles.table_container}>
          <NotificationTable data={returnDataBasedOnTab()} />
        </div>
      </Segment>
    </div>
  );
}
