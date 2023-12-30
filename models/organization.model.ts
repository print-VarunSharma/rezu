import { firestore } from "firebase-admin";
import {
  DocumentVersionType,
  UrlType,
  FirestoreTimestampType,
  FirestoreDocumentIdType,
} from "../types/types";

export interface OrganizationInterface {
  id: FirestoreDocumentIdType;
  name: string;
  siteUrl: UrlType;
  users: FirestoreDocumentIdType[]; // Firebase uid (includes the adminUser uid)
  ownerUser: FirestoreDocumentIdType; // Firebase uid
  createdDate: FirestoreTimestampType;
  modifiedDate: FirestoreTimestampType;
  version: DocumentVersionType;
}

export const DEFAULT_ORGANIZATION_VALUES: any = {
  creationDate: firestore.FieldValue.serverTimestamp(),
  modifiedDate: firestore.FieldValue.serverTimestamp(),
  version: 1,
};
