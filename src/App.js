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
  const targetDate = new Date();
  const date = targetDate.toISOString();
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime displayFormat="DD MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
            />
        </IonItem>
        <BiorhythmCard targetDate={date} />
  
      </IonContent>
    </IonApp>
  );
}

export default App;
