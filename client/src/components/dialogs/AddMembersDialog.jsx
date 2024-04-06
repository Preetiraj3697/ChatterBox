import React, { useState } from "react";
import { Dialog, Stack, DialogTitle, Typography, Button } from "@mui/material";
import { sampleUsers } from "../constants/sampleData";
import UserItem from "../shared/UserItem";
const AddMembersDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const closeHandler = () => {
      setSelectedMembers([]);
      setMembers([])
  };
    const addMemberSubmitHandler = () => {
        closeHandler();
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack spacing={"2rem"} p={"2rem"} width={"20rem"}>
        <DialogTitle textAlign={"center"}>Add Members</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem
                key={i._id}
                user={i}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button variant="outlined" color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={addMemberSubmitHandler}
            disable={isLoadingAddMember}
          >
            Add members
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMembersDialog;
