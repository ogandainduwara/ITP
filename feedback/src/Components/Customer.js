import React, {Component} from 'react';
import Rating from "./Rating";
import Comments from "./Comments";

class Customer extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center">Customer Feedback</h2>
                <Rating/>
                <Comments/>
            </div>
        );
    }
}

export default Customer;