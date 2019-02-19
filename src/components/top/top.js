import React, { Component } from 'react';

class Top extends React.Component {
    render() {
        return ( 
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg navbar-spanght bg-spanght">
                  <div className="container">
                      <a className="navbar-brand" href="#">Triider</a>
                          <div className="container">
                              <div className="row">
                                  <p className="col-md-3">Início</p>   
                                  <p className="col-md-3">Catálogo de serviços</p>
                                  <p className="col-md-2">Meus orçamentos</p>
                                  <p className="col-md-2">Mensagens</p>
                                  <p className="col-md-2">Ajuda</p>
                              </div>
                    </div>
                  </div>
              </nav> 
         </div>
        );
    }
}
export default Top