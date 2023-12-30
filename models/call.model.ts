import { firestore } from "firebase-admin";

import {
  FirestoreDocumentIdType,
  FirestoreTimestampType,
} from "../types/types";

export interface CallMetadataInterface {
  name: string;
  email: string;
  [key: string]: string;
}

export enum providerEnum {
  blandAi = "blandAi",
  // TBA e.g: Twilio
}

export interface CallInfoInterface {
  id: FirestoreDocumentIdType;
  orgId: FirestoreDocumentIdType;
  callId: string;
  metadata: CallMetadataInterface;
  provider: providerEnum;
  creationDate: FirestoreTimestampType;
  modifiedDate: FirestoreTimestampType;
  version: number;
}

export const DEFAULT_CALL_VALUES: any = {
  creationDate: firestore.FieldValue.serverTimestamp(),
  modifiedDate: firestore.FieldValue.serverTimestamp(),
  version: 1,
};
