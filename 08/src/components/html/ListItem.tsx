import React from "react";

const ListItem = ({ name, age }: { name: string; age: number }) => {
  return (
    <div>
      {name} - {age}
    </div>
  );
};

export default ListItem;
