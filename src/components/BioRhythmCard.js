import dayjs from 'dayjs';
import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from '@ionic/react';
import { calculateBiorhythms } from '../calculations';

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM YYYY')
};

function BiorhythmCard({ birthDate, targetDate }) {
  const { physical, emotional, intellectual } = calculateBiorhythms(birthDate, targetDate);
    return (
        <div>
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Physcial: {physical.toFixed(4)}</p>
            <p>Emotional: {emotional.toFixed(4)}</p>
            <p>Intellectual: {intellectual.toFixed(4)}</p>
          </IonCardContent>
        </IonCard>
        </div>
    );
}

export default BiorhythmCard;