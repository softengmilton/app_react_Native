import React from 'react';
import { StyleSheet, Button, View, StatusBar } from 'react-native';
import Video from 'react-native-video';

export default function VideoDetailsScreen() {
    const video = React.useRef(null);
    const secondVideo = React.useRef(null);
    const [status, setStatus] = React.useState({ isLooping: false });
    const [statusSecondVideo, setStatusSecondVideo] = React.useState({ isLooping: false });

    const handleLoad = (meta) => {
        // Meta data can be used here if needed
        setStatus((prev) => ({ ...prev, duration: meta.duration }));
    };

    const handleProgress = (progress) => {
        setStatus((prev) => ({ ...prev, position: progress.currentTime }));
    };

    const handleEnd = () => {
        video.current.seek(0);
    };

    return (
        <View style={styles.container}>
            <Video
                ref={video}
                source={{ uri: "https://www.youtube.com/watch?v=2qCmRJz3NOE" }}
                style={styles.video}
                controls
                resizeMode="contain"
                onLoad={handleLoad}
                onProgress={handleProgress}
                onEnd={handleEnd}
                repeat={status.isLooping}
            />
            <View style={styles.buttons}>
                <Button title="Play from 5s" onPress={() => video.current.seek(5)} />
                <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => setStatus({ ...status, isLooping: !status.isLooping })} />
            </View>
            {/* <Video
                ref={secondVideo}
                source={require("./demo.mp4")}
                style={styles.video}
                controls
                resizeMode="contain"
                onLoad={handleLoad}
                onProgress={handleProgress}
                onEnd={handleEnd}
                repeat={statusSecondVideo.isLooping}
            /> */}
            <View style={styles.buttons}>
                <Button title="Play from 50s" onPress={() => secondVideo.current.seek(50)} />
                <Button title={statusSecondVideo.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => setStatusSecondVideo({ ...statusSecondVideo, isLooping: !statusSecondVideo.isLooping })} />
            </View>
            <StatusBar barStyle="default" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
        width: '100%',
        height: 200,
    },
    buttons: {
        marginVertical: 16,
    }
});
