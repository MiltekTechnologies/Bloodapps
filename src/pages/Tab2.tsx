import React from 'react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import GeolocationButton from "../components/GeolocationButton";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

 const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Name:</IonCardSubtitle>
            <IonCardSubtitle>Contact:</IonCardSubtitle>
            <IonCardSubtitle>Email:</IonCardSubtitle>
            <IonCardSubtitle>Blood Group:</IonCardSubtitle>
            <IonCardSubtitle>Address:</IonCardSubtitle>
           
          </IonCardHeader>

          <IonCardContent>
            
      </IonCardContent>
        </IonCard>

        <IonCard>
          
          <IonCardContent  className="cardindetails">
          <IonIcon icon={walk} slot="start" />
            Till Now This much legends 2
      </IonCardContent>
        </IonCard>

        
      </IonContent>
    </IonPage>
  );
};
export default Tab2;