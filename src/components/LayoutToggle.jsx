import { IconLayoutNavbar, IconLayoutSidebar } from '@tabler/icons-react';

const LayoutToggle = ({
  sideBySide,
  maximizeEditor,
  maximizePreview,
  handleClick,
}) => {
  return (
    <button
      className={`bg-black text-white absolute top-4 right-4 p-2 rounded-lg ${
        maximizeEditor || maximizePreview ? 'hidden' : ''
      }`}
      onClick={handleClick}
    >
      <IconLayoutNavbar className={`${sideBySide ? '' : 'hidden'}`} />
      <IconLayoutSidebar className={`${sideBySide ? 'hidden' : ''}`} />
    </button>
  );
};

export default LayoutToggle;
