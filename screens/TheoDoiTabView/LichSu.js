import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import StoryActionHistory from '../../components/StoryActionHistory';
class LichSu extends Component {


    componentDidMount = async () => {
        var listStory;
        try {
            const value = await AsyncStorage.getItem('listStory');
            if (value !== null) {
                listStory = JSON.parse(value);
            } else {
                listStory = [];
            }
        }
        catch (error) {
            console.log(error)
        }
        this.props.getHistory(listStory);

    }


    render() {
        const { navigation } = this.props;
        // const { StoryArray } = this.state;
        return (
            <View >
                <FlatList
                    numColumns={1}
                    data={this.props.history}
                    renderItem={({ item }) => <StoryActionHistory name={item.name} story={item} keyExtractor={item => `${item.id}`}
                        onPressXayDung={() => navigation.navigate('Thông Tin Truyện')} />}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHistory: (stories) => {
            dispatch({ type: 'GET_HISTORY', stories })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LichSu)