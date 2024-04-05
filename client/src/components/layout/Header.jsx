import {
  AppBar,
  Box,
  Backdrop,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { orange } from "../constants/color";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Notifications,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const SearchDialoge = lazy(() => import("../specific/Search"))
const NotificationDialoge = lazy(() => import("../specific/Notification"))
const NewGrouopDialoge = lazy(() => import("../specific/NewGroups"))



const Header = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);


  const handleMobile = () => {
    setIsMobile((prev) => !prev)
  };
  const openSearchHandle = () => {
    setIsSearch((prev) => !prev)
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev)
    };
    const openNotification  = () => {
        setIsNotification((prev) => !prev)
    }
    const navigateToGroup = () => navigate("/groups");
    const logoutHandler = () => {
        console.log("Logout")
    }
  return (
    <>
      <Box>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              ChatterBox
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={openSearchHandle}
              />
              <IconBtn
                title="New Group"
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title="Manage Group"
                icon={<GroupIcon />}
                onClick={navigateToGroup}
                          />
                           <IconBtn
                title="Notification"
                icon={<Notifications />}
                onClick={openNotification}
                          />
                          <IconBtn
                title="Logout"
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
          </Box>
          {isSearch && (
              <Suspense fallback={<Backdrop open />}>
                  <SearchDialoge />
              </Suspense>
          )}
          {isNotification && (
              <Suspense fallback={<Backdrop open />}>
                  <NotificationDialoge />
              </Suspense>
          )}
          {isNewGroup && (
              <Suspense fallback={<Backdrop open />}>
                  <NewGrouopDialoge />
              </Suspense>
          )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
