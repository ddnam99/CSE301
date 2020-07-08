import React from "react";
import Input from "../input";

interface UIProps {
  roomName: string;
  joinRoom: boolean;
  setRoomName: (roomName: string) => void;
  setJoinRoom: (joinRoom: boolean) => void;
  setCreateRoom: (createRoom: boolean) => void;
  setOnCall: (onCall: boolean) => void;
}

const JoinRoom = React.memo((props: UIProps) => {
  const { roomName, joinRoom } = props;
  const { setRoomName, setJoinRoom, setCreateRoom, setOnCall } = props;

  if (joinRoom)
    return (
      <>
        <div className="d-flex flex-column w-25">
          <Input
            className="normal-input"
            value={roomName}
            onChange={setRoomName}
            placeholder="Tên phòng"
          />
          <button onClick={() => setOnCall(true)}>Tham gia</button>
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
