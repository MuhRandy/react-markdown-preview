import { IconBlockquote } from "@tabler/icons-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "./Header";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import clsx from "clsx";

const Preview = ({
  maximizeEditor,
  maximizePreview,
  markdown,
  handleClick,
}) => {
  return (
    <div
      className={clsx("min-w-[800px] shadow-lg shadow-black", {
        hidden: maximizeEditor,
      })}
    >
      <Header
        handleClick={handleClick}
        maximize={maximizePreview}
        icon={<IconBlockquote className="absolute left-0" />}
        text={"Preview"}
      />
      <Markdown
        className="prose prose-table:max-w-fit leading-5 max-w-[800px] prose-headings:border-b-2 prose-p:whitespace-pre-wrap bg-slate-200 px-10 py-5 prose-td:border-black prose-td:border prose-td:p-1 prose-th:border-black prose-th:border prose-th:p-1 prose-blockquote:border-l-4 prose-blockquote:border-slate-500 prose-blockquote:ml-10"
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
