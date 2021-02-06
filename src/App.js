import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BioRhythmCard';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const date = new Date();
  const targetDate = date.toISOString();
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {birthDate && 
        <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        }
        <IonItem>
          <IonLabel position="fixed" >Date of Birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
            />
        </IonItem>
       
        <IonItem>
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
            />
        </IonItem>
        
      
  
      </IonContent>
    </IonApp>
  );
}

export default App;
