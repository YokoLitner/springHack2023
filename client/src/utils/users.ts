export const users = [
  {
    role: 'admin',
    attachFiles: true,
    seeUser2Profile: true,
    seeUser1Profile: true
  },
  {
    role: 'user2',
    attachFiles: true,
    seeAdminProfile: false,
    seeUser2Profile: true,
    seeUser1Profile: true
  },
  {
    role: 'user1',
    attachFiles: false,
    seeAdminProfile: false,
    seeUser2Profile: false,
    seeUser1Profile: true
  }
]
