import * as actions from "../../actions/Cat";

type Actions = actions.HandleLike;

export interface CatStateType {
  hairType: string;
  id: string;
  like: number;
  nameEn: string;
  nameJa: string;
  originCountry: string;
}

export interface InitialStateType {
  datas: CatStateType[];
}

const initialState = {
  datas: [
    {
      hairType: "短毛種 ・ 長毛種",
      id: "scottish",
      like: 0,
      nameEn: "Scottish Fold",
      nameJa: "スコティッシュフォールド",
      originCountry: "スコットランド(イギリス)"
    },
    {
      hairType: "短毛種 ・ 長毛種",
      id: "munchkin",
      like: 0,
      nameEn: "Munchkin",
      nameJa: "マンチカン",
      originCountry: "イングランド(イギリス)"
    },
    {
      hairType: "長毛種",
      id: "ragdoll",
      like: 0,
      nameEn: "Ragdoll",
      nameJa: "ラグドール",
      originCountry: "アメリカ"
    }
  ]
};

export default function main(state = initialState, action: Actions) {
  switch (action.type) {
    case "CAT/HANDLE_LIKE":
      return {
        ...state,
        datas: state.datas.map(cat => {
          if (cat.id === action.id) {
            return {
              ...cat,
              like: cat.like + 1
            };
          }
          return cat;
        })
      };
    default:
      return state;
  }
}
