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
import ReactDOM from 'react-dom';
import document from 'global/document';

import POPULATION from './data/population';
import DENSITY from './data/population-density';

const app = (
  <main>
    <h1>Your react-vis example</h1>
    <h3>Population data</h3>
    <div className="data-wrap">
      <p className="data">{JSON.stringify(POPULATION)}</p>
    </div>

    <h3>Density data</h3>
    <div className="data-wrap">
      <p className="data">{JSON.stringify(DENSITY)}</p>
    </div>
  </main>
);

// Adding new element instead.
const el = document.createElement('div');
document.body.appendChild(el);
ReactDOM.render(app, el);
