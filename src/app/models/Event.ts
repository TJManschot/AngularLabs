import {Contact} from './contact';

export interface Event {
  name: string;
  date: Date;
  invites: Contact[];
}
