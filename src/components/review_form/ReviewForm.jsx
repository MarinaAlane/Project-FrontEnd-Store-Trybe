import React, { Component } from 'react';

class ReviewForm extends Component {
  render() {
    return (
      <div>
        <h2>Avaliação</h2>
        <form>
          <input type="text" name="name" placeholder="Email" />
          <select>
            <option value="1">1 estrela</option>
            <option value="2">2 estrela</option>
            <option value="3">3 estrela</option>
            <option value="4">4 estrela</option>
            <option value="5">5 estrela</option>
          </select>
          <br />
          <textarea placeholder="Mensagem (opcional)" />
          <br />
          <input type="submit" value="Avaliar" />
        </form>
      </div>
    );
  }
}

export default ReviewForm;
