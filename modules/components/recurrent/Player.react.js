//Import dependencies
import React from 'react';
import Reflux from 'reflux';

//Stiores

//stores
import PlayerActions from '../../actions/recurrent/PlayerActions';
import PlayerStore from '../../stores/recurrent/PlayerStore';

//class
class Player extends Reflux.Component {

  //Constructor
  constructor(props) {
    //Props
    super(props);

    this.stores = [PlayerStore];
  }

  //componentDidMount
  componentDidMount() {
    PlayerActions.initAudio();

    $('#modalThrAgents').on('hidden.bs.modal', function(e) {
      PlayerActions.pause();
    })
  }

  //Node transcription
  _nodeTrans() {
    var _node = this.state.tras.map((e, i) => {
      return (
        <div key={i} className={"btn btn-default btn-block btn-flat trans-kar " + e.canal}>{e.canal}: {e.text}</div>
      );
    }, this);

    return _node;
  }

  //Data

  //Render
  render() {
    return (
      <div>
        <div id="wavePlayerAll"></div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-xs-4">
                <button className="btn btn-primary col-md-12" onClick={PlayerActions.backWard}>
                  <i className="fa fa-step-backward"></i>
                  &nbsp; Backward
                </button>
              </div>
              <div className="col-xs-4">
                <button className="btn btn-primary col-md-12" onClick={PlayerActions.playPause}>
                  <i className="fa fa-play"></i>
                  &nbsp; Play / Pause &nbsp;
                  <i className="fa fa-pause"></i>
                </button>
              </div>
              <div className="col-xs-4">
                <button className="btn btn-primary col-md-12" onClick={PlayerActions.forWard}>
                  Forward &nbsp;
                  <i className="fa fa-step-forward"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <h4 className="text-right text-info">
              {this.state.currentTime}
              / {this.state.duration}
            </h4>
          </div>

          <div className="clearfix"></div>

          <div className="col-md-9 trasncripcion">
            <h4 className="text-info text-center">Transcription</h4>
            {this._nodeTrans()}
          </div>
          <div className="col-md-3 sent-emot">
            <h4 className="text-info text-center">Sentiments</h4>
            <a className="btn btn-app col-md-9">
              <span className="badge bg-red">10</span>
              <i className="fa fa-heart-o"></i>
              Angry
            </a>
            <a className="btn btn-app col-md-9">
              <span className="badge bg-red">10</span>
              <i className="fa fa-frown-o"></i>
              Sadly
            </a>
          </div>
        </div>

      </div>
    );
  }
}

//Externds
export default Player;
