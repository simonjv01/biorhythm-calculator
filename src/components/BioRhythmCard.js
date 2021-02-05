import dayjs from 'dayjs';
import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from '@ionic/react';

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM YYYY')
};

function BiorhythmCard({ date }) {
    return (
        <div>
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatDate(date)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Physcial: 83%</p>
            <p>Emotional: 52%</p>
            <p>Intellectual: 34%</p>
          </IonCardContent>
        </IonCard>
        </div>
    );
}

export default BiorhythmCard;