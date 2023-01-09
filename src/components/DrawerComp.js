import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Drawer
        PaperProps={{ sx: { backgroundColor: "rgba(253,29,29,1)" } }}
        open={open}
        onClose={() => setOpen(!open)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton onClick={() => setOpen(!open)} divider>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }} key={index}>
                  {link}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginRight: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </div>
  );
};

export default DrawerComp;
