import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "코니",
        comment: "안녕하세요. 코니입니다."
    },
    {
        name: "비회원",
        comment: "코멘트를 하나 더 달아봅니다."
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map(comment => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
