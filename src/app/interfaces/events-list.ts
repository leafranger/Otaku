export interface EventsList {
  kind:             string;
  etag:             string;
  summary:          Summary;
  updated:          Date;
  timeZone:         TimeZone;
  accessRole:       string;
  defaultReminders: DefaultReminder[];
  nextSyncToken:    string;
  items:            Item[];
}

export interface DefaultReminder {
  method:  string;
  minutes: number;
}

export interface Item {
  kind:                Kind;
  etag:                string;
  id:                  string;
  status:              Status;
  htmlLink:            string;
  created:             Date;
  updated:             Date;
  summary:             string;
  location?:           string;
  creator:             Creator;
  organizer:           Creator;
  start:               End;
  end:                 End;
  iCalUID:             string;
  sequence:            number;
  reminders:           Reminders;
  eventType:           EventType;
  description?:        string;
  transparency?:       Transparency;
  extendedProperties?: ExtendedProperties;
  attendees?:          Attendee[];
  hangoutLink?:        string;
  conferenceData?:     ConferenceData;
  colorId?:            string;
  recurrence?:         string[];
  visibility?:         string;
  source?:             Source;
}

export interface Attendee {
  email:          string;
  responseStatus: ResponseStatus;
  self?:          boolean;
  organizer?:     boolean;
}

export enum ResponseStatus {
  Accepted = "accepted",
  NeedsAction = "needsAction",
}

export interface ConferenceData {
  entryPoints:        EntryPoint[];
  conferenceSolution: ConferenceSolution;
  conferenceId:       string;
}

export interface ConferenceSolution {
  key:     Key;
  name:    string;
  iconUri: string;
}

export interface Key {
  type: string;
}

export interface EntryPoint {
  entryPointType: string;
  uri:            string;
  label:          string;
  regionCode?:    string;
  pin?:           string;
}

export interface Creator {
  email:        Summary;
  displayName?: DisplayName;
  self?:        boolean;
}

export enum DisplayName {
  MirkoCistero = "Mirko Cistero",
}

export enum Summary {
  Elsword4316GmailCOM = "elsword4316@gmail.com",
  MZoriacoRighitarantoEduIt = "m.zoriaco@righitaranto.edu.it",
}

export interface End {
  dateTime?: Date;
  timeZone?: TimeZone;
  date?:     Date;
}

export enum TimeZone {
  EuropeRome = "Europe/Rome",
  UTC = "UTC",
}

export enum EventType {
  Default = "default",
}

export interface ExtendedProperties {
  private: Private;
}

export interface Private {
  everyoneDeclinedDismissed: string;
}

export enum Kind {
  CalendarEvent = "calendar#event",
}

export interface Reminders {
  useDefault: boolean;
}

export interface Source {
  url:   string;
  title: string;
}

export enum Status {
  Confirmed = "confirmed",
}

export enum Transparency {
  Transparent = "transparent",
}
