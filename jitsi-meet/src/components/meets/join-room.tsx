import React from "react";

import Interceptors from "../../helpers/Interceptors";

interface UIProps {
  joinRoom: boolean;
  setRoomName: (roomName: string) => void;
  setJoinRoom: (joinRoom: boolean) => void;
  setCreateRoom: (createRoom: boolean) => void;
  setOnCall: (onCall: boolean) => void;
}

const JoinRoom = React.memo((props: UIProps) => {
  const [selectedRoom, setSelectedRoom] = React.useState("");
  const [rooms, setRooms] = React.useState([]);

  const { joinRoom } = props;
  const { setRoomName, setJoinRoom, setCreateRoom, setOnCall } = props;

  const fetchRooms = async () => {
    try {
      const res = await Interceptors.get("/api/rooms");

      if (res.status === 200) setRooms(res.data.rooms);
    } catch (error) {
      console.log(error);
    }
  };

  const handleJoinRoom = () => {
    if (selectedRoom) {
      setRoomName(selectedRoom);
      setOnCall(true);
    }
  };

  if (joinRoom)
    return (
      <>
        <div className="d-flex flex-column" style={{ width: "250px" }}>
          <select onChange={(e) => setSelectedRoom(e.target.value)}>
            <option value="" disabled selected>
              Chọn phòng
            </option>
<<<<<<< HEAD
            {rooms.map((room: any) => (
              <option value={room._id}>{room.name}</option>
            ))}
=======
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
>>>>>>> 65575f607aa0ebfc80ec18e03f15b3e95674e47c
          </select>
          <button onClick={handleJoinRoom}>Tham gia</button>
        </div>
      </>
    );

  return (
    <div
      className="d-flex align-items-center mb-2"
      onClick={() => {
        setCreateRoom(false);
        setJoinRoom(true);
        fetchRooms();
      }}
    >
      <div className="box-circle shadow-sm">
        <i className="fa fa-user-plus"></i>
      </div>
      Tham gia
    </div>
  );
});

export default JoinRoom;
