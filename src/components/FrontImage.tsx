import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent, IonButton, IonRow, IonCol, IonIcon, IonTab, IonTabs, IonRouterOutlet } from '@ionic/react';
import Tab1 from '../pages/Tab1';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import './Frontimage.css'


// type Item = {
//   src: string;
//   text: string;
// };
// const items: Item[] = [{ src: './images/t1.jpg', text: 'a picture of a cat' }];

 const Frontimage: React.FC = () => {

 


  return(
   <React.Fragment>
   
            <IonImg className="image-background"
            src= "assets/image.png"
            alt="sample"
            
           />
           
            <IonRow>
          <IonCol className="ion-text-center"> 
            <IonButton routerLink="/register" >
              Be A Part of this initiation
            </IonButton>
            </IonCol>
          </IonRow>
  </React.Fragment>
 )};
  
export default Frontimage;