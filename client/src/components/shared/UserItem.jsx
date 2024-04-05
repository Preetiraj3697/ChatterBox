import React, { memo } from "react";
import { ListItem, Stack, Avatar, Typography, IconButton } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
const UserItem = ({ user, handler, handlerIsLoading, isAdded=false}) => {
  const { name, _id, avatar } = user;
  return (
      <ListItem >
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />
        <Typography
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            overflow: "hidden",
                      textOverflow: "ellipsis",
            width:"100%"
          }}
        >
          {name}
        </Typography>
        <IconButton
          sx={{
            bgcolor: isAdded ? "error.main":"primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isAdded ? "error.dark":"primary.dark",
            },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          {isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
