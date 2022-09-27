import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';
import { RFValue }  from 'react-native-responsive-fontsize';

import { 
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
 } from './styles';

 import { Car } from '../../Components/Car';

export function Home(){

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupe',
    rent: {
        period: 'Ao Dia',
        price: 120,
    },
    thumbnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
  }

  // const carDataTwo = {
  //   brand: 'Porshe',
  //   name: 'Panamera',
  //   rent: {
  //       period: 'Ao Dia',
  //       price: 340,
  //   },
  //   thumbnail: 'https://www.pngplay.com/wp-content/uploads/13/Porsche-Panamera-Transparent-Background.png'
  // }

  return (
     <Container>
        <StatusBar
          barStyle='light-content'
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <HeaderContent>
            <Logo
              width={RFValue(108)}
              height={RFValue(12)}
            />
            <TotalCars>
              Total de 12 carros
            </TotalCars>
          </HeaderContent>
        </Header>
        
        <CarList
          data={[1,2,3,4,5,6,7,8,9,10]}
          keyExtractor={item => String(item)}
          renderItem={({ item }) =>  <Car data={carData}  />}
        />
    </Container>
);
}