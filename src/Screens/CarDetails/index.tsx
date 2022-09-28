import React from 'react';

import { BackButton } from '../../Components/BackButton';
import { ImageSlider } from '../../Components/ImageSlider';
import { Acessory } from '../../Components/Acessory';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

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
  Acessories
 } from './styles';

export function CarDetails(){
  return (
     <Container>
        <Header>
            <BackButton onPress={() => {}}/>
        </Header>
       <CarImages>
        <ImageSlider
            imagesUrl={['data:image/jpeg;base64,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']}
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

          <Acessories>
            <Acessory name='380Km/h' icon={SpeedSvg}/>
            <Acessory name='3.2s' icon={AccelerationSvg}/>
            <Acessory name='800 HP' icon={ForceSvg}/>
            <Acessory name='Gasolina' icon={GasolineSvg}/>
            <Acessory name='Auto' icon={ExchangeSvg}/>
            <Acessory name='2 pessoas' icon={PeopleSvg}/>
          </Acessories>

          <About>Este é automóvel desportivo. Surgiu do lendário touro de lide indultado
             na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta 
             de acelerar.</About>

         </Content>

    </Container>

    );
}