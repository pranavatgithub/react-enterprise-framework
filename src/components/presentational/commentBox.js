import React, { Component } from 'react';

export default class CommentBox extends Component {
    state = { comments: '' };

    onInput = (e) => {
        this.setState({ comments: e.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ comments: '' });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comments} onChange={this.onInput}></textarea>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}