import React, { Component } from 'react';
import Card from '../card/Card';
import Axios from 'axios';

// vai conter os cards 
class Pedidos extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    
    state = {
        servicos: [],
        status:''
    }
    
    render() {
            return (    
                <div>
                    
                    <div className="row">
                            {this.state.servicos.map(servico => {
                                if(servico.status == this.state.status) {
                                    return (
                                            <div className="col-md-3">
                                                <Card 
                                                    key= { servico.id }
                                                    id = { servico.id}
                                                    nome={ servico.name } 
                                                    desc= {servico.serviceName}
                                                    status = {servico.status}
                                                    imagem= { servico.imagem}>                                                  > 
                                                </Card>
                                            </div> 
                                    )
                                    
                                }
                                else 
                                {
                                    return(<div></div>);
                                }
                            }
                        )}
                    </div>
                </div>
        );
    }     
    
    componentDidMount() {
        Axios.get('http://5c5d8680ef282f0014c3d956.mockapi.io/api/v1/orders')
            .then((res) => {
                 this.setState({ servicos: res.data, status: this.props.status });
            });
    }

    
}   
export default Pedidos;