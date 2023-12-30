import { firestore } from "firebase-admin";
import {
  DocumentVersionType,
  UrlType,
  FirestoreTimestampType,
  FirestoreDocumentIdType,
} from "../types/types";

// V1
export interface LocationInterface {
  id: FirestoreDocumentIdType;
  organizationId: FirestoreDocumentIdType;
  name: string;
  phoneNumber: Number;
  address: string;
  siteUrl: UrlType;
  logoUrl: UrlType;
  about: string;
  hoursOfOperation: string;
  reservationPolicy: string;
  priceRange: string;
  dressCode: string;
  specialAccomodations: string;
  locationInformation: string;
  parkingInformation: string;
  menuDetails: string;
  privateEventBookingInfo: string;
  waitTimes: string;
  specialEvents: string;
  promotions: string;
  takeoutInfo: string;
  deliveryInfo: string;
  createdDate: FirestoreTimestampType;
  modifiedDate: FirestoreTimestampType;
  version: DocumentVersionType;
}

// V2

export interface Metadata {
  [key: string]: string; // Allows any number of additional properties
}

export interface LocationInterface {
  id: FirestoreDocumentIdType;
  organizationId: FirestoreDocumentIdType;
  name: string;
  phoneNumber: Number;
  address: string;
  siteUrl: UrlType;
  logoUrl: UrlType;
  about: string;
  hoursOfOperation: string;
  metadata: Metadata;
  createdDate: FirestoreTimestampType;
  modifiedDate: FirestoreTimestampType;
  version: DocumentVersionType;
}

// V3

export interface Metadata2 {
  siteUrl: UrlType;
  logoUrl: UrlType;
  about: string;
  hoursOfOperation: string;
  [key: string]: string; // Allows any number of additional properties
}

export interface LocationInterface {
  id: FirestoreDocumentIdType;
  organizationId: FirestoreDocumentIdType;
  name: string;
  phoneNumber: Number;
  address: string;
  metadata2: Metadata2;
  createdDate: FirestoreTimestampType;
  modifiedDate: FirestoreTimestampType;
  version: DocumentVersionType;
}
export const DEFAULT_ORGANIZATION_VALUES: any = {
  creationDate: firestore.FieldValue.serverTimestamp(),
  modifiedDate: firestore.FieldValue.serverTimestamp(),
  version: 1,
};
