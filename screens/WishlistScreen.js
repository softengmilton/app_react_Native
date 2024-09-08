import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ImageBackground, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';
import wishlistImage from './../assets/homescreen2.png';
import { getToken } from "../utils/Authtoken";
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function WishlistScreen({ navigation }) {
    const [wishlistMovies, setWishlistMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching wishlist movies
        const fetchWishlist = async () => {
            try {
                const token = await getToken();
                const response = await axios.get('http://10.0.2.2:8000/api/wishlist', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setWishlistMovies(response.data);
            } catch (error) {
                console.error('Error fetching wishlist movies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlist();
    }, []);

    // Remove item from wishlist
    const removeFromWishlist = async (id) => {
        try {
            const token = await getToken();
            // console.log(id);
            await axios.post('http://10.0.2.2:8000/api/wishlist/removewish', { id }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            // Update state to remove item
            setWishlistMovies(wishlistMovies.filter(movie => movie.id !== id));
        } catch (error) {
            console.error('Error removing item from wishlist:', error);
        }
    };

    // Render item function for FlatList
    const renderMovieItem = ({ item }) => (
        <TouchableOpacity style={styles.movieItem}
            onPress={() => {// Handle any additional logic
                navigation.navigate('MovieDetails', { movieId: item.movie_id }); // Navigate to details
            }}
        >
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster}` }} style={styles.movieImage} />
            <View style={styles.movieDetails}>
                <Text style={styles.movieTitle}>{item.movie_name}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeFromWishlist(item.id)}>
                <Ionicons name="trash-outline" size={20} color="#ffffff" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    // Header component for FlatList
    const ListHeader = () => (
        <View>
            <Header navigation={navigation} />
            <Text style={styles.heading}>Wishlist</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ImageBackground
                    source={wishlistImage}
                    style={styles.background}
                    resizeMode="cover"
                >
                    {loading ? (
                        <Text style={styles.loading}>Loading...</Text>
                    ) : (
                        <FlatList
                            data={wishlistMovies}
                            renderItem={renderMovieItem}
                            keyExtractor={item => item.id.toString()}
                            numColumns={1}
                            ListHeaderComponent={ListHeader}
                            contentContainerStyle={styles.flatListContainer}
                            scrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                        />
                    )}
                    <SystemBar navigation={navigation} />
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        height: screenHeight,
        justifyContent: 'space-between',
    },
    flatListContainer: {
        flexGrow: 1,
        paddingTop: 5,
        paddingHorizontal: 5,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        color: '#ffffff',
        textAlign: 'left',
    },
    movieItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
        backgroundColor: '#cccc',
        borderRadius: 10,
        height: 120,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    movieImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#666666',
    },
    movieDetails: {
        flex: 1,
        marginLeft: 10,
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    playButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0056b3',
    },
    playButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    removeButton: {
        backgroundColor: '#FF4D4D',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#cc0000',
    },
    removeButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#ffffff',
    }
});
