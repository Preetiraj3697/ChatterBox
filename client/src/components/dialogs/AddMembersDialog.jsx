import React from 'react'
import { Dialog, Stack, DialogTitle, Typography,Button } from '@mui/material'
import { sampleUsers } from '../constants/sampleData'
import UserItem from '../shared/UserItem'
const AddMembersDialog = ({ addMember, isLoadingAddMember, chatId }) => {
    const addFriendHandler = () => {
        console.log(id,chatId)
    }
  return ( 
      <Dialog open>
          <Stack spacing={"2rem"} p={"2rem"} width={"20rem"}>
              <DialogTitle textAlign={"center"}>Add Members</DialogTitle>
              <Stack spacing={"1rem"}>
                  {
                      sampleUsers.length> 0 ? (sampleUsers.map((i) => (
                          <UserItem key={i.id} user={i} handler={addFriendHandler} />
                      ))) :
                          <Typography textAlign={"center"}>No Friends</Typography>
                  }
              </Stack>
              <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
              <Button variant="outlined" color="error">Cancel</Button>
              <Button   variant="contained" onClick={addFriendHandler} disable={isLoadingAddMember}>Add members</Button>
              </Stack>
              
          </Stack>
    </Dialog>
  )
}

export default AddMembersDialog