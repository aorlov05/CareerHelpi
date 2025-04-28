/**
 * PageType represents what page the user is currently on
 */
import { Answer } from "./webpages/QuizPages/QuizQuestion";

export type PageType =
  | { page: "Home" }
  | { page: "Basic" }
  | { page: "Detailed" }
  | { page: "Results"; answers: Answer[] }; 