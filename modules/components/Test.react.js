//Import dependencies
import React from 'react';

var _list1 = [
  {
    name: 'daniel',
    class: 'info'
  }, {
    name: 'asd',
    class: 'info'
  }, {
    name: 'asdasfrwer'
  }, {
    name: 'da asd  niel'
  }, {
    name: ' asd we'
  }, {
    name: 'dani asdqw el'
  }
]

var _list2 = [
  {
    name: 'luchito'
  }, {
    name: 'info'
  }, {
    name: 'fernando'
  }, {
    name: 'no se'
  }
];
//Create class
class Test extends React.Component {

  //Contructor
  constructor(props) {
    super(props)

    //states
    this.state = {
      'click': 0,
      'msm': 'Hola',
      'names': _list1
    };

    //Binding functions
    this._changeMe = this._changeMe.bind(this);
  }

  //Function private change me
  _changeMe() {
    //Data Info
    var _info = (this.state.click == 0)
      ? 1
      : 0;
    //New msm
    var newString = (this.state.click == 0)
      ? "adios"
      : "hola";

    //New msm
    var newArray = (this.state.click == 0)
      ? _list2
      : _list1;
    //Set status
    this.setState({'click': _info, 'msm': newString, 'names': newArray});
  }

  _nodeList() {
    var nodes = this.state.names.map((data, i) => {
      return (
        <NameItem key={i} item={data}></NameItem>
      );
    });

    return nodes;
  }

  //render
  render() {

    //Info to render
    return (
      <div>
        {this.state.msm}
        <br/>
        <ul>
          {this._nodeList()}
        </ul>

        <button onClick={this._changeMe}>Cambiame</button>
      </div>
    )
  }

}

//New class
class NameItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.item;

    return (
      <li className={data.class}>{data.name}</li>
    )
  }
}

export default Test;
