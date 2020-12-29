import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imgNext from '../assets/next.png';
import imgPrev from '../assets/prev.png';


const { width } = Dimensions.get("window");
const height = width * 0.6;

export default class SwiperImg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    scrollChange = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }

    render() {

        const listStories = this.props.storiesHot.map((item, index) => {
            return (
                <Image
                    ref={(img) => { this.img = img }}
                    key={index}
                    source={{ uri: item.path_image }}
                    style={styles.imgStyles}
                />
            )
        });
        const listText = this.props.storiesHot.map((item, index) => {
            return (
                <Text key={index} style={index === this.state.active ? styles.activeText : styles.text}>⬤</Text>
            )
        });
        return (
            <View style={styles.containerView}
            >
                <ScrollView
                    scrollEventThrottle={0}
                    pagingEnabled
                    horizontal
                    onScroll={this.scrollChange}
                    style={styles.containerView}
                    showsHorizontalScrollIndicator={false}

                >
                    {listStories}
                </ScrollView>
                <View style={styles.textView}>
                    {listText}
                </View>

                <View style={{
                    bottom: 130,
                    width: 300,
                    alignSelf: 'center'
                }}>
                    <View style={{
                        alignSelf: 'flex-start',
                        position: 'absolute',
                    }}>

                        <Image style={styles.imgNext} source={imgPrev} />
                    </View>
                    <View style={{
                        alignSelf: 'flex-end',
                        position: 'absolute',
                    }}>
                        <Image style={styles.imgNext} source={imgNext} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imgStyles: {
        width,
        height,
        resizeMode: 'cover',
        borderColor: '#888',
        borderWidth: 1
    },
    containerView: {
        width, height
    },
    textView: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    text: {
        color: '#888',
        margin: 3
    },
    activeText: {
        color: '#fff',
        margin: 3
    },
    imgNext: {
        width: 40,
        height: 40,
        opacity: .5
    },
    // imgPrev: {
    //     width: 30,
    //     height: 30,
    //     opacity: .5
    // }
})

