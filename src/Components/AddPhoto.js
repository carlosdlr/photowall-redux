import React, {Component} from 'react';

class AddPhoto extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const imageDescription = event.target.elements.description.value;

        const post = {
            id: new Date(),
            imageLink: imageLink,
            description: imageDescription
        }

        if(imageLink && imageDescription) {
            this.props.startAddingPost(post);
            this.props.history.push('/');
        }

    }

    render() {
        return <div>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link" />
                    <input type="text" placeholder="Description" name="description" />
                    <button> Post </button>
                </form>
            </div>
        </div>
    }
}

export default AddPhoto;