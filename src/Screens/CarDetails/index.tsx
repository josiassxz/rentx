import React from 'react';
import { BackButton } from '../../Components/BackButton';
import { ImageSlider } from '../../Components/ImageSlider';

import { 
  Container,
  Header,
  CarImages,
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
    </Container>

    );
}