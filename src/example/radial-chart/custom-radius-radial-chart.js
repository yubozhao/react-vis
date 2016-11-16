// Copyright (c) 2016 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';

import {RadialChart} from '../../';

function highLightCheck(hoveredSection, angle) {
  if (!hoveredSection) {
    return 1.0;
  }
  return hoveredSection === angle ? 1 : 0.6;
}

export default class SimpleRadialChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoveredSection: false
    };
  }

  render() {
    const {hoveredSection} = this.state;
    return (
      <RadialChart
        animation={true}
        radiusDomain={[0, 20]}
        data={[
          {
            angle: 1,
            id: 1,
            radius: 10,
            opacity: highLightCheck(hoveredSection, 1)
          },
          {
            angle: 2,
            id: 2,
            radius: 20,
            opacity: highLightCheck(hoveredSection, 2)},
          {
            angle: 5,
            id: 3,
            radius: 5,
            opacity: highLightCheck(hoveredSection, 3)},
          {
            angle: 3,
            id: 4,
            radius: 14,
            opacity: highLightCheck(hoveredSection, 4)},
          {
            angle: 5,
            id: 5,
            radius: 12,
            opacity: highLightCheck(hoveredSection, 5)}
        ]}
        onSectionMouseOver={row => this.setState({hoveredSection: row.id})}
        onSectionMouseOut={() => this.setState({hoveredSection: false})}
        width={300}
        height={300} />
    );
  }
}
