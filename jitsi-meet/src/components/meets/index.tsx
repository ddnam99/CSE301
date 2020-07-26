import React, { useState, useEffect } from "react";
import { AuthState } from "../../redux/reducers/Auth.reducers";
import { RootState } from "../../redux/store";

import CreateRoom from "./create-room";
import JoinRoom from "./join-room";
import Jitsi from "../Jitsi";

import { useDispatch, useSelector } from "react-redux";
import { actLogout } from "../../redux/actions/Auth.actions";

import "../../assets/style/meet-screen.scss";

const Meets = () => {
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");
  const [createRoom, setCreateRoom] = useState(false);
  const [joinRoom, setJoinRoom] = useState(false);
  const [onCall, setOnCall] = useState(false);

  React.useEffect(() => {
    setRoomName("");
    setPassword("");
  }, [createRoom, joinRoom]);

  const logAPI = (api: any) => {
    console.log(api);
  };

  const dispatch = useDispatch();
  const onLogout = () => dispatch(actLogout());

  const { user } = useSelector<RootState, AuthState>(
    (state) => state.authReducer
  );

  if (onCall)
    return (
      <Jitsi
        roomName={roomName}
        displayName={user?.fullName}
        password={password}
        onAPILoad={logAPI}
        // @ts-ignore
        interfaceConfig={{
          SHOW_JITSI_WATERMARK: false,
          SHOW_BRAND_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
          SHOW_POWERED_BY: false,
        }}
        config={{
          // @ts-ignore
          prejoinPageEnabled: false,
        }}
      />
    );

  return (
    <div className="container meet-screen mt-4">
      <div className="welcome-content">
        <div className="mb-2">Xin chào</div>
        <h1 className="mb-5">{user?.fullName}</h1>
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
      <button onClick={onLogout} type="button">
        Log out
      </button>
    </div>
  );
};

export default Meets;
