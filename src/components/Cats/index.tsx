import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Actions from "../../actions/Cat";
import { RootStateType } from "../../reducers";
import { CatStateType } from "../../reducers/Cat";
import Menu from "../Menu";

const Cats = (props: any) => {
  React.useEffect(() => {
    const intervalDate = setInterval(props.actions.setDate, 1000);
    return () => clearInterval(intervalDate);
  });

  return (
    <>
      <Menu />
      <h2>Cats</h2>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>いいね！</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {props.cat.datas.map((cat: CatStateType, i: number) => (
            <tr key={i}>
              <td onClick={() => props.history.push(`/cats/${cat.id}`)}>
                {cat.nameJa}
              </td>
              <td>{cat.like}</td>
              <td>
                <button onClick={() => props.actions.handleLike(cat.id)}>
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state: RootStateType) => state;
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cats);
