import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const { childInfo, information,onClick } = this.props;

    return (
      <div className="dropdown dropdown-bottom dropdown-end dropdown-hover flex  items-center ">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 w-32 h-full rounded-xl font-text text-royalblue"
        >
          <a className="text-green-700">User:</a>
          {information}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu shadow rounded-box mr-1  w-48 font-text bg-ivory text-royalblue "
        >
          <li>
            <a onClick={onClick}>{childInfo}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
