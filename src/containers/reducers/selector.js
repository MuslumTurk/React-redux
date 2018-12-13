const selectedUser = (state = null, action) => {
 switch (action.type) {
  case 'USER_SELECTED':
   return action.payload
  default:
   return state
 }
}

const selectedPost = (state = null, action) => {
 switch (action.type) {
  case 'POST_SELECTED':
   return action.payload
  default:
   return state
 }
}

module.exports = {
    selectedUser: selectedUser,
    selectedPost: selectedPost
}