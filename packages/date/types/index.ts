export type DateSelectTarget = EventTarget & {
  value: Date;
};

export type MonthSelectionTarget = EventTarget & {
  value: {
    month: number;
    year: number;
  };
};
