import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ImageBackground, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import SystemBar from '../components/SystemBar';
import wishlistImage from './../assets/homescreen2.png';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function WishlistScreen({ navigation }) {
    const [wishlistMovies, setWishlistMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching wishlist movies
        axios.get('http://10.0.2.2:8000/api/helodata')
            .then(response => {
                setWishlistMovies(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching wishlist movies:', error);
            });
    }, []);

    // Render item function for FlatList
    const renderMovieItem = ({ item }) => (
        <View style={styles.movieItem}>
            <Image source={{ uri: item.image }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.name}</Text>
            <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>
        </View>
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
        justifyContent: 'space-between', // Ensure content and SystemBar are spaced correctly
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
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        flex: 1,
        marginLeft: 10,
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
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#ffffff',
    }
});
