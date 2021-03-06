/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Hero
 */

var React = require('React');

var Hero = React.createClass({
  render: function() {
    return (
      <div className="hero">
        <div className="wrap">
          <div className="text">{this.props.title}</div>
          <div className="minitext">
            {this.props.subtitle}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Hero;
