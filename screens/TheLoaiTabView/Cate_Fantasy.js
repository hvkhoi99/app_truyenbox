import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getStoriesByCategoryId1 } from '../../actions/story';
import StoryItemChiTiet from '../../components/StoryItemChiTiet';

class Cate_Fantasy extends Component {

    componentDidMount() {
        // const { nameCate } = this.props;
        // switch (nameCate) {
        //     case "Fantasy": {
        //         this.props.getStoriesByCategoryId(1);
        //         break;
        //     }
        //     case "Comedy": {
        //         this.props.getStoriesByCategoryId(2);
        //         break;
        //     }
        //     case "Manga": {
        //         this.props.getStoriesByCategoryId(5);
        //         break;
        //     }
        //     case "Romance": {
        //         this.props.getStoriesByCategoryId(8);
        //         break;
        //     }
        //     case "Action": {
        //         this.props.getStoriesByCategoryId(9);
        //         break;
        //     }
        //     case "Magic": {
        //         this.props.getStoriesByCategoryId(10);
        //         break;
        //     }
        //     case "Kungfu": {
        //         this.props.getStoriesByCategoryId(11);
        //         break;
        //     }
        //     case "Manhwa": {
        //         this.props.getStoriesByCategoryId(12);
        //         break;
        //     }
        //     case "Manhua": {
        //         this.props.getStoriesByCategoryId(14);
        //         break;
        //     }
        //     default: {
        //         this.props.getStoriesByCategoryId(14);
        //     }
        // }
        this.props.getStoriesByCategoryId(1);
    }

    render() {
        // console.log(this.props.storiesByCateId)
        const { navigation } = this.props;
        return (
            <View >
                {this.props.storiesByCateId.length !== 0 ? (
                    <FlatList
                        numColumns={1}
                        data={this.props.storiesByCateId}
                        renderItem={({ item }) => <StoryItemChiTiet name={item.name} onPressXayDung={() => navigation.navigate('Thông Tin Truyện', { story: item })} story={item} 
                        />}
                        keyExtractor={item => `${item.id}`}
                    />
                ) : (
                        <ActivityIndicator />
                    )}
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    // const { nameCate } = this.props;
    // switch (nameCate) {
    //     case "Fantasy": {
    //         return {
    //             storiesByCateId: state.storiesByCateId1
    //         }
    //         break;
    //     }
    //     case "Comedy": {
    //         return {
    //             storiesByCateId: state.storiesByCateId2
    //         }
    //         break;
    //     }
    //     case "Manga": {
    //         return {
    //             storiesByCateId: state.storiesByCateId3
    //         }
    //         break;
    //     }
    //     case "Romance": {
    //         return {
    //             storiesByCateId: state.storiesByCateId4
    //         }
    //         break;
    //     }
    //     case "Action": {
    //         return {
    //             storiesByCateId: state.storiesByCateId5
    //         }
    //         break;
    //     }
    //     case "Magic": {
    //         return {
    //             storiesByCateId: state.storiesByCateId6
    //         }
    //         break;
    //     }
    //     case "Kungfu": {
    //         return {
    //             storiesByCateId: state.storiesByCateId7
    //         }
    //         break;
    //     }
    //     case "Manhwa": {
    //         return {
    //             storiesByCateId: state.storiesByCateId8
    //         }
    //         break;
    //     }
    //     case "Manhua": {
    //         return {
    //             storiesByCateId: state.storiesByCateId9
    //         }
    //         break;
    //     }
    //     default: {
    //         return {
    //             storiesByCateId: state.storiesByCateId9
    //         }
    //     }
    // }
    return {
        storiesByCateId: state.storiesByCateId1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesByCategoryId: (cate_id) => {
            dispatch(getStoriesByCategoryId1(cate_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cate_Fantasy)