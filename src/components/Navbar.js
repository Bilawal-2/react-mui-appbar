import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box } from "@mui/system";
import DrawerComp from "./DrawerComp";
const Navbar = ({ links }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState();
  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <div>
            <Typography>
              <ShoppingCartCheckoutIcon />
            </Typography>
            <DrawerComp links={links} />
          </div>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
                <ShoppingCartCheckoutIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => {
                  setValue(val);
                }}
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link}></Tab>
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box flex>
                <Button
                  sx={{ marginLeft: "auto", background: "rgba(131,58,180,1)" }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 1, background: "rgba(131,58,180,1)" }}
                  variant="contained"
                >
                  Signup
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
