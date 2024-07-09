import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const CarouselComponent = ({ data }) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const autoplayTimer = setTimeout(() => {
            if (carouselRef.current) {
                carouselRef.current.snapToNext();
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearTimeout(autoplayTimer);
    }, []);

    const _renderItem = ({ item }, parallaxProps) => (
        <View style={styles.item}>
            <ParallaxImage
                source={{ uri: item.thumbnail }}
                containerStyle={styles.imageContainer}
                style={styles.image}
                parallaxFactor={0.4}
                {...parallaxProps}
            />
            <Text style={styles.title} numberOfLines={2}>
                {item.name}
            </Text>
        </View>
    );

    return (
        <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={data}
            renderItem={_renderItem}
            hasParallaxImages={true}
            autoplay={true}
            autoplayInterval={3000} // Change slide every 3 seconds
            loop={true}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }),
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default CarouselComponent;
