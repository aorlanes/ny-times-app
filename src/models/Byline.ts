import { Person } from "./Person";

export type Byline = {
  original: string | null;
  person: Person;
  organization: string | null;
};
