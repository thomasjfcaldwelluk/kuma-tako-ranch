export type GuideActivity =
  | "hiking"
  | "lakes"
  | "fishing"
  | "winter"
  | "food"
  | "local";

export type Difficulty =
  | "Hard"
  | "Moderate–Hard"
  | "Moderate"
  | "Easy–Moderate"
  | "Easy";

export type GuideItem = {
  slug: string;

  name: string;

  activity: GuideActivity;

  subcategory?: string;

  location: string;

  description: string;

  distanceFromRanch?: string;

  difficulty?: Difficulty;

  dogsAllowed?: boolean;

  kidFriendly?: boolean;

  tags?: string[];

  website?: string;

  image?: string;

  status?: {
    type:
      | "open"
      | "closed"
      | "seasonal"
      | "limited";

    message?: string;
  };
};