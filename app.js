import React from 'react'

import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  StyleSheet,
  Button,
  CameraRoll,
  Image,
  Dimensions,
  ScrollView,
  RefreshControl
} from 'react-native'

import RNFetchBlob from 'react-native-fetch-blob'

let styles
const { width } = Dimensions.get('window')

class App extends React.Component {
  static navigationOptions = {
    title: 'React Native 101',
  }

  state = {
    modalVisible: false,
    photos: [],
    index: null
  }

  setIndex = (index) => {
    if (index === this.state.index) {
      index = null
    }
    this.setState({ index })
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }))
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  navigate = () => {
    const { navigate } = this.props.navigation;
    navigate('ImageBrowser')
  }

  render() {
    console.log('state :', this.state)
    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.text}>React Native 101: Camera Roll</Text>
        <Button
          title='View Photos'
          onPress={() => { this.toggleModal(); this.getPhotos() }}
        />
        <Button
          title='Browse Images'
          onPress={this.navigate}
        />
        </View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => console.log('closed')}
        >
          <View style={styles.modalContainer}>
            <Button
              title='Close'
              onPress={this.toggleModal}
            />
            <ScrollView
              contentContainerStyle={styles.scrollView}>
              {
                this.state.photos.map((p, i) => {
                  return (
                    <TouchableHighlight
                      style={{opacity: i === this.state.index ? 0.5 : 1}}
                      key={i}
                      underlayColor='transparent'
                      onPress={() => this.setIndex(i)}
                    >
                      <Image
                        style={{
                          width: width/3,
                          height: width/3
                        }}
                        source={{uri: p.node.image.uri}}
                      />
                    </TouchableHighlight>
                  )
                })
              }
            </ScrollView>
          </View>
        </Modal>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  shareButton: {
    position: 'absolute',
    width,
    padding: 10,
    bottom: 0,
    left: 0
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default App