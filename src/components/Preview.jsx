import { IconBlockquote } from "@tabler/icons-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "./Header";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Preview = ({
  maximizeEditor,
  maximizePreview,
  markdown,
  handleClick,
}) => {
  const style = (a, b) => {
    let arr = [];
    for (const i in b) {
      arr.push(a + b[i]);
    }
    return arr.join(" ");
  };

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
        className={`prose prose-table:max-w-fit ${style("prose-td:", [
          "border-black",
          "border",
          "p-1",
        ])} ${style("prose-th:", [
          "border-black",
          "border",
          "p-1",
        ])} leading-5 max-w-[800px] prose-headings:border-b-2 prose-p:whitespace-pre-wrap bg-slate-200 px-10 py-5 ${style(
          "prose-blockquote:",
          ["border-l-5", "border-slate-800", "ml-3"]
        )}`}
        remarkPlugins={[remarkGfm]}
        children={`${markdown}`}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                children={String(children).replace(/\n$/, "")}
                style={atomDark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...rest} className={`${className} bg-white`}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Preview;
