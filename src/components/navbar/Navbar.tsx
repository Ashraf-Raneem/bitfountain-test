import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/AuthAction";

const Navbar: React.FC = (props: any) => {
  return (
    <div className="navbar">
      <div className="brand">
        <p>Bitfountain</p>
      </div>
      <div className="nav">
        <p
          className="logout-text"
          onClick={() => props.logout(window.location)}
        >
          Logout
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
