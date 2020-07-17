import React from "react";
import Input from "../input";

interface UIProps {
  roomName: string;
  password: string;
  createRoom: boolean;
  setRoomName: (roomName: string) => void;
  setPassword: (password: string) => void;
  setCreateRoom: (createRoom: boolean) => void;
  setJoinRoom: (joinRoom: boolean) => void;
  setOnCall: (onCall: boolean) => void;
}

const CreateRoom = React.memo((props: UIProps) => {
  const { roomName, password, createRoom } = props;
  const {
    setRoomName,
    setPassword,
    setCreateRoom,
    setJoinRoom,
    setOnCall,
  } = props;

  if (createRoom)
    return (
      <div className="d-flex flex-column" style={{width: "250px"}}>
        <Input
          className="first-input"
          value={roomName}
          onChange={setRoomName}
          placeholder="Tên phòng"
        />
        <Input
          className="last-input"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Mật khẩu"
        />
        <button onClick={() => setOnCall(true)}>Tạo cuộc họp</button>
      </div>
    );

  return (
    <div
      className="d-flex align-items-center mb-2"
      onClick={() => {
        setJoinRoom(false);
        setCreateRoom(true);
      }}
    >
      <div className="box-circle active shadow-sm">
        <i className="fa fa-video"></i>
      </div>
      Tạo cuộc họp
    </div>
  );
});

export default CreateRoom;
