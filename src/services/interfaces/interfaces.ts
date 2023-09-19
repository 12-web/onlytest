interface IYear {
  id: any;
  year: number;
  description: String;
}
export interface IPeriod {
  name: string;
  start: number;
  end: number;
  dates: IYear[];
}
