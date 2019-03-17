import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Actions from "../../../actions/Cat";
import { RootStateType } from "../../../reducers";
import Menu from "../../Menu";

const Cat = (props: any) => {
  const [cat, setCat] = React.useState();

  React.useEffect(() => {
    setCat(
      props.cat.datas.find(
        ({ id }: { id: string }) => id === props.match.params.id
      )
    );
  });

  if (!cat) {
    return (
      <>
        <Menu />
        <p>'{...props.match.params.id}' は見つかりませんでした。</p>
      </>
    );
  }

  return (
    <>
      <Menu />
      <table>
        <tbody>
          <tr>
            <th>名前</th>
            <td>{cat.nameJa}</td>
          </tr>
          <tr>
            <th>英語表記</th>
            <td>{cat.nameEn}</td>
          </tr>
          <tr>
            <th>原産国</th>
            <td>{cat.originCountry}</td>
          </tr>
          <tr>
            <th>毛種</th>
            <td>{cat.hairType}</td>
          </tr>
          <tr>
            <th>いいね！</th>
            <td>{cat.like}</td>
          </tr>
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
)(Cat);
