const React = require('react');
const {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler
} = require('react-router');;
const Index = require('./applications');
const Setting = require('./applications/setting');



const App = React.createClass({
  getInitialState: function () {
    return {
    };
  },
  render: function () {
    return (
      <RouteHandler store={this.props.store}/>
    );
  }
});

const NotFound = React.createClass({
  render: function () {
    return <h2>Not found</h2>;
  }
});

module.exports = (
  <Route handler={App}>
    <Route handler={Index} name="index" path="/" />
    <Route handler={Setting} name="setting" path="setting" />
    <NotFoundRoute handler={NotFound} />
  </Route>
);
