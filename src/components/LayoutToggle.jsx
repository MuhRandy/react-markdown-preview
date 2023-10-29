import { IconLayoutNavbar, IconLayoutSidebar } from "@tabler/icons-react";
import clsx from "clsx";

const LayoutToggle = ({
  sideBySide,
  maximizeEditor,
  maximizePreview,
  handleClick,
}) => {
  return (
    <button
      className={clsx(
        "bg-black text-white absolute top-4 right-4 p-2 rounded-lg",
        { hidden: maximizeEditor || maximizePreview }
      )}
      onClick={handleClick}
    >
      <IconLayoutNavbar className={clsx({ hidden: !sideBySide })} />
      <IconLayoutSidebar className={clsx({ hidden: sideBySide })} />
    </button>
  );
};

export default LayoutToggle;
