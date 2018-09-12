import React from 'react';
import PropTypes from 'prop-types'

const CommentCard = ({ comment, author }) => (
    <div>
        <p>{comment}</p>
        <p>- {author}</p>
    </div>
) 

CommentCard.propTypes = {
    comment: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default CommentCard;