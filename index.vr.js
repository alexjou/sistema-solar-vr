import React from 'react';
import {
  AppRegistry,
  asset,
  Model,
  Pano,
  PointLight,
  View,
} from 'react-vr';
import Descriptions from './components/DescriptionBox';

export default class solarSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      rotation: 0,
      antiRotation: 360,
      angleOne: 30,
      angleTwo: 50,
      angleThree: 70,
      angleFour: 90,
      angleFive: 110,
      angleSix: 130,
      angleSeven: 150,
      angleEigth: 190,
    }
  }

  componentDidMount() {
    this.rotate();
  }

  rotate() {
    this.setState({
      rotation: this.state.rotation + 1,
      antiRotation: this.state.antiRotation - 1,
      angleOne: this.state.angleOne + 0.0050,
      angleTwo: this.state.angleTwo + 0.0039,
      angleThree: this.state.angleThree + 0.0035,
      angleFour: this.state.angleFour + 0.0029,
      angleFive: this.state.angleFive + 0.0025,
      angleSix: this.state.angleSix + 0.0020,
      angleSeven: this.state.angleSeven + 0.0018,
      angleEigth: this.state.angleEigth + 0.0017,
    });

    if (this.state.rotation > 360) {
      this.setState({ rotation: 1 })
    };

    if (this.state.antiRotation < 1) {
      this.setState({ antiRotation: 360 })
    };

    if (this.state.angleOne > 360) {
      this.setState({ angleOne: 1 })
    };

    if (this.state.angleTwo > 360) {
      this.setState({ angleTwo: 1 })
    };

    if (this.state.angleThree > 360) {
      this.setState({ angleThree: 1 })
    };

    if (this.state.angleFour > 360) {
      this.setState({ angleFour: 1 })
    };

    if (this.state.angleFive > 360) {
      this.setState({ angleFive: 1 })
    };

    if (this.state.angleSix > 360) {
      this.setState({ angleSix: 1 })
    };

    if (this.state.angleSeven > 360) {
      this.setState({ angleSeven: 1 })
    };

    if (this.state.angleEight > 360) {
      this.setState({ angleEight: 1 })
    };

    requestAnimationFrame(this.rotate.bind(this));
  };

  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')} />

        <PointLight intensity={1} style={{ color: 'white', transform: [{ translate: [0, 0, 0] }] }} />

        {/* SUN */}
        <Model
          source={{ obj: asset('sphere.obj') }}
          texture={asset('sun.jpg')}
          style={{
            transform: [
              { translate: [-40, 0, 0] },
              { scale: [5, 5, 5] },
              { rotateY: this.state.rotation }
            ]
          }}
        />

        {/* Mercúrio */}
        <Model
          source={{ obj: asset('sphere.obj') }}
          texture={asset('mercury.jpg')}
          lit
          style={{
            transform: [
              { translate: [70 * Math.cos(this.state.angleOne), 0, 60 * Math.sin(this.state.angleOne)] },
              { scale: [0.8, 0.8, 0.8] },
              { rotateY: this.state.rotation }
            ]
          }}
        />

        {/* Vênus */}
        <Model
          source={{ obj: asset('sphere.obj') }}
          texture={asset('venus.jpg')}
          lit
          style={{
            transform: [
              { translate: [90 * Math.cos(this.state.angleTwo), 0, 70 * Math.sin(this.state.angleTwo)] },
              { scale: [1.1, 1.1, 1.1] },
              { rotateZ: this.state.antiRotation }
            ]
          }}
        />

        {/* Terra */}
        <Model
          source={{ obj: asset('sphere.obj') }}
          texture={asset('earth.png')}
          lit
          style={{
            transform: [
              { translate: [110 * Math.cos(this.state.angleThree), 0, 90 * Math.sin(this.state.angleThree)] },
              { scale: [1.4, 1.4, 1.4] },
              { rotateY: this.state.rotation }
            ]
          }}
        />

        {/* Marte */}
        <Model
          source={{ obj: asset('sphere.obj') }}
          texture={asset('mars.jpg')}
          lit
          style={{
            transform: [
              { translate: [130 * Math.cos(this.state.angleFour), 0, 110 * Math.sin(this.state.angleFour)] },
              { scale: [0.9, 0.9, 0.9] },
              { rotateY: this.state.rotation }
            ]
          }}
        />

        {/* Jupiter */}
        <Model
          source={{ obj: asset('sphere.obj') }}
          texture={asset('jupiter.jpg')}
          lit
          style={{
            transform: [
              { translate: [150 * Math.cos(this.state.angleFive), 0, 130 * Math.sin(this.state.angleFive)] },
              { scale: [4.5, 4.5, 4.5] },
              { rotateY: this.state.rotation }
            ]
          }}
        />

        {/* Marte */}
        <Model
          source={{ obj: asset('Saturn.obj') }}
          texture={asset('saturn.jpg')}
          lit
          style={{
            transform: [
              { translate: [170 * Math.cos(this.state.angleSix), 0, 150 * Math.sin(this.state.angleSix)] },
              { scale: [3.5, 3.5, 3.5] },
              { rotateX: -20 },
              { rotateY: this.state.rotation }
            ]
          }}
        />

        {/* Urânio */}
        <Model
          source={{ obj: asset('sphere.obj') }}
          texture={asset('uranus.jpg')}
          lit
          style={{
            transform: [
              { translate: [190 * Math.cos(this.state.angleSeven), 0, 170 * Math.sin(this.state.angleSeven)] },
              { scale: [2.5, 2.5, 2.5] },
              { rotateZ: this.state.antiRotation }
            ]
          }}
        />

        {/* Netuno */}
        <Model
          source={{ obj: asset('sphere.obj') }}
          texture={asset('neptune.jpg')}
          lit
          style={{
            transform: [
              { translate: [210 * Math.cos(this.state.angleEigth), 0, 190 * Math.sin(this.state.angleEigth)] },
              { scale: [2, 2, 2] },
              { rotateY: this.state.rotation }
            ]
          }}
        />
        
        <Descriptions/>

      </View>
    );
  }
};

AppRegistry.registerComponent('solarSystem', () => solarSystem);
