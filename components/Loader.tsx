import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Image,
  ActivityIndicator
} from 'react-native';
import { useAppSelector } from '../redux/hooks';
import { selectTheme } from '../redux/slices/themeSlice';

interface MyProps{
    isLoading:boolean
}
interface MyState{
    isLoading:boolean
}

class Loader extends Component<MyProps,MyState> {
  constructor(props:MyProps) {
    super(props);
    this.state = {
      isLoading:this.props.isLoading
    }
  }

  static getDerivedStateFromProps(nextProps:any) {
    return {
      isLoading: nextProps.isLoading
    };
  }

  render() {
    
    return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={this.state.isLoading}
        style={{ zIndex: 1100 }}
        onRequestClose={() => { }}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator animating={this.state.isLoading} color="rgb(29 78 216)" />
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader