import React from 'react'

function Itemcard({ title, url }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={url} className="card-img-top" alt="nothing" />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    );
}

export default Itemcard;
