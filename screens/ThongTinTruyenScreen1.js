import React, { Component } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { getListAuthor } from '../actions/author';
import { getListCategoriesByStoryId } from '../actions/category';
import { getChaptersByStoryId } from '../actions/story';
import TabBarOfThongTinTruyen from './../components/TabBarOfThongTinTruyen';



class ThongTinTruyenScreen1 extends Component {

    componentDidMount() {
        const story_id = this.props.route.params.story.story_id;
        this.props.getAuthor(story_id);
        this.props.getCategories(story_id);
        this.props.getChapters(story_id)
    }

    render() {
        const lastIndex = this.props.chapters.length - 1;
        const chapter_id = (lastIndex !== -1 ? this.props.chapters[lastIndex].id : 1)
        const { navigation } = this.props;
        const { story } = this.props.route.params;
        const listCates = this.props.categories.map((cate, index) => {
            return <Text style={styles.TextCate} key={index}>{cate.name} </Text>
        })
        return (
            <ScrollView>
                {story !== 0 ? (
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.Texttitle}>Tên: {story.name_story}</Text>
                        </View>
                        <View style={styles.InfoStyle}>
                            <Image style={styles.ImageStyle} source={{ uri: story.path_image }} />
                            <View style={styles.rightContain}>
                                <Text style={styles.InfoTextStyle}>Tác giả : <Text style={styles.TextCate}>{this.props.authors.name}</Text></Text>
                                <Text style={styles.InfoTextStyle}>Trạng thái : <Text style={styles.TextCate}>{story.status}</Text></Text>
                                <Text style={styles.InfoTextStyle}>Thể loại : {listCates}</Text>
                                <Text style={styles.InfoTextStyle}>Lượt xem : <Text style={styles.TextCate}>{story.view}</Text></Text>
                                <Text style={styles.InfoTextStyle}>Yêu thích : <Text style={styles.TextCate}>1000</Text></Text>
                            </View>
                        </View>

                        {/* onPressChapter={() => navigation.navigate('Chapter')} */}
                        <TabBarOfThongTinTruyen chapters={this.props.chapters} navigation={navigation} story={story} />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: 5,
                            paddingBottom: 5,
                        }}>
                            <TouchableOpacity>
                                <View style={styles.containerYeuThich}>
                                    <Text style={styles.TextYeuThichStyle}>
                                        Theo Dõi
                            </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Chapter", { chapter_id: chapter_id })}>
                                <View style={styles.containerDocTruyen}>
                                    <Text style={styles.TextDocTruyenStyle}>
                                        Đọc Truyện
                            </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                ) : (
                        <ActivityIndicator />
                    )}
            </ScrollView>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        authors: state.authors,
        categories: state.categories,
        chapters: state.chapters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAuthor: (story_id) => {
            dispatch(getListAuthor(story_id))
        },
        getCategories: (story_id) => {
            dispatch(getListCategoriesByStoryId(story_id))
        },
        getChapters: (story_id) => {
            dispatch(getChaptersByStoryId(story_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinTruyenScreen1)


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    containerDocTruyen: {
        alignItems: 'center',
        backgroundColor: 'black',
        height: 30,
    },
    Texttitle: {
        marginTop: 5,
        textTransform: "uppercase",
        // fontWeight: '700',
    },
    TextDocTruyenStyle: {
        marginTop: 5,
        textTransform: "uppercase",
        // fontWeight: '700',
        color: 'white'
    },
    ImageStyle: {
        width: 130,
        height: 170,
        marginTop: 7,

    },
    InfoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    InfoTextStyle: {
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    TextCate: {
        backgroundColor: 'rgb(208, 208, 214)',
        borderRadius: 5,
        marginLeft: 1,
    },
    rightContain: {
        width: 200
    }
})

