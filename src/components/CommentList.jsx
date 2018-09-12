import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';

const CommentList = ({ comments }) => (
    <div>
        {
            comments.map(comment =>
                <CommentCard key={comment.id} {...comment} />
            )
        }
    </div>
)

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentList;