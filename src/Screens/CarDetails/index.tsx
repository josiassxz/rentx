import React from 'react';
import { BackButton } from '../../Components/BackButton';
import { ImageSlider } from '../../Components/ImageSlider';

import { 
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Periodo,
  Price,
  About,
 } from './styles';

export function CarDetails(){
  return (
     <Container>
        <Header>
            <BackButton onPress={() => {}}/>
        </Header>
       <CarImages>
        <ImageSlider
            imagesUrl={['https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png']}
            />
         </CarImages> 

         <Content>
          <Details>
            <Description>
              <Brand>Lamborghini</Brand>
              <Name>Huracan</Name>
            </Description>
            <Rent>
              <Periodo>Ao dia</Periodo>
              <Price>R$ 580</Price>
            </Rent>
          </Details>
          <About>Este é automóvel desportivo. Surgiu do lendário touro de lide indultado
             na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta 
             de acelerar.</About>

         </Content>

    </Container>

    );
}