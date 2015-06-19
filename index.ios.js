var React = require('react-native');
var Main = require('./App/Main');

var {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
    //Navigator,
    View,
} = React;

var styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#111111'
    },
});

class VideoBugExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navigationBarHidden: true
        };
    }
    toggleNavBar() {
        this.setState({
            navigationBarHidden: !this.state.navigationBarHidden
        });
    }
    render() {
        return (
            <NavigatorIOS
            navigationBarHidden = {this.state.navigationBarHidden}
            style={styles.container}
            initialRoute={{
                title: 'Video Bug Example',
                component: Main,
                passProps: {
                    toggleNavBar: this.toggleNavBar.bind(this),
                }
            }} />
        );
    }
};


AppRegistry.registerComponent('VideoBugExample', () => VideoBugExample);