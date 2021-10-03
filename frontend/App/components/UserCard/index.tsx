type UserCardProps = {
  name: string,
  country: string,
  picture: string
}

function UserCard({ name, country, picture }: UserCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex flex-col items-center justify-center w-full rounded-lg">
        <div className="mb-5">
          <img className="object-cover object-center rounded-full h-36 w-36" src={picture} />
        </div>
      </div>
      <div className="text-center">
        <p className="font-bold">{name}</p>
        <p>{country}</p>
      </div> 
    </div>
  );
}
export default UserCard;
