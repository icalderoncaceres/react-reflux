/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */
//import dependencies
import React from 'react';
import Reflux from 'reflux';

//Import stores and actions
import TablesStore from '../../stores/recurrent/TablesStore';
import TablesActions from '../../actions/recurrent/TablesActions';
import AdministratorActions from '../../actions/administrator/AdministratorActions';
//Import data
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//Class Info
class TablesDefault extends Reflux.Component {

  //Contructor
  constructor(props) {
    //Props
    super(props);
    //Stores
    this.stores = [TablesStore];
    //data
    this._buttonAction = this._buttonAction.bind(this);
  }
  // ejecucion de actions
  _actionGo(data){
    var _data={}
    switch (data.action) {
      case 'edit':
        if(data.info.cell=='true'){
          _data=data.info.row;
          AdministratorActions.editUser(_data);
        }
        break;

      case 'delete':
      if(data.info.cell=='true'){
        _data=data.info.row;
        AdministratorActions.deleteUser(_data.id);
      }
        break;

    }
  }

  // Create Objecto json para action
  _actionEdit(_data){
    var _info={
      info:_data,
      action:'edit'
    };
    this._actionGo(_info);
  }


  // Create Objecto json para action
  _actionDelete(_data){
    var _info={
      info:_data,
      action:'delete'
    };
    this._actionGo(_info);
  }


  _buttonAction(cell, row) {
    // cactura datos de la tabla
    var _data={
      cell:cell,
      row:row
    };
    return (
      <div className="btn-group" role="group" aria-label="...">
        <div className="btn btn-primary" role="group" aria-label="..." onClick={this._actionEdit.bind(this, _data)}><i className="fa fa-pencil-square-o"></i></div>
        <div className="btn btn-primary" role="group" aria-label="..." onClick={this._actionDelete.bind(this, _data)}><i className="fa fa-trash"></i></div>
      </div>
    );
  }
  _nodeHeader() {
    var _type = this.props.type;
    var _nodeTable;
    switch (_type) {
        //Second level of table
      case 2:
        _nodeTable = this.state.columns_two.map((e, i) => {
          var _bool = (i == 0)
            ? true
            : false;

          return (
            <TableHeaderColumn isKey={_bool} dataField={e.field} key={i} dataSort={true}>{e.title}</TableHeaderColumn>
          );
        }, this);
        break;

        //Third level of table
      case 3:
        _nodeTable = this.state.columns_third.map((e, i) => {
          var _bool = (i == 0)
            ? true
            : false;
          if (e.field == "action") {
            return (
              <TableHeaderColumn isKey={_bool} dataField={e.field} key={i} dataSort={true} dataFormat={this._buttonAction.bind(this)}>{e.title}</TableHeaderColumn>
            );
          } else {

            return (
              <TableHeaderColumn isKey={_bool} dataField={e.field} key={i} dataSort={true}>{e.title}</TableHeaderColumn>
            );
          }
        }, this);
        break;

        //default label
      default:
        _nodeTable = this.state.columns.map((e, i) => {
          var _bool = (i == 0)
            ? true
            : false;

          return (
            <TableHeaderColumn isKey={_bool} dataField={e.field} key={i} dataSort={true}>{e.title}</TableHeaderColumn>
          );
        }, this);

        break;
    }

    return _nodeTable;
  }

  //Render
  render() {
    var _data = [];
    switch (this.props.type) {
      case 2:
        _data = this.state.data_two;
        break;
      case 3:
        _data = this.state.data_third;
        break;
      default:
        _data = this.state.data;
        break;

    }

    //REturn info from table
    return (
      <BootstrapTable striped hover data={_data} pagination search selectRow={this.props.selectRow}>
        {this._nodeHeader()}
      </BootstrapTable>
    )
  }
}
export default TablesDefault;
