import { Component } from 'react';
import { connect } from 'react-redux';
import NetInfo, {
  NetInfoState,
  NetInfoSubscription,
} from '@react-native-community/netinfo';
import { updateNetworkStatus } from '../../data/modules/netInfo/actions';

interface Props {
  updateNetworkStatus: Function;
}

interface State {
  connectionInfoHistory: NetInfoState[];
}

class NetInfoMonitor extends Component<Props, State> {
  // *NOTE* the package has a bug that prevents it detecting a reconnect after wifi
  // connection has been disabled and re-enabled on the simulator. this is a known
  // issue in the community and because it is only related to the simulator and
  // not actual devices, there is no sign of a fix. therefore any code relying on
  // testing network connectivity (i.e. offline redux queue) will have to be done
  // on an actual device.

  _subscription: NetInfoSubscription | null = null;

  state = {
    connectionInfoHistory: [],
  };

  componentDidMount() {
    this._subscription = NetInfo.addEventListener(
      this._handleConnectionInfoChange
    );
  }

  componentWillUnmount() {
    this._subscription && this._subscription();
  }

  _handleConnectionInfoChange = (connectionInfo: NetInfoState) => {
    this.setState(({ connectionInfoHistory }) => ({
      connectionInfoHistory: [...connectionInfoHistory, connectionInfo],
    }));

    this.props.updateNetworkStatus(connectionInfo);
  };

  render() {
    return null;
  }
}

const mapDispatch = dispatch => ({
  updateNetworkStatus: networkState => {
    dispatch(updateNetworkStatus(networkState));
  },
});

export default connect(
  null,
  mapDispatch
)(NetInfoMonitor);
