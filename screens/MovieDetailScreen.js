import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width: screenWidth } = Dimensions.get('window');

const MovieDetailScreen = () => {
    const videoRef = React.useRef(null);
    const backgroundVideo = { uri: 'https://www.youtube.com/watch?v=mVXY5Sj9zc8&ab_channel=AhmedFahad' }; // Replace with your video file URL

    const onBuffer = () => {
        console.log('Buffering...');
    };

    const onError = (error) => {
        console.error('Error loading video:', error);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.videoContainer}>
                <Video
                    source={backgroundVideo}
                    ref={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    style={styles.backgroundVideo}
                    resizeMode="cover"
                    paused={false} // Start playing the video immediately
                    repeat={true} // Repeat the video when it ends
                />
            </View>
            <View style={styles.detailsContainer}>
                {/* Movie Details */}
                <Text style={styles.movieTitle}>Movie Title</Text>
                <Text style={styles.movieDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
                    nec justo non finibus.
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    videoContainer: {
        height: screenWidth * (9 / 16), // Assuming 16:9 aspect ratio
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    detailsContainer: {
        padding: 20,
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    movieDescription: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default MovieDetailScreen;
