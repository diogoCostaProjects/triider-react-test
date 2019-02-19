import React, { Component } from 'react';
import './App.css';
import Top from './components/top/top.js';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Orcamentos from './components/orcamentos/orcamentos';
import Pedidos from './components/pedidos/Pedidos';




class App extends Component {
    constructor(props) {
        super(props);
    }

render() {
      return (
          <div className="container">
             <Top></Top> 
             <Router>
                        <div className="container">
                            <div className="row content">
                                <div className="col-sm-4">
                                    <p>MEUS ORÇAMENTOS</p>
                                </div>
                                
                                <div className="col-lg-6">
                                    <ul className="nav justify-content-end">
                                        <li className="nav-item">
                                            <Link to='/pedidos/aberto' className="nav-link">Abertos</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/pedidos/finalizado' className="nav-link">Finalizados</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/pedidos/cancelado' className="nav-link">Cancelados</Link>
                                        </li>
                                    </ul>

                                    
                                </div>
                            </div>
                        </div>  
                    </Router>
             <main>
                                                                    
                    <Route path="/orcamentos" component={ Orcamentos }/>
                    <Route exact path='/pedidos/cancelado' render={(props) => <Pedidos {...props} status='cancelado'/>}/>
                    <Route exact path='/pedidos/finalizado' render={(props) => <Pedidos {...props} status='finalizado'/>}/>
                    <Route exact path='/pedidos/aberto' render={(props) => <Pedidos {...props} status='finalizado'/>}/>
                
           
             </main>
          </div>
      );
  }
 
}

export default App;
