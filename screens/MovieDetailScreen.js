import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated, ImageBackground, TouchableOpacity } from 'react-native';
import BackgroundImage from './../assets/homescreen2.png';
import Header from '../components/Header';
import { getToken } from "../utils/Authtoken";
import axios from 'axios';
// import SystemBar from '../components/SystemBar';

export default function MovieDetails({ route, navigation }) {
    const { movieId } = route.params;
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fadeAnim] = useState(new Animated.Value(0)); // Animation for fade-in effect
    const [isInWishlist, setIsInWishlist] = useState(false); // State to track wishlist status
    const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTE1ZjI4MDM1YzY2M2Q2YzAzMGIzMzM1N2UxMmIxNiIsIm5iZiI6MTcyMDc3Mzk1My42NTA1MzMsInN1YiI6IjY2OGVjYWIxZmQ0YmU4Zjg0MTM5YzYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-7gn5WZFEJ59rdpkiIc8p8cTVmFAA2bsF_Qsct7b-M';

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            };

            try {
                setLoading(true);
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                const data = await response.json();
                setMovie(data);

                // **New Code**: Check if the movie is in the wishlist
                const token = await getToken();
                const wishResponse = await axios.post('http://10.0.2.2:8000/api/wishlist/check', { movie_id: movieId }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                });
                setIsInWishlist(wishResponse.data.isInWishlist);
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000, // 1 second
                    useNativeDriver: true,
                }).start();
            } catch (err) {
                console.error('Error fetching movie details:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [fadeAnim, movieId]);

    const toggleWishlist = async () => {
        // Define movie data
        const movieData = {
            movie_id: movie.id,
            poster: movie.poster_path,
            movie_name: movie.title,
        };

        try {
            const token = await getToken();
            if (isInWishlist) {
                // Remove from wishlist
                await axios.post('http://10.0.2.2:8000/api/wishlist/remove', movieData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Ensure this gets the correct token
                    }
                });
                setIsInWishlist(false);
            } else {
                // Add to wishlist
                await axios.post('http://10.0.2.2:8000/api/wishlist/add', movieData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Ensure this gets the correct token
                    }
                });
                setIsInWishlist(true);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };




    return (
        <View style={styles.container}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
                resizeMode="cover"
            >
                <Header navigation={navigation} style={styles.header} />
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {movie && (
                        <Animated.View style={{ opacity: fadeAnim }}>
                            <Image
                                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                                style={styles.poster}
                            />

                            <View style={styles.detailsContainer}>
                                <Text style={styles.title}>{movie.title}</Text>
                                <Text style={styles.overview}>{movie.overview}</Text>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
                                    <Text style={styles.rating}>Rating: {movie.vote_average}/10</Text>
                                </View>
                                <TouchableOpacity
                                    style={[styles.wishlistButton, isInWishlist ? styles.inWishlist : styles.notInWishlist]}
                                    onPress={toggleWishlist}
                                >
                                    <Text style={styles.wishlistButtonText}>
                                        {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    )}
                </ScrollView>
            </ImageBackground>
            {/* <SystemBar navigation={navigation} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
    background: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10, // Ensure it's above other content
    },
    poster: {
        width: '100%',
        height: 450,
        borderRadius: 10,
        marginVertical: 15,
    },
    scrollContent: {
        paddingHorizontal: 10,
        paddingBottom: 20, // Ensure there's space at the bottom
    },
    detailsContainer: {
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    overview: {
        fontSize: 16,
        color: '#ddd',
        textAlign: 'justify',
        lineHeight: 22,
        marginVertical: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    releaseDate: {
        fontSize: 16,
        color: '#bbb',
    },
    rating: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f5c518',
    },
    wishlistButton: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    inWishlist: {
        backgroundColor: '#f5c518',
    },
    notInWishlist: {
        backgroundColor: '#333',
    },
    wishlistButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});
