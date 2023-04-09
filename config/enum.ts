export enum BTN_ENUM {
  PRIMARY = "PRIMARY",
  PRIMARY_EMPTY = "PRIMARY_EMPTY",
}

export const BTN_META = {
  [BTN_ENUM.PRIMARY]: {
    className: "bg-color",
  },
  [BTN_ENUM.PRIMARY_EMPTY]: {
    className: "Primary-empty",
  },
};
