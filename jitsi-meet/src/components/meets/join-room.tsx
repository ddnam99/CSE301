import React from "react";

import Interceptors from "../../helpers/Interceptors";

interface UIProps {
  roomName: string;
  joinRoom: boolean;
  setRoomName: (roomName: string) => void;
  setJoinRoom: (joinRoom: boolean) => void;
  setCreateRoom: (createRoom: boolean) => void;
  setOnCall: (onCall: boolean) => void;
}

const JoinRoom = React.memo((props: UIProps) => {
  const [selectedRoom, setSelectedRoom] = React.useState("");

  const { roomName, joinRoom } = props;
  const { setRoomName, setJoinRoom, setCreateRoom, setOnCall } = props;

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
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
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
