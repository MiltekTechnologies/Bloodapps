import React, { useState ,useRef} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonAlert, IonToast } from '@ionic/react';
import { saveOutline } from 'ionicons/icons';
import GeolocationButton from './GeolocationButton'

const Formedit: React.FC = () => {

  const [error, setError] = useState<string>();
  const [showToast1, setShowToast1] = useState(false);
  const [number, setNumber] = useState<number>();

  const contactnoref=useRef<HTMLIonInputElement>(null);
  const nameref=useRef<HTMLIonInputElement>(null);
  const emailref=useRef<HTMLIonInputElement>(null);
  const Bloodref=useRef<HTMLIonInputElement>(null);
//   const emailref=useRef<HTMLIonInputElement>(null);
//   const emailref=useRef<HTMLIonInputElement>(null);


  const savedetails=()=>{
    const enteredname=nameref.current!.value;
    const enteredcontact=contactnoref.current!.value;
    const enteredemail=emailref.current!.value;
    const enteredblood=Bloodref.current!.value;

    if(!enteredname || ! enteredcontact ||!enteredemail || ! enteredblood){
        setError('Some Fields are missing');
        return}

        setShowToast1(true);

  }
const clearerror=()=>{
    setError("");
};

  return (
    
         
    <IonPage>
    <IonAlert
            isOpen={!!error}
            message={error}
            buttons={[{text:"Okay",handler: clearerror }]}
          />
          <IonToast
            isOpen={showToast1}
            onDidDismiss={() => setShowToast1(false)}
            message="Data Saved Sucessfully"
            duration={1000}
        />

<IonHeader>
        <IonToolbar>
          <IonTitle color="primary" className="ion-text-center">Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent className="ion-padding">
      <IonGrid className="">
          <IonRow>
              <IonCol>
              <IonItem>
              <IonLabel position="floating" >Full Name</IonLabel>
              <IonInput type ="text" ref={nameref}></IonInput>
            </IonItem>
              </IonCol>
          </IonRow>
     
          <IonRow>
              <IonCol>
              <IonItem>
              <IonLabel position="floating">Contact no;</IonLabel>
              <IonInput type ="number" ref={contactnoref}></IonInput>
            </IonItem>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
              <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type ="email" ref={emailref}></IonInput>
            </IonItem>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
              <IonItem>
              <IonLabel position="floating">Blood Group</IonLabel>
              <IonInput  ref={Bloodref}></IonInput>
            </IonItem>
              </IonCol>
          </IonRow>
          
          <IonRow className="location" >
              <IonCol ><GeolocationButton /></IonCol></IonRow>
          
          <IonRow>
          <IonCol className="ion-text-center"> 
            <IonButton expand="full" onClick={savedetails}>
              <IonIcon slot="start" icon={saveOutline}/>
              Submit
            </IonButton>
            </IonCol>
          </IonRow>

          
          </IonGrid>
      </IonContent>
    </IonPage>
    
  );
};
export default Formedit;