import AsyncStorage from "@react-native-community/async-storage";
import Axios from "axios";
import React, { Component } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { connect } from "react-redux";
import { getListAuthor } from "../actions/author";
import { getListCategoriesByStoryId } from "../actions/category";
import { getChaptersByStoryId } from "../actions/story";
import * as Config from "../utils/Config";
import TabBarOfThongTinTruyen from "./../components/TabBarOfThongTinTruyen";
import { actFollowRequest, actDeleteStoryFollow } from "../actions/follow";

class ThongTinTruyenScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFollow: false,
            userData: [],
        };
    }

    componentDidMount = async () => {
        const story_id = this.props.route.params.story.id;
        this.props.getAuthor(story_id);
        this.props.getCategories(story_id);
        this.props.getChapters(story_id);

        try {
            const value = await AsyncStorage.getItem("userLogin");
            if (value !== null) {
                this.setState({ userData: JSON.parse(value) });
            } else {
                this.setState({ userData: [] });
            }
        } catch (error) {
            console.log(error);
        }

        if (this.state.userData.length !== 0) {
            Axios.get(
                `${Config.API_URL}/api/check-follow/user/${this.state.userData.id}/story/${story_id}`
            ).then((res) => {
                if (res.data > 0) this.setState({ isFollow: true });
            });
        }
    };

    followClick = async () => {
        var userData = this.state.userData;
        var { story } = this.props.route.params;
        var follows = story.follow;
        if (userData.length === 0) {
            Alert.alert("Bạn cần phải đăng nhập!");
            console.log("Bạn cần phải đăng nhập!");
        } else {
            var storyFollow = {
                story_id: story.id,
                user_id: userData.id,
            };
            if (this.state.isFollow) {
                follows -= 1;
                await Axios.put(
                    `${Config.API_URL}/api/story/` + storyFollow.story_id,
                    { follow: follows }
                )
                    .then((res) => {})
                    .catch((err) => {
                        console.log(err.res);
                    });
                this.props.unfollowStory(
                    storyFollow.user_id,
                    storyFollow.story_id
                );
                this.setState({ isFollow: false });
            } else {
                follows += 1;
                await Axios.put(
                    `${Config.API_URL}/api/story/` + storyFollow.story_id,
                    { follow: follows }
                )
                    .then((res) => {})
                    .catch((err) => {
                        console.log(err.res);
                    });
                this.props.followStory(storyFollow);
                this.props.addStory(story);
                this.setState({ isFollow: true });
            }
        }
    };

    render() {
        const lastIndex = this.props.chapters.length - 1;
        const chapter_id =
            lastIndex !== -1 ? this.props.chapters[lastIndex].id : 1;
        const { navigation } = this.props;
        const { story } = this.props.route.params;
        const listCates = this.props.categories.map((cate, index) => {
            return (
                <Text style={styles.TextCate} key={index}>
                    {cate.name}{" "}
                </Text>
            );
        });
        return (
            <ScrollView>
                {story !== 0 ? (
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.Texttitle}>
                                Tên: {story.name}
                            </Text>
                        </View>
                        <View style={styles.InfoStyle}>
                            <Image
                                style={styles.ImageStyle}
                                source={{ uri: story.path_image }}
                            />
                            <View>
                                <Text style={styles.InfoTextStyle}>
                                    Tác giả :
                                    <View style={styles.ViewTextCate}>
                                        <Text style={styles.TextCate}>
                                            {this.props.authors.name
                                                ? this.props.authors.name
                                                : "Khôi vjp123"}
                                        </Text>
                                    </View>
                                </Text>
                                <Text style={styles.InfoTextStyle}>
                                    Trạng thái :
                                    <View style={styles.ViewTextCate}>
                                        <Text style={styles.TextCate}>
                                            {story.status}
                                        </Text>
                                    </View>
                                </Text>
                                <Text style={styles.InfoTextStyle}>
                                    Thể loại :
                                    <View style={styles.ViewTextCate}>
                                        <Text style={styles.TextCate}>
                                            {listCates.length !== 0
                                                ? listCates
                                                : "hài sơ sơ"}
                                        </Text>
                                    </View>
                                </Text>
                                <Text style={styles.InfoTextStyle}>
                                    Lượt xem :
                                    <View style={styles.ViewTextCate}>
                                        <Text style={styles.TextCate}>
                                            {story.view}
                                        </Text>
                                    </View>
                                </Text>
                                <Text style={styles.InfoTextStyle}>
                                    Yêu thích :
                                    <View style={styles.ViewTextCate}>
                                        <Text style={styles.TextCate}>
                                            {story.follow}
                                        </Text>
                                    </View>
                                </Text>
                            </View>
                        </View>

                        <TabBarOfThongTinTruyen
                            chapters={this.props.chapters}
                            navigation={navigation}
                            story={story}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingTop: 5,
                                paddingBottom: 5,
                            }}
                        >
                            <TouchableOpacity onPress={this.followClick}>
                                <View
                                    style={
                                        this.state.isFollow
                                            ? styles.containerYeuThich
                                            : styles.containerChuaYeuThich
                                    }
                                >
                                    <Text
                                        style={
                                            this.state.isFollow
                                                ? styles.TextYeuThichStyle
                                                : styles.TextChuaYeuThichStyle
                                        }
                                    >
                                        Theo Dõi
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("Chapter", {
                                        chapter_id: chapter_id,
                                    })
                                }
                            >
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
        chapters: state.chapters,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAuthor: (story_id) => {
            dispatch(getListAuthor(story_id));
        },
        getCategories: (story_id) => {
            dispatch(getListCategoriesByStoryId(story_id));
        },
        getChapters: (story_id) => {
            dispatch(getChaptersByStoryId(story_id));
        },
        followStory: (story) => {
            dispatch(actFollowRequest(story));
        },
        unfollowStory: (user_id, story_id) => {
            dispatch(actDeleteStoryFollow(user_id, story_id));
        },
        addStory: (story) => {
            dispatch({ type: "FOLLOW", story });
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThongTinTruyenScreen);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    containerDocTruyen: {
        alignItems: "center",
        backgroundColor: "black",
        height: 30,
    },
    containerYeuThich: {
        alignItems: "center",
        backgroundColor: "rgb(151, 15, 15)",
        height: 30,
    },
    containerChuaYeuThich: {
        alignItems: "center",
        backgroundColor: "white",
        height: 30,
    },
    Texttitle: {
        marginTop: 5,
        textTransform: "uppercase",
    },
    TextDocTruyenStyle: {
        marginTop: 5,
        textTransform: "uppercase",
        color: "white",
        marginLeft: 50,
        marginRight: 50,
    },
    TextYeuThichStyle: {
        marginTop: 5,
        textTransform: "uppercase",
        color: "white",
        alignItems: "center",
        marginLeft: 55,
        marginRight: 60,
    },
    TextChuaYeuThichStyle: {
        marginTop: 5,
        textTransform: "uppercase",
        color: "black",
        alignItems: "center",
        marginLeft: 55,
        marginRight: 60,
    },
    ImageStyle: {
        width: 130,
        height: 170,
        marginTop: 7,
    },
    InfoStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    InfoTextStyle: {
        marginVertical: 10,
        marginLeft: 10,
        
    },
    ViewTextCate: {
        height: 15,
    },
    TextCate: {
        borderRadius: 5,
        paddingHorizontal: 5,
        marginHorizontal: 5,
        backgroundColor: "rgb(208, 208, 214)",

    },
});
