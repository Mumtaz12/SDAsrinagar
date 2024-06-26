import React from "react";

import { backend } from "../../constants/constants";

import { Header, Container } from "semantic-ui-react";

import Markdown from "../../components/Markdown/Markdown";
import styles from "../../styles/TextAlign.module.css";

export default function Housing(props) {
  return (
    <div style={{ padding: "2rem" }}>
      <Container className={styles["wrapper"]}>
        <Header as='h3'>Housing Projects</Header>
        <Markdown markdown={props["data"]["desc"]} />
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(backend + "projects/607079435a5e8927cedabd35");
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
//
// import { backend } from "../../constants/constants";
// import Markdown from "../../components/Markdown/Markdown";
// import styles from "../../styles/TextAlign.module.css";
//
// export default function Housing(props) {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(backend + "projects/607079435a5e8927cedabd35");
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
//   return (
//       <div style={{ padding: "2rem" }}>
//         <Container className={styles["wrapper"]}>
//           <Header as='h3'>Housing Projects</Header>
//           {data && <Markdown markdown={data.desc} />}
//         </Container>
//       </div>
//   );
// }
