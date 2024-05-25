import React from "react";

import ReactMarkdown from "react-markdown";

export default function Markdown({ markdown }) {
  return <ReactMarkdown children={markdown} />;
}
