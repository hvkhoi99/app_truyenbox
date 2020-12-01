import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getStoriesByCategoryId4 } from '../../actions/story';
import StoryItemChiTiet from '../../components/StoryItemChiTiet';

class Cate_Romance extends Component {

    componentDidMount() {
        this.props.getStoriesByCategoryId(8);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View >
                {/* {this.props.storiesByCateId.length !== 0 ? ( */}
                    <FlatList
                        numColumns={1}
                        data={this.props.storiesByCateId}
                        renderItem={({ item }) => <StoryItemChiTiet name={item.name} onPressXayDung={() => navigation.navigate('Thông Tin Truyện', { story: item })} story={item} keyExtractor={item => `${item.id}`}
                        />}
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
        storiesByCateId: state.storiesByCateId4
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesByCategoryId: (cate_id) => {
            dispatch(getStoriesByCategoryId4(cate_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cate_Romance)