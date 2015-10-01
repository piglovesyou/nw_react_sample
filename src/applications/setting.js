const _mixins = require('./_mixins');
const React = require('react');
const {Link, State} = require('react-router');
const Store = require('../stores');
const Title = require('../components/Title');

const Setting = React.createClass({

  createState() {
    let store = Store.get();
    return {
      count: store.count
    };
  },

  mixins: [_mixins],

  render() {
    return (
      <div className="app-setting container">
        <Title>Setting</Title>
        <p><Link to="/">&lt;- Back</Link></p>
        <p>Clicked {this.state.count} times</p>
      </div>
    );
  }

});

module.exports = Setting;
