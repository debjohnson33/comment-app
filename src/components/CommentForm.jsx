import React, { Component } from 'react';

export default class CommentForm extends Component {
    state = {
        comment: '',
        author: ''
    }

    handleOnChange = ({ target: { name, value }}) => {
        this.setState(_prevState => ({
            [name]: value
        }))
    }

    hasInvalidFields = () => {
        const { comment, author } = this.state;

        if (comment.trim() !== '' && author.trim() != '') {
            return false;
        }

        return true;
    }

    render () {
        const { comment, author } = this.state;
        const isDisabled = this.hasInvalidFields() ? 'true' : null;

        return (
            <form>
                <div>
                    <textarea
                        onChange={this.handleOnChange} 
                        placeholder="Write something..."
                        name="comment"  
                        value={comment}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="author" aria-labelledby="author">
                        Your Name
                    </label>
                    <input
                        onChange={this.handleOnChange}
                        id="author" 
                        type="text"
                        name="author"
                        value={author}
                    />
                </div>
                <button disabled={isDisabled}>Add Comment</button>
            </form>
        )
    }
}