import React from "react";

import { backend } from "../../constants/constants";

import { Header, Container } from "semantic-ui-react";

import styles from "../../styles/TextAlign.module.css";
import Markdown from "../../components/Markdown/Markdown";

export default function Commercial(props) {
  return (
    <div style={{ padding: "2rem" }}>
      <Container className={styles["wrapper"]}>
        <Header as='h3'>Commercial Projects</Header>
        <Markdown markdown={props["data"]["desc"]} />
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(backend + "projects/607078b75a5e8927cedabd34");
  let data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}


// latest code
//
// import React, { useState, useEffect } from "react";
// import { Header, Container, Dimmer, Loader } from "semantic-ui-react";
// import { backend } from "../../constants/constants";
// import styles from "../../styles/TextAlign.module.css";
// import Markdown from "../../components/Markdown/Markdown";
//
// export default function Commercial() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(backend + "projects/607078b75a5e8927cedabd34");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     fetchData();
//   }, []);
//
//   if (loading) {
//     return (
//         <Dimmer active inverted>
//           <Loader>Loading...</Loader>
//         </Dimmer>
//     );
//   }
//
//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//
//   // Check if data is not null and has the required property
//   if (!data || !data.desc) {
//     return <div>No data available</div>;
//   }
//
//   return (
//       <div style={{ padding: "2rem" }}>
//         <Container className={styles["wrapper"]}>
//           <Header as="h3">Commercial Projects</Header>
//           <Markdown markdown={data.desc} />
//         </Container>
//       </div>
//   );
// }
