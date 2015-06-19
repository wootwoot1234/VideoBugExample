'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
} = React;

var Reward = require('./Reward');

class Main extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            showReward: false,
        }
    }

    handleTouchStart(event: Object) {
        this.setState({showReward: true});
    }

    closeVideo() {
        this.setState({showReward: false});
    }

    render() {
        if(this.state.showReward) {
            return (
                <Reward closeVideo={() => this.closeVideo()} />
                );
        } else {
            return (
                <View
                    style={styles.container}
                    onTouchStart={(event) => this.handleTouchStart(event)}>
                    <Text>Video Test App</Text>
                </View>
            );
        }
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = Main;
