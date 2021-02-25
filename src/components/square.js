import React from 'react';
import { connect } from 'react-redux';
import Piece from './piece';

class Square extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: '',
      piece_name: '',
      image: '',
    };
    this.handleSelectPiece = this.handleSelectPiece.bind(this);
  }
  componentDidMount() {}
  handleSelectPiece(event) {
    console.log(event.target);
  }
  render() {
    const { className, id } = this.props;

    if (className) {
      return (
        <React.Fragment>
          <div
            className={className}
            id={`piece_${id}`}
            value={id}
            onClick={(e) => this.handleSelectPiece(e)}
          >
            <Piece id={id} className={'piece'} />
          </div>
          <></>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <></>
        </React.Fragment>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    image_url: state.image_url,
  };
}

export default connect(mapStateToProps)(Square);
