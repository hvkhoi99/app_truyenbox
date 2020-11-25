import React, { Component } from 'react';
import {
    Animated,
    Dimensions, ScrollView, StyleSheet, Text,
    TouchableOpacity, View
} from "react-native";
const { width } = Dimensions.get("window");

class TabBarOfThongTinTruyen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // chapter_id: "",
            active: 0,
            xTabOne: 0,
            xTabTwo: 0,
            translateX: new Animated.Value(0),
            translateXTabOne: new Animated.Value(0),
            translateXTabTwo: new Animated.Value(width),
            translateY: -1000
        }
    }

    // state = {
    //     active: 0,
    //     xTabOne: 0,
    //     xTabTwo: 0,
    //     translateX: new Animated.Value(0),
    //     translateXTabOne: new Animated.Value(0),
    //     translateXTabTwo: new Animated.Value(width),
    //     translateY: -1000
    // };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: true,
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100,
                    useNativeDriver: true,
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100,
                    useNativeDriver: true,

                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                }).start()
            ]);
        }
    };
    render() {
        //onPressChapter={() => navigation.navigate('Chapter')}
        // onPress={() => navigation.navigate('Chapter', {id: 1, nameCT: 'abc'})}
        // console.log(this.props)
        const { onPressChapter, navigation } = this.props;
        // console.log(onPressChapter);
        // console.log(navigation);
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;

        const listChapters = this.props.chapters.map((chapter, index) => {
            return (<TouchableOpacity onPress={() => navigation.navigate("Chapter", { chapter_id: chapter.id })} key={index}>
                <View style={styles.columnCDV}>
                    <Text style={styles.cssChapter_1}>{chapter.name}</Text>
                    <Text style={styles.cssChapter_2}>10/03/1999</Text>
                    <Text style={styles.cssChapter_3}>{chapter.view}</Text>
                </View>
            </TouchableOpacity>);
        })
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 10,
                            marginBottom: 20,
                            height: 36,
                            position: "relative"
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#007aff",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "#007aff"
                                }}
                            >
                                Danh sách chương
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "#007aff"
                                }}
                            >
                                Giới thiệu
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View
                            style={{
                                transform: [
                                    { translateX: translateXTabOne }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                            <View style={styles.DSChuongContainer}>
                                <View style={styles.TitleChaptersContainer}>
                                    <Text style={styles.Title}>Chương</Text>
                                    <Text style={styles.Title}>Ngày đăng</Text>
                                    <Text style={styles.Title}>Views</Text>
                                </View>
                                {listChapters}
                            </View>

                        </Animated.View>

                        <Animated.View
                            style={{
                                transform: [
                                    { translateX: translateXTabTwo },
                                    { translateY: -translateY }
                                ]
                            }}
                        >
                            <Text>{this.props.story.description}</Text>
                        </Animated.View>
                    </ScrollView>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({

    DSChuongContainer: {
        display: 'flex'
    },
    TitleChaptersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 5,
        borderStyle: "solid",
        borderBottomWidth: 1
    },
    Title: {
        fontWeight: 500
    },
    columnCDV: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        borderStyle: "dotted",
        borderTopWidth: 1,
    },
    cssChapter_2: {
        marginLeft: -40,
        color: 'rgb(126, 124, 124)'
    },
    cssChapter_1: {
        color: 'rgb(126, 124, 124)'
    },
    cssChapter_3: {
        color: 'rgb(126, 124, 124)'

    }

})

export default TabBarOfThongTinTruyen;