import React, { Component } from 'react';

class reviewForm extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <form>
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default reviewForm;
