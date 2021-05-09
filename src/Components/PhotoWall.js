//import React, {Component} from 'react';
import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'; // to define types for the functional react components
import { Link } from 'react-router-dom';

//functional approach
function PhotoWall (props) {
    return  <div>
                <Link className="addIcon" to="/AddPhoto" />
                <div className="photo-grid">
                    {props.posts
                    .sort((x, y) => y.id - x.id)
                    .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
                </div>
            </div>
}

// to enforce the expected properties types and if those are required 
PhotoWall.protoTypes = {
    posts: PropTypes.array.isRequired
}


/*class Photowall extends Component {
    render() {
        return <div className="photo-grid">
            {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
        </div>
    }
}*/

export default PhotoWall;