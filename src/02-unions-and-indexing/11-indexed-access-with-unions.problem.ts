import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type ProgramModeEnumMapType = typeof programModeEnumMap;

export type IndividualProgram =
  | ProgramModeEnumMapType["ONE_ON_ONE"]
  | ProgramModeEnumMapType["SELF_DIRECTED"]
  | ProgramModeEnumMapType["PLANNED_ONE_ON_ONE"]
  | ProgramModeEnumMapType["PLANNED_SELF_DIRECTED"];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >
];
