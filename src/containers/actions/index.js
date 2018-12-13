const selectUser = (user) => dispatch => {
 dispatch({
  type: 'USER_SELECTED',
  payload: user
 })
}

const selectPost = (post) => dispatch => {
 console.log(post);
 dispatch({
  type: 'POST_SELECTED',
  payload: post
 })
}

export { selectUser, selectPost };