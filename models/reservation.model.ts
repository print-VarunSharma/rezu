import { firestore } from "firebase-admin";

import {
  FirestoreDocumentIdType,
  FirestoreTimestampType,
} from "../types/types";

export interface ReservationMetadata {
  [key: string]: string;
}

export interface ReservationInterface {
  id: FirestoreDocumentIdType;
  organizationId: FirestoreDocumentIdType;
  callId: string;
  name: string;
  email: string;
  phoneNumber: number;
  date: FirestoreTimestampType;
  guests: number;
  specialRequests: string;
  metadata: ReservationMetadata;
  creationDate: FirestoreTimestampType;
  modifiedDate: FirestoreTimestampType;
  version: number;
}

export const DEFAULT_RESERVATION_VALUES: any = {
  creationDate: firestore.FieldValue.serverTimestamp(),
  modifiedDate: firestore.FieldValue.serverTimestamp(),
  version: 1,
};
