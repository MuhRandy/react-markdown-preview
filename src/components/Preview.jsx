import { IconBlockquote } from "@tabler/icons-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "./Header";

const Preview = ({
  maximizeEditor,
  maximizePreview,
  markdown,
  handleClick,
}) => {
  return (
    <div
      className={`min-w-[800px] shadow-lg shadow-black ${
        maximizeEditor ? "hidden" : ""
      }`}
    >
      <Header
        handleClick={handleClick}
        maximize={maximizePreview}
        icon={<IconBlockquote className="absolute left-0" />}
        text={"Preview"}
      />
      <Markdown
        className="prose max-w-[800px] prose-invert prose-headings:border-b-2 prose-p:whitespace-pre-wrap bg-slate-700 px-10 py-5"
        remarkPlugins={[remarkGfm]}
        children={`${markdown}`}
      />
    </div>
  );
};

export default Preview;
