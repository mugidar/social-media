import React from "react";
import "./RightBar.scss";

const suggestionUsers = [
  {
    name: "Vitalik",
    lastname: "Baraban",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Andrey",
    lastname: "Unitaz",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const latestActivitiesUsers = [
  {
    name: "Vitalik",
    lastname: "Baraban",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    activity: "pochesal glaz",
    activityTime: 1
  },
  {
    name: "Andrey",
    lastname: "Unitaz",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    activity: "udalil vas iz druzei",
    activityTime: 5
  }
];

const onlineFriends = [
  {
    name: "Vitalik",
    lastname: "Baraban",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Anna",
    lastname: "Jordan",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Andrey",
    lastname: "Unitaz",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Dima",
    lastname: "Kazmiruk",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Vitalik",
    lastname: "Baraban",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Anna",
    lastname: "Jordan",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Andrey",
    lastname: "Unitaz",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Dima",
    lastname: "Kazmiruk",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Vitalik",
    lastname: "Baraban",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Anna",
    lastname: "Jordan",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Andrey",
    lastname: "Unitaz",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Dima",
    lastname: "Kazmiruk",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Anna",
    lastname: "Jordan",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Andrey",
    lastname: "Unitaz",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Dima",
    lastname: "Kazmiruk",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Anna",
    lastname: "Jordan",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Andrey",
    lastname: "Unitaz",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Dima",
    lastname: "Kazmiruk",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Anna",
    lastname: "Jordan",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Andrey",
    lastname: "Unitaz",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Dima",
    lastname: "Kazmiruk",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Anna",
    lastname: "Jordan",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Andrey",
    lastname: "Unitaz",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Dima",
    lastname: "Kazmiruk",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="group_item suggestions">
          <span className="group_item-title">Suggestions For You</span>
          <div className="items">
            {suggestionUsers.map((user, index) => (
              <div key={index} className="user">
                <div className="user_info">
                  <img src={user.img} alt={user.name} />
                  <span>
                    {user.name} {user.lastname}
                  </span>
                </div>
                <div className="buttons">
                  <button className="suggestions_btn follow">Follow</button>
                  <button className="suggestions_btn dismiss">Dismiss</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="group_item latest_activities">
          <span className="group_item-title">Latest Activities</span>
          <div className="items">
            {latestActivitiesUsers.map((user, index) => (
              <div key={index} className="user">
                <div className="user_info">
                  <img src={user.img} alt={user.name} />
                  <p>
                    {user.name} {user.lastname}{" "}
                    <span className="user_activity">{user.activity}</span>
                  </p>
                </div>
                <div>
                  <span className="user_activity time">
                    {user.activityTime} min ago
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="group_item online_friends">
          <span className="group_item-title">Friends Onlnie</span>
          <div className="items">
            {onlineFriends.map((user, index) => (
              <div key={index} className="user">
                <div className="user_info">
                  <span className="user_img">
                    <img src={user.img} alt={user.name} />
                  </span>

                  <span>
                    {user.name} {user.lastname}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
