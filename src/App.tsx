import React, { PureComponent } from 'react';
import './App.css';
import IconsList from "./IconsList";

interface State {
  showIcons: boolean
}

class App extends PureComponent<{}, State> {
  state: State = {
    showIcons: false,
  };

  _t: any = null;

  componentDidMount() {
    // simulating delays for some API requests
    this._t = setTimeout(
      () => {
        this.setState({ showIcons: true });
      },
      500
    );
  }

  componentWillUnmount() {
    if (this._t) {
      clearTimeout(this._t);
    }
  }

  render() {
    const {showIcons} = this.state;

    return (
      <div>
        Do you see an icon here inside square brackets?
        <br/>
        {showIcons ? <IconsList/> : <>waiting...</>}
        <br/>
        Check, will you see it again when request to <code>icons.*.svg</code> get 304 response.
      </div>
    );
  }
}

export default App;
