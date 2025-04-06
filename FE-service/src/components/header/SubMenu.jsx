import { Box, SubMenuItem } from "../index"

const SubMenu = ({ menu, onClose }) => {

  return (
    <Box variant="modal" size="screen" onClick={onClose} >
      <Box
        variant="submenu"
        border="yes"
        bg="yes"
        shadow="yes"
        size="content"
        onClick={(e) => e.stopPropagation()}
        onMouseLeave={onClose}
      >
          {menu?.map((item,index) => (
            <SubMenuItem key={index} item={item} />
          ))}
        </Box>
      </Box>
  );
};

export default SubMenu;

