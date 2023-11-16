import { IconEdit } from "@tabler/icons-react";
import Header from "./Header";
import clsx from "clsx";
import { cn } from "../utils";
import { useAppContext } from "../App";

const Editor = () => {
  const {
    maximizeEditor,
    maximizePreview,
    setMaximizeEditor,
    markdown,
    setMarkdown,
    sideBySide,
  } = useAppContext();

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleClick = () => {
    setMaximizeEditor(!maximizeEditor);
  };

  return (
    <div
      className={clsx("shadow-sm shadow-black", {
        hidden: maximizePreview,
      })}
    >
      <Header
        handleClick={handleClick}
        maximize={maximizeEditor}
        icon={<IconEdit className="absolute left-0" />}
        text={"Editor"}
      />
      <textarea
        className={cn("min-w-[100vw] px-1 min-h-[40vh]", [
          [
            "sm:min-w-[90vw] sm:px-3",
            {
              "sm:min-w-[45vw] min-h-[221vh]": sideBySide && !maximizeEditor,
            },
          ],
          [
            "md:min-w-[60vw] md:min-h-[50vh]",
            {
              "md:min-w-[45vw] md:min-h-[223vh]": sideBySide && !maximizeEditor,
              "min-h-[95vh] md:min-h-[95vh] md:min-w-[70vw]": maximizeEditor,
            },
          ],
        ])}
        name="editor"
        id="editor"
        onChange={handleChange}
        value={markdown}
      />
    </div>
  );
};

export default Editor;
