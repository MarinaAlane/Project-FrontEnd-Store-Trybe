import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShopFinish extends Component {
constructor() {
    super()
    this.state = { 
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: '',
        redirect: false,
     },
};

handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
}

btnFinishShop() {
    const { nome, email, cpf, telefone, endereco, numero,  complemento, cidade, estado } = this.state;
    const generalArray = [nome, email, cpf, telefone, endereco, numero, complemento, cidade, estado];
    const arrayCheck = generalArray.every((item) => item !== '');
    if (arrayCheck) this.setState({ redirect: true })
}

    render() { 
        return ( 

        );
    }
}
 
export default ShopFinish;
