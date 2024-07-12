import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated } from 'react-native';

export default function MovieDetails({ route }) {
    const { movieId } = route.params;
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fadeAnim] = useState(new Animated.Value(0)); // Animation for fade-in effect

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTE1ZjI4MDM1YzY2M2Q2YzAzMGIzMzM1N2UxMmIxNiIsIm5iZiI6MTcyMDc3Mzk1My42NTA1MzMsInN1YiI6IjY2OGVjYWIxZmQ0YmU4Zjg0MTM5YzYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-7gn5WZFEJ59rdpkiIc8p8cTVmFAA2bsF_Qsct7b-M'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
            .then(response => response.json())
            .then(data => {
                setMovie(data);
                // Trigger fade-in animation
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000, // 1 second
                    useNativeDriver: true,
                }).start();
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
                setLoading(false);
            });
    }, [fadeAnim, movieId]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            {movie && (
                <Animated.View style={{ opacity: fadeAnim }}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                        style={styles.poster}
                    />
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.overview}>{movie.overview}</Text>
                    <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
                    <Text style={styles.rating}>Rating: {movie.vote_average}</Text>
                </Animated.View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    poster: {
        width: '100%',
        height: 400,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    overview: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'justify',
    },
    releaseDate: {
        fontSize: 16,
        marginVertical: 5,
    },
    rating: {
        fontSize: 16,
        marginVertical: 5,
    },
});
