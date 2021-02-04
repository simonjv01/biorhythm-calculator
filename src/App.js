import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  
  const [birthDate, setBirthDate] = useState('');
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
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>31 Jan 2021</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Physcial: 83%</p>
            <p>Emotional: 52%</p>
            <p>Intellectual: 34%</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;
