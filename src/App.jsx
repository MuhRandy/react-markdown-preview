import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IconEdit } from "@tabler/icons-react";
import { Icon12Hours } from "@tabler/icons-react";
import { IconBlockquote } from "@tabler/icons-react";
import { IconArrowsMaximize } from "@tabler/icons-react";
import { IconArrowsDiagonalMinimize2 } from "@tabler/icons-react";
import { IconLayoutRows } from "@tabler/icons-react";
import { IconLayoutNavbarExpand } from "@tabler/icons-react";
import { IconLayoutNavbar } from "@tabler/icons-react";
import { IconLayoutSidebar } from "@tabler/icons-react";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [maximizeEditor, setMaximizeEditor] = useState(false);
  const [maximizePreview, setMaximizePreview] = useState(false);
  const [sideBySide, setSideBySide] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div
      className={`flex min-w-[100vw] gap-5 py-4 relative ${
        sideBySide ? "" : "flex-col items-center"
      }`}
    >
      <button
        className="bg-black text-white absolute top-4 right-4 p-2 rounded-lg"
        onClick={() => {
          setSideBySide(!sideBySide);
        }}
      >
        <IconLayoutNavbar className={`${sideBySide ? "" : "hidden"}`} />
        <IconLayoutSidebar className={`${sideBySide ? "hidden" : ""}`} />
      </button>
      <div
        className={`"shadow-xl shadow-black" ${
          maximizePreview ? "hidden" : ""
        }`}
      >
        <div className="bg-black text-white text-center flex justify-center relative">
          <IconEdit className="absolute left-0" />
          Editor
          <button
            className="absolute right-0"
            onClick={() => {
              setMaximizeEditor(!maximizeEditor);
            }}
          >
            <IconArrowsMaximize
              className={`${maximizeEditor ? "hidden" : ""}`}
            />
            <IconArrowsDiagonalMinimize2
              className={`${maximizeEditor ? "" : "hidden"}`}
            />
          </button>
        </div>
        <textarea
          name="markdown"
          id="markdown"
          cols="60"
          rows={`${maximizeEditor ? "24" : "20"}`}
          onChange={handleChange}
        ></textarea>
      </div>
      <div
        className={`min-w-[800px] shadow-lg shadow-black ${
          maximizeEditor ? "hidden" : ""
        }`}
      >
        <div className="bg-black text-white text-center flex justify-center relative">
          <IconBlockquote className="absolute left-0" />
          Preview
          <button
            className="absolute right-0"
            onClick={() => {
              setMaximizePreview(!maximizePreview);
            }}
          >
            <IconArrowsMaximize
              className={`${maximizePreview ? "hidden" : ""}`}
            />
            <IconArrowsDiagonalMinimize2
              className={`${maximizePreview ? "" : "hidden"}`}
            />
          </button>
        </div>
        <Markdown
          className="prose max-w-[800px] prose-invert prose-headings:border-b-2 bg-slate-700 px-10 py-5"
          remarkPlugins={[remarkGfm]}
          children={`${markdown}`}
        />
      </div>
    </div>
  );
}

export default App;
