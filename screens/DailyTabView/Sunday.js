import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getStoriesDailySun } from '../../actions/story';
import StoryItemChiTiet1 from '../../components/StoryItemChiTiet1';
class Sunday extends Component {
    componentDidMount() {
        this.props.getStoriesDaily(0);
    }

    render() {
        const { navigation } = this.props;
        // console.log(this.props.storiesDaily)
        return (
            <View >
                {/* {this.props.storiesDaily.length !== 0 ? ( */}
                <FlatList
                    numColumns={1}
                    data={this.props.storiesDaily}
                    renderItem={({ item }) => <StoryItemChiTiet1 name={item.name_story} story={item} keyExtractor={item => `${item.id}`}
                        onPressXayDung={() => navigation.navigate('.Thông Tin Truyện', { story: item })} />}
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
        storiesDaily: state.dailySun
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesDaily: (day) => {
            dispatch(getStoriesDailySun(day))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sunday)
