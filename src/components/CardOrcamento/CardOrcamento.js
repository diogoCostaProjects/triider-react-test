import React, { Component } from 'react';

class CardOrcamento extends React.Component {
    render() {
        return(
            <div className="card bg-light mb-6" >
                <div className="card-header">{ this.props.id }</div>
                    <div className="card-body">
                        <p className="card-title">{ this.props.desc }</p>
                        <p className="card-text">{ this.props.name }</p>
                        <p className="card-text">{ this.props.status }</p>

                    </div>
            </div>  
        );
    }   
}
export default CardOrcamento;