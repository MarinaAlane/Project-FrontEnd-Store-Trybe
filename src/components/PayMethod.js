import './styles/style.css';
import React, { Component } from 'react';

class PayMethod extends Component {
  render() {
    const card = 'https://png2.cleanpng.com/sh/f4e0775e146d5ff4c95f911ddca92a0c/L0KzQYm3VME5N6t3iZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfJidpwyeARuZHn3PbTokvQubppzedDsZT3wf7Bsmb1kepZpgeY2Y3H1dH68gfQ4PWE3T6tvYkG1SHA6V8c1QGU8SqMAMkSzRoG4Wck3PWU2RuJ3Zx==/kisspng-computer-icons-bank-credit-card-finance-money-credit-card-5ad750279fb128.3774847215240601996541.png';
    const bankSlip = 'https://png2.cleanpng.com/sh/9dabf0120be93eea9f8016164a681abe/L0KzQYm3VsI6N5ltgpH0aYP2gLBuTfJiepR0fNc2c3PkfrBskwMuf5ZniAZ4cnWwcrFzhgRwNZR0heJAdHX1PcT2hwR4aaNqRdV4ZHnqf37rhb1jaaN3eZ8AYkO5RbXpgscxO2ZnS5C7OUa6QIi3UsE2O2E3UKsAOUW3RYq9TwBvbz==/kisspng-barcode-scanners-webstore-boleto-computer-software-codigo-de-barra-5b365dbb7035b3.2967070215302895954596.png';
    return (
      <fieldset>
        <legend>Método de Pagamento</legend>
        <div>
          <p>Boleto</p>
          <label htmlFor="boleto">
            <input type="radio" value="boleto" name="method" id="boleto" />
            <img src={ bankSlip } alt="bankSlip" className="card" />
          </label>
        </div>
        <div>
          <p>Cartão de Crédito</p>
          <label htmlFor="visa">
            <input type="radio" value="visa" name="method" id="visa" />
            Visa
            <img src={ card } alt="card" className="card" />
          </label>
          <label htmlFor="master">
            <input type="radio" value="master" name="method" id="master" />
            MasterCard
            <img src={ card } alt="card" className="card" />
          </label>
          <label htmlFor="elo">
            <input type="radio" value="elo" name="method" id="elo" />
            Elo
            <img src={ card } alt="card" className="card" />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PayMethod;
