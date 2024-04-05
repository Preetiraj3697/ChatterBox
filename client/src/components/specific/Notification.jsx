import React, { memo } from "react";
import {
  Dialog,
  DialogTitle,
  Stack,
  ListItem,
  Avatar,
  Button,
  Typography,

} from "@mui/material";
import { sampleNotification } from "../constants/sampleData";

const Notification = () => {
  const friendRequestHandler = (_id, accept) => {
    // add
  };
  return (
    <Dialog open>
      <Stack
        sx={{
          xs: "1rem",
          sm: "2rem",
        }}
        maxWidth={"25rem"}
      >
        <DialogTitle>Notification</DialogTitle>

        {sampleNotification.length > 0 ? (
          sampleNotification.map(({ sender, _id }) => (
            <NotificationItem
              sender={sender}
              _id={_id}
              handler={friendRequestHandler}
              key={_id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>0 Notification</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
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
        {`${name} sent you a friend request.`}
      </Typography>
        <Stack direction={{
          xs: "column",
          sm:"row"
        }}>
          <Button onClick={()=>handler({_id,accept:true})}>Accept</Button>
          <Button color="error" onClick={()=>handler({_id,accept:false})}>Reject</Button>
      </Stack>
    </Stack>
  </ListItem>
);
});

export default Notification;
