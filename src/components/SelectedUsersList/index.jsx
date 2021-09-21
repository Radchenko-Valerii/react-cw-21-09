import { Component } from "react";

class AlohaListSelected extends Component {
  render() {
    const { users } = this.props;
    return (
      <ul>
        {users.map((user) =>
          user.isSelected ? <li>{user.name} {user.surName}  id:{user.id}</li> : null
        )}
      </ul>
    );
  }
}

export default AlohaListSelected;
