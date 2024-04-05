// avatar = [],
//   name,
//   _id,
//   groupChat = false,
//   sameSender,
//   isOnline,
//   newMessageAlert,
//   index = 0,
//   handleDeleteChatOpen,

export const sampleChats = [
  {
    avatar: ["https://avatars.githubusercontent.com/u/107460745?v=4"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://avatars.githubusercontent.com/u/107460745?v=4"],
    name: "Batman",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://avatars.githubusercontent.com/u/107460745?v=4"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://avatars.githubusercontent.com/u/107460745?v=4"],
    name: "Batman",
    _id: "2",
  },
];

export const sampleNotification = [
  {
    sender: {
      avatar: ["https://avatars.githubusercontent.com/u/107460745?v=4"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://avatars.githubusercontent.com/u/107460745?v=4"],
      name: "Batman",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
          {
              public_id: "asdsad",
              url: "https://www.w3schools.com/css/img_lights.jpg",
          }
    ],
    content: "L'uda ka Message hai",
    _id: "sandjksdjfk",
    sender: {
      _id: "user._id",
      name: "Chaman",
    },
    chat: "ChatId",
    createdAt: "2024-04-06T12:30:00Z",
    },
    {
        attachments: [
          {
            public_id: "asdsad 2",
            url: "https://www.w3schools.com/howto/img_avatar.png",
          },
        ],
        content: "L'uda 2 ka Message hai",
        _id: "sljfksjdf",
        sender: {
          _id: "sadfjjksd",
          name: "Chaman 2",
        },
        chat: "ChatId",
        createdAt: "2024-04-06T12:00:00Z",
      }
];
