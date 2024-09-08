import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import SystemBar from '../components/SystemBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'; // Import Axios for HTTP requests
import { getToken } from "../utils/Authtoken";
const numColumns = 2;
const screenWidth = Dimensions.get('window').width;

const SearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [pressCounts, setPressCounts] = useState({});

    useEffect(() => {
        // Initialize pressCounts or fetch existing counts from AsyncStorage/state if needed
    }, []);

    const handleSearch = async () => {
        try {
            const token = await getToken(); // Get the user token from AsyncStorage // Get the user ID from AsyncStorage

            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&api_key=f115f28035c663d6c030b33357e12b16`);
            const data = await response.json();
            setSearchResults(data.results);

            // Send search data to the Laravel backend
            // await axios.post(
            //     'http://10.0.2.2:8000/api/searches',
            //     { query: searchQuery }, // Replace userId with the actual user ID from AsyncStorage
            //     { headers: { Authorization: `Bearer ${token}` } }
            // );
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => {
            navigation.navigate('MovieDetails', { movieId: item.id });
        }}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderNoData = () => (
        <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>No movies found</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/homescreen1.png')}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search for movies"
                            onChangeText={text => setSearchQuery(text)}
                            value={searchQuery}
                        />
                        <TouchableOpacity
                            style={styles.searchButton}
                            onPress={handleSearch}
                        >
                            <Icon name="search" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    {searchResults.length === 0 ? (
                        renderNoData()
                    ) : (
                        <FlatList
                            data={searchResults}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                            numColumns={numColumns}
                            contentContainerStyle={styles.flatListContainer}
                        />
                    )}
                </View>
                <SystemBar navigation={navigation} />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    searchButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    flatListContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
    },
    itemImage: {
        width: (screenWidth - 40) / numColumns - 20,
        height: (screenWidth - 40) / numColumns - 20,
        borderRadius: 5,
        marginBottom: 5,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    noDataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDataText: {
        fontSize: 18,
        color: '#777',
    },
});

export default SearchScreen;
