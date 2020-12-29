
// import React, { Component } from 'react';
// import Slideshow from 'react-native-slideshow';


// export default class SlideshowTest extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             position: 1,
//             interval: null,
//             dataSource: null
//         };
//         const dataItem = this.props.storiesHot.map((item, index) => {
//             return (
//                 {
//                     title: item.name,
//                     caption: `${index}`,
//                     url: item.path_image
//                 }
//             )
//         })
//         this.setState({ dataSource: dataItem })
//     }

//     componentWillMount() {

//         this.setState({
//             interval: setInterval(() => {
//                 this.setState({
//                     position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
//                 });
//             }, 2000)
//         });
//     }

//     componentWillUnmount() {
//         clearInterval(this.state.interval);
//     }

//     render() {

//         console.log(this.state.dataSource)
//         return (
//             <Slideshow
//                 dataSource={this.state.dataSource}
//                 position={this.state.position}
//                 onPositionChanged={position => this.setState({ position })} />
//         );
//     }
// }
