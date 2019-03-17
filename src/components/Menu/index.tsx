import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import * as Actions from "../../actions/Common";
import { RootStateType } from "../../reducers";

const Menu = (props: any) => {
  React.useEffect(() => {
    const intervalDate = setInterval(props.actions.setDate, 1000);
    return () => clearInterval(intervalDate);
  });

  return (
    <>
      <h3>
        {props.common.date.getFullYear()}年{props.common.date.getMonth() + 1}月
        {props.common.date.getDate()}日{props.common.date.getHours()}時
        {props.common.date.getMinutes()}分{props.common.date.getSeconds()}秒
      </h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
      </ul>
      <hr />
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
)(Menu);
