import { createContext } from "react";
import { IPeriod } from "../services/interfaces/interfaces";
export const PeriodsContext = createContext<IPeriod[]>([]);
