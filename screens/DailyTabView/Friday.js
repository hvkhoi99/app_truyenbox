import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getStoriesDailyFri } from '../../actions/story';
import StoryItemChiTiet1 from '../../components/StoryItemChiTiet1';
class Friday extends Component {
    componentDidMount() {
        this.props.getStoriesDaily(5);
    }

    render() {
        const { navigation } = this.props;
        console.log(this.props.storiesDaily)
        return (
            <View >
                {/* {this.props.storiesDaily.length !== 0 ? ( */}
                <FlatList
                    numColumns={1}
                    data={this.props.storiesDaily}
                    renderItem={({ item }) => <StoryItemChiTiet1 name={item.name_story} story={item} keyExtractor={item => `${item.id}`}
                        onPressXayDung={() => navigation.navigate('Thông Tin Truyện 1', { story: item })} />}
                />
                {/* ) : (
                        <ActivityIndicator />
                    )} */}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storiesDaily: state.dailyFri
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesDaily: (day) => {
            dispatch(getStoriesDailyFri(day))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friday)
