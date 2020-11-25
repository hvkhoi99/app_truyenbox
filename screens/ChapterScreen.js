import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getListImgs } from '../actions/image';

class ChapterScreen extends Component {

    componentDidMount() {
        const { chapter_id } = this.props.route.params;
        this.props.getImages(chapter_id);
    }


    render() {
        // console.log(this.props.images);
        const listImages = this.props.images.map((img, index) => {
            return <Image key={index} style={styles.ImageStyle} source={img.path_image} />
        })
        return (
            <ScrollView>
                <View style={styles.container}>
                    {listImages}
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        flexDirection: 'column',
    },
    ImageStyle: {
        width: 350,
        height: 480,
        marginTop: 7,

    },
})

const mapStateToProps = (state) => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: (chapter_id) => {
            dispatch(getListImgs(chapter_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterScreen);