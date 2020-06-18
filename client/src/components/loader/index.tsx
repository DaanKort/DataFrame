import React from 'react';

const Loader: React.FC = () => (
    <div className="spinner">
        <p>Loading...</p>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
    </div>
)

export default Loader;