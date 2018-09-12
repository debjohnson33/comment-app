import React, { Component } from 'react';
import axios from 'axios';
import CommentList from '../components/CommentList';

export default class Comments extends Component {
    
    state = {
        comments: null
    }
    
    componentDidMount () {
        this.fetchComments()
    }

    fetchComments () {
        axios.get('/api/comments')
            .then(comments => this.setState({ comments }))
            .catch(console.error)
    }

    render () {
        const { comments } = this.state
        return (
            <div>
                {
                    comments && comments.length
                    ? <CommentList comments={comments} />
                    : null
                }
            </div>
        )
    }
}