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
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Batman",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  // {
  //   avatar: ["https://avatars.githubusercontent.com/u/107460745?v=4"],
  //   name: "Spider Man",
  //   _id: "3",
  //   groupChat: false,
  //   members: ["1", "2"],
  // },
  // {
  //   avatar: ["https://www.w3schools.com/css/img_lights.jpg"],
  //   name: "Iron Man",
  //   _id: "4",
  //   groupChat: false,
  //   members: ["1", "2"],
  // },
  // {
  //   avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  //   name: "Captain America",
  //   _id: "5",
  //   groupChat: false,
  //   members: ["1", "2"],
  // },
  // {
  //   avatar: ["https://www.w3schools.com/css/img_lights.jpg"],
  //   name: "Thanos",
  //   _id: "6",
  //   groupChat: false,
  //   members: ["1", "2"],
  // },
  // {
  //   avatar: ["https://avatars.githubusercontent.com/u/107460745?v=4"],
  //   name: "John Doe",
  //   _id: "7",
  //   groupChat: false,
  //   members: ["1", "2"],
  // },
  // {
  //   avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  //   name: "Batman",
  //   _id: "8",
  //   groupChat: false,
  //   members: ["1", "2"],
  // },
  // {
  //   avatar: ["https://avatars.githubusercontent.com/u/107460745?v=4"],
  //   name: "Spider Man",
  //   _id: "9",
  //   groupChat: false,
  //   members: ["1", "2"],
  // },
  // {
  //   avatar: ["https://www.w3schools.com/css/img_lights.jpg"],
  //   name: "Iron Man",
  //   _id: "10",
  //   groupChat: false,
  //   members: ["1", "2"],
  // },
  // {
  //   avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  //   name: "Captain America",
  //   _id: "52",
  //   groupChat: false,
  //   members: ["1", "2"],
  // },
  // {
  //   avatar: ["https://www.w3schools.com/css/img_lights.jpg"],
  //   name: "Thanos",
  //   _id: "63",
  //   groupChat: false,
  //   members: ["1", "2"],
  // },
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

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_boi",
      friends: 20,
      groups: 25,
    },
  ],

  chats: [
    {
      name: "LabadBass Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "L*Da Luston Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Boi",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "L*uda ka Message hai",
      _id: "sfnsdjkfsdnfkjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman ",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "sfnsdjkfsdnfkdddjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman  2",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};