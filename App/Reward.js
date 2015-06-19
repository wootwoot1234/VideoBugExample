'use strict';

var React = require('react-native');
var Video = require('react-native-video');

var {
    StyleSheet,
} = React;

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        //backgroundColor: "red"
    },
});


class Reward extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reinforcerLength: 1,
            paused: false
        }
    }
    onLoad() {
        console.log("onLoad()");
    }
    onProgress(progress) {
        console.log("onProgress() ", progress);
        if(progress.currentTime > this.state.reinforcerLength) {
            //this.setState({paused: true});
            this.props.closeVideo();
        }
    }
    onEnd() {
        console.log("onEnd()");
    }

    render(){
        return (
            <Video source={{uri: "SampleVideo"}} // Can be a URL or a local file.
                resizeMode="cover"           // Fill the whole screen at aspect ratio.
                repeat={true}                // Repeat forever.
                paused={this.state.paused}
                onLoad={this.onLoad.bind(this)}    // Callback when video loads
                onProgress={this.onProgress.bind(this)}    // Callback every ~250ms with currentTime
                onEnd={this.onEnd.bind(this)}           // Callback when playback finishes
                style={styles.backgroundVideo} />
        );
    }
};

module.exports = Reward;