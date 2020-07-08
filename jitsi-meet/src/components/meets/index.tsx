import React, { useState } from "react";
import Loader from "../loader";
import CreateRoom from "./create-room";
import JoinRoom from "./join-room";
import Jitsi from "react-jitsi";

import "../../assets/style/meet-screen.scss";

const Meets = () => {
  const [displayName, setDisplayName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");
  const [createRoom, setCreateRoom] = useState(false);
  const [joinRoom, setJoinRoom] = useState(false);
  const [onCall, setOnCall] = useState(false);

  React.useEffect(() => {
    setRoomName("");
    setPassword("");
  }, [createRoom, joinRoom]);

  const log = (api: any) => {
    alert(JSON.stringify(api));
  };

  if (onCall)
    return (
      <Jitsi
        roomName={roomName}
        displayName={displayName}
        password={password}
        loadingComponent={Loader}
        onAPILoad={log}
        containerStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "800px",
        }}
      />
    );

  return (
    <div className="container meet-screen mt-4">
      <div className="welcome-content">
        <div className="mb-2">Bài tập lớn</div>
        <h1 className="mb-5">CSE301</h1>
        <CreateRoom
          roomName={roomName}
          password={password}
          createRoom={createRoom}
          setRoomName={setRoomName}
          setPassword={setPassword}
          setCreateRoom={setCreateRoom}
          setJoinRoom={setJoinRoom}
          setOnCall={setOnCall}
        />
        <JoinRoom
          roomName={roomName}
          joinRoom={joinRoom}
          setRoomName={setRoomName}
          setJoinRoom={setJoinRoom}
          setCreateRoom={setCreateRoom}
          setOnCall={setOnCall}
        />
      </div>
    </div>
  );
};

export default Meets;
