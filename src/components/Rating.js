import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  increaseTrend = () => {
    this.setState({
      increasing: true,
      decreasing: false
    })
  }

  decreaseTrend = () => {
    this.setState({
      increasing: false,
      decreasing: true
    })
  }
  stablizeTrend = () => {
    this.setState({
      increasing: false,
      decreasing: false
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.rating > nextProps.rating) {
      this.decreaseTrend();
    } else if (this.props.rating < nextProps.rating) {
      this.increaseTrend();
    } else {
      this.stablizeTrend();
    }
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
