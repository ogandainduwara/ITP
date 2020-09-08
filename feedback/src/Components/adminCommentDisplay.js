import React, {Component} from 'react';

class AdminCommentDisplay extends Component {
    render() {
        return (
            <div>
                <div className="w-50 mx-auto my-5">
                    <h2 className="text-center my-4">Customer Comments</h2>
                    <div className="my-3">
                        <p>Username 01</p>
                        <p>this product is really good. I am recommending to you this product. best service.</p>
                        <div className="form-check form-check-inline text-secondary ">
                            <label className="form-check-label buttons" >Reply</label>
                        </div>
                    </div>

                    <div className="my-5">
                        <p>Username 02</p>
                        <p>this product is really good. I am recommending to you this product. best service.</p>
                        <div className="form-check form-check-inline text-secondary ">
                            <label className="form-check-label buttons" >Reply</label>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AdminCommentDisplay;