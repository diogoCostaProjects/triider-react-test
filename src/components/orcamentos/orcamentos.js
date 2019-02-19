import React, { Component } from 'react';
import CardOrcamento from '../CardOrcamento/CardOrcamento';

class Orcamentos extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        orcamento: []
    }

    render() {
        return (
            <div className="row">
            {this.state.orcamento.map(orcamento => {
                
                    return (
                            <div className="col-md-3">
                                <CardOrcamento>                                                                         
                                </CardOrcamento>
                            </div> 
                    )
                    
                }
                
            
        )}
    </div>

        );
    }
}   
export default Orcamentos;