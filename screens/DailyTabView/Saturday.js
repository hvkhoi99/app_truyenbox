import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getStoriesDailySat } from '../../actions/story';
import StoryItemChiTiet1 from '../../components/StoryItemChiTiet1';
class Saturday extends Component {
    componentDidMount() {
        this.props.getStoriesDaily(6);
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
                    renderItem={({ item }) => <StoryItemChiTiet1 name={item.name_story} story={item}
                        onPressXayDung={() => navigation.navigate('.Thông Tin Truyện', { story: item })} />}
                        keyExtractor={item => `${item.id}`}
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
        storiesDaily: state.dailySat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesDaily: (day) => {
            dispatch(getStoriesDailySat(day))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Saturday)
