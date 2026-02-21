export function UserModal() {


    const user = "Carlos Samuel"

  return (
    <div className="p-5 " >
        <div className="flex items-center gap-3">
             <div className="p-5 w-5 h-5 bg-blue-500 rounded-full"></div>
        <div>{user}</div>
        </div>
        <div className="flex flex-col gap-3 mt-5 ml-13">
              <a href="@">Profile</a>
                <a href="@">Favorites</a>
        <a href="@">History</a>
        </div>
       
    </div>

  );
}
