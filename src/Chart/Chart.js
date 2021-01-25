import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';
import BodyCompositionService from '../Services/BodyCompositionService';
import FormatService from '../Services/FormatService';
import UserService from '../Services/UserService';

class Chart extends Component {
  state = {
    userFullName: '',
    labels: [],
    weightData: [],
    bodyFatData: [],
    error: null
  };
  componentDidMount() {
    UserService.getFullName().then((res) => {
      this.setState({
        userFullName: res.full_name
      });
    });

    BodyCompositionService.getBodyCompositionAverage().then((chart) => {
      const weight = [];
      const body = [];
      const labels = [];

      chart.forEach((val) => {
        labels.push(val.to_char);
        weight.push(parseInt(val.weight));
        body.push(parseInt(val.body_fat));
      });

      this.setState({
        labels: labels,
        weightData: weight,
        bodyFatData: body
      });
    });
  }
  render() {
    const { userFullName, labels, bodyFatData, weightData } = this.state;
    const firstName = userFullName.split(' ')[0];
    return (
      <div>
        <h3>
          Hello {firstName && FormatService.firstLetterUpperCase(firstName)},
          here you can see some of your progress !
        </h3>
        <Line
          data={{
            labels: labels,
            datasets: [
              {
                label: 'Weight (pounds)',
                data: weightData,
                fill: false,
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 3
              },
              {
                label: 'Body fat (%)',
                data: bodyFatData,
                fill: false,
                borderColor: ['#0a043c'],
                borderWidth: 3
              }
            ]
          }}
        />
      </div>
    );
  }
}

export default withRouter(Chart);
