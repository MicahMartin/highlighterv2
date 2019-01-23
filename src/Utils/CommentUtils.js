/**
 * Comment services class
*/
export default class CommentUtils {

  static openComments() {
    const commentContent = document.getElementById('comments-content');
    const commentToggleBar = document.getElementById('comments-toggle-bar');

    try {
      commentContent.classList.add("ugc-comments--active");
      commentToggleBar.innerHTML = commentToggleBar.innerHTML.replace('Show', 'Hide');
    } catch (e) {
      console.error("opencomments error: ", e);
    } 
  };

  static addQuoteToForm(comment){
    CommentUtils.openComments();
    const newComment = document.getElementById('new-comment');
    const addComment = document.getElementById('add-comment-form');

    try {
      newComment.value += comment;
      addComment.scrollIntoView();
    } catch (e) {
      console.error("addQuote error error: ", e);
    }

  };
};
