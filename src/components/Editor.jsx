import { IconEdit } from "@tabler/icons-react";
import Header from "./Header";
import clsx from "clsx";

const Editor = ({
  maximizeEditor,
  maximizePreview,
  handleChange,
  handleClick,
  markdown,
}) => {
  return (
    <div
      className={clsx("shadow-xl shadow-black", { hidden: maximizePreview })}
    >
      <Header
        handleClick={handleClick}
        maximize={maximizeEditor}
        icon={<IconEdit className="absolute left-0" />}
        text={"Editor"}
      />
      <textarea
        name="editor"
        id="editor"
        cols="60"
        rows={`${maximizeEditor ? "24" : "20"}`}
        onChange={handleChange}
        value={markdown}
      />
    </div>
  );
};

export default Editor;
