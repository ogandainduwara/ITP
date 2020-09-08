import React, {Component} from 'react';
import axios from 'axios';


class Comments extends Component {
    componentDidMount() {
        axios.get(`http://localhost:5000/feedback`)
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="w-50 mx-auto">
                <div className="my-3">
                    <p>this product is really good. I am recommending to you this product. best service.</p>
                    <div className="form-check form-check-inline text-secondary ">
                        <label className="form-check-label buttons " >Edit</label>
                        <label className="form-check-label mx-4 buttons" >Delete</label>
                        <label className="form-check-label mx-4 buttons" >Reply(1)</label>
                    </div>
                </div>

                <div className="my-5">
                    <p>this product is really good. I am recommending to you this product. best service.</p>
                    <div className="form-check form-check-inline text-secondary ">
                        <label className="form-check-label buttons" >Edit</label>
                        <label className="form-check-label mx-4 buttons" >Delete</label>
                        <label className="form-check-label mx-4 buttons" >Reply(0)</label>
                    </div>
                </div>

                <div className="my-5">
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your comment here..."/>
                    <button type="button" className="btn btn-primary my-2">Comment</button>
                </div>



            </div>
        );
    }
}

export default Comments;