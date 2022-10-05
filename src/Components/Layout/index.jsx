import React, { Fragment } from 'react';

const Layout = (props) =>{
    return (
        <Fragment>
            <div className="fixed_width">
            <h1 className="main_text">{props.header}</h1>
                {props.children}
            </div>
        </Fragment>
    );
}

export default Layout;