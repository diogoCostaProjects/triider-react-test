import React, { Component } from 'react';

class Card extends React.Component {
    render() {
        return(
            <div className="card bg-light mb-6" >
                <div className="card-header">{ this.props.desc }</div>
                    <div className="card-body">
                        <p className="card-title">{this.props.id}</p>
                        <p className="card-text">{ this.props.name }</p>
                        <p className="card-text">{ this.props.status }</p>
                        <a href="#" className="btn btn-primary">VER ORÇAMENTOS</a>
                    </div>
            </div>  
        );
    }   
}


export default Card;