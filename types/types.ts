import { firestore } from "firebase-admin";
export type FirestoreTimestampType = firestore.FieldValue;
// Default firestore alphanumeric string
export type FirestoreDocumentIdType = string;

export type UrlType = string;
export type URIType = string;

export type DocumentVersionType = number;

export type UTCEpochDateType = string;

// SSML/TTS compatiable voice code strings
export type VoiceCodeType = string;

export type LanguageCodeType = string;

export type DurationType = number;
// Must us kebab casing
export type RouteIdentifierType = string;

export type WordListType = Record<string, string>;

export type LanguageType = LanguageCodeType[];
