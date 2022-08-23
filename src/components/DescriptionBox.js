import React from 'react';
import { asset, Text, View, VrButton, Model, StyleSheet } from 'react-vr';

export default class Descriptions extends React.Component {
  constructor() {
    super();
    this.state = {
      rotation: 0,
      selectedPlanetName: "Terra",
      selectedPlanetDescription: "A Terra é o planeta em que vivemos e é o terceiro planeta a partir do Sol. A Terra é o único planeta do nosso sistema solar que possui uma grande quantidade de água líquida. Por causa disso, as pessoas às vezes chamam de planeta azul.",
      modelName: "sphere.obj",
      textureName: "earth.png",
      selectedPlanetScale: [0.9, 0.9, 0.9],
      rotateSaturn: 0
    }
  }

  componentDidMount() {
    this.rotate();
  }

  rotate() {

    this.setState({
      rotation: this.state.rotation + 0.3,
    })

    if (this.state.rotation > 360) {
      this.setState({ rotation: 1 });
    }

    requestAnimationFrame(this.rotate.bind(this));
  }

  changePlanet(selection) {
    let planetName;
    let planetDescription;
    let planetTextureName;
    let planetModelName;
    let planetScale;

    switch (selection) {
      case 1:
        planetName = "Mercúrio";
        planetDescription = "Mercúrio é o menor planeta do Sistema Solar. Ele faz uma viagem ao redor do Sol uma vez a cada 87.969 dias, que é o mais curto de todos os planetas do Sistema Solar. Embora Mercúrio seja o planeta mais próximo do Sol, não é o mais quente.";
        planetTextureName = "mercury.jpg",
          planetModelName = "sphere.obj",
          planetScale = [0.4, 0.4, 0.4];
        break;
      case 2:
        planetName = "Vênus";
        planetDescription = "Vênus é o segundo planeta a partir do Sol. A duração do ano de Vênus é de 225 dias terrestres. Ele tem o período de rotação mais longo de qualquer planeta do Sistema Solar e gira na direção oposta à maioria dos outros planetas. Não possui satélites naturais. A pressão na superfície de Vênus é 92 vezes maior que a da Terra.";
        planetModelName = "sphere.obj",
          planetTextureName = "venus.jpg",
          planetScale = [0.7, 0.7, 0.7];
        break;

      case 3:
        planetName = "Terra";
        planetDescription = "A Terra é o planeta em que vivemos e é o terceiro planeta a partir do Sol. A Terra é o único planeta do nosso sistema solar que possui uma grande quantidade de água líquida. Por causa disso, as pessoas às vezes chamam de planeta azul.",
          planetTextureName = "earth.png",
          planetModelName = "sphere.obj",
          planetScale = [0.9, 0.9, 0.9];
        break;
      case 4:
        planetName = "Marte";
        planetDescription = "Marte é o segundo menor planeta do Sistema Solar depois de Mercúrio. Possui o maior vulcão do Sistema Solar. As temperaturas em Marte são mais frias do que na Terra, porque está mais longe do Sol e tem menos ar para manter o calor.";
        planetTextureName = "mars.jpg",
          planetModelName = "sphere.obj",
          planetScale = [0.6, 0.6, 0.6];
        break;
      case 5:
        planetName = "Júpiter";
        planetDescription = "Júpiter é o quinto planeta a partir do Sol e é o maior do Sistema Solar. É um planeta gigante com uma massa de um milésimo da massa do Sol, mas duas vezes e meia a de todos os outros planetas do Sistema Solar combinados. Júpiter pode ser visto mesmo sem o uso de telescópio.";
        planetTextureName = "jupiter.jpg",
          planetModelName = "sphere.obj",
          planetScale = [1.2, 1.2, 1.2];
        break;
      case 6:
        planetName = "Saturno";
        planetDescription = "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar, depois de Júpiter. Há também um sistema muito grande de anéis ao redor de Saturno. Esses anéis são feitos de gelo com quantidades menores de rochas e poeira. Saturno leva 29,6 anos terrestres para dar uma volta em torno do Sol.";
        planetTextureName = "saturn.jpg",
          planetModelName = "Saturn.obj",
          planetScale = [1.3, 1.3, 1.3];
        this.setState({ rotateSaturn: 30 });
        break;
      case 7:
        planetName = "Urano";
        planetDescription = "Urano é o sétimo planeta a partir do Sol. A temperatura em Urano é -197 graus C. Urano completa sua órbita ao redor do Sol em 84 anos terrestres. Ele completa uma volta em torno de si mesmo em 17 horas e 14 minutos. O planeta está tão inclinado em seu eixo que está de lado.";
        planetTextureName = "uranus.jpg"
        planetModelName = "sphere.obj",
          planetScale = [1.1, 1.1, 1.1];
        break;
      case 8:
        planetName = "Netuno";
        planetDescription = "Netuno é o oitavo e mais distante planeta conhecido do Sol no Sistema Solar. No Sistema Solar, é o quarto maior planeta em diâmetro. Ele também contém pequenas quantidades de metano que fazem o planeta parecer azul.";
        planetTextureName = "neptune.jpg",
          planetModelName = "sphere.obj",
          planetScale = [1, 1, 1];
        break;
    }

    this.setState({ selectedPlanetName: planetName });
    this.setState({ selectedPlanetDescription: planetDescription });
    this.setState({ textureName: planetTextureName });
    this.setState({ modelName: planetModelName });
    this.setState({ selectedPlanetScale: planetScale });
  }
  render() {

    const styles = StyleSheet.create({

      buttonText: {
        margin: 0,
        fontSize: 0.3,
        textAlign: 'center',
        backgroundColor: '#CF3C7E',
      }
    })
    return (
      <View style={{
        transform: [
          { translate: [0, -3, 0] },
          { rotateX: -90 }
        ],
        flexDirection: 'row'
      }}>

        <View>

          <Model
            source={{
              obj: asset(this.state.modelName)
            }}
            texture={asset(this.state.textureName)}
            style={{
              transform: [
                { translate: [-4, -2, -5] },
                { scale: this.state.selectedPlanetScale },
                { rotateX: this.state.rotateSaturn },
                { rotateY: this.state.rotation }
              ]
            }}
          />

        </View>


        <View>


          <Text style={{
            fontSize: 0.3,
            textAlign: 'center'
          }}>{this.state.selectedPlanetName}</Text>

          <Text style={{
            margin: 0.1,
            fontSize: 0.2,
            width: 2
          }}> {this.state.selectedPlanetDescription} </Text>
        </View>


        <View style={{
          flexDirection: 'column',
          height: 4,
          justifyContent: 'space-between'
        }}>


          <VrButton onClick={() => this.changePlanet(1)}>
            <Text style={styles.buttonText}>Mercúrio</Text>
          </VrButton>

          <VrButton onClick={() => this.changePlanet(2)}>
            <Text style={styles.buttonText}>Vênus</Text>
          </VrButton>

          <VrButton onClick={() => this.changePlanet(3)}>
            <Text style={styles.buttonText}>Terra</Text>
          </VrButton>

          <VrButton onClick={() => this.changePlanet(4)}>
            <Text style={styles.buttonText}>Marte</Text>
          </VrButton>

          <VrButton onClick={() => this.changePlanet(5)}>
            <Text style={styles.buttonText}>Júpiter</Text>
          </VrButton>

          <VrButton onClick={() => this.changePlanet(6)}>
            <Text style={styles.buttonText}>Saturno</Text>
          </VrButton>

          <VrButton onClick={() => this.changePlanet(7)}>
            <Text style={styles.buttonText}>Urano</Text>
          </VrButton>

          <VrButton onClick={() => this.changePlanet(8)}>
            <Text style={styles.buttonText}>Netuno</Text>
          </VrButton>
        </View>

      </View>
    )
  }
} 