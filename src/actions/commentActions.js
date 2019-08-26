export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (postId, commentId) => ({
  type: CREATE_COMMENT,
  payload: { postId, commentId }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = id => ({
  type: DELETE_COMMENT,
  payload: id
});
