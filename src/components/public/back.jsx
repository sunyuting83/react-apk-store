import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) =>
    history.length > 1 && (
        <div onClick={history.goBack} className="back"><i className="fa fa-angle-left"></i></div>
    );

export default withRouter(Back);