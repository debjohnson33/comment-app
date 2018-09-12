import React, { Component } from 'react';
import axios from 'axios';

export default class CommentForm extends Component {
    initialState = {
        comment: '',
        author: ''
    }
    state = this.initialState;

    handleOnChange = ({ target: { name, value }}) => {
        this.setState(_prevState => ({
            [name]: value
        }))
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const newComment = this.state;
        this.createComment(newComment);
    }

    createComment = newComment => {
        axios.post('/api/comments', { newComment })
            .then(comment => {
                this.props.addComment(comment)
                this.clearForm()
            })
            .catch(console.error)
    }

    clearForm = _ =>
        this.setState(_prevState => (this.initialState))

    hasInvalidFields = () => {
        const { comment, author } = this.state;

        if (comment.trim() !== '' && author.trim() !== '') {
            return false;
        }

        return true;
    }

    render () {
        const { comment, author } = this.state;
        const isDisabled = this.hasInvalidFields() ? 'true' : null;

        return (
            <form onSubmit={this.handleOnSubmit}>
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