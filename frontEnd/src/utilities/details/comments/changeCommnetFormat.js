const changeCommentDateFormat = (commentDate) => {
  const currentDate = new Date();
  const date = new Date(commentDate);
  console.log(`commentDate`, date.getTime());
  console.log(`currentDate`, currentDate.getTime());
};

export default changeCommentDateFormat()