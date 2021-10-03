import React from 'react';
import UserCard from "../../components/UserCard"

function List({ users }: any) {

  return (
    <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
      { users.map((user: any, index: number) => (
        <UserCard 
          name={user.name}
          country={user.country}
          picture={user.picture}
          key={index}
        />
      ))}
    </div>
  );
}
export default List;
