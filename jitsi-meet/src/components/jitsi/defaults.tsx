import React from "react";
import * as Type from "./types";

export const Props: Type.Props = {
  domain: "meet.jit.si",
  roomName: (Math.random() + 0.48151642).toString(36).substring(2),
};

export const ContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: window.innerHeight,
};

export const FrameStyle = (loading: boolean): React.CSSProperties => ({
  display: loading ? "none" : "block",
  width: "100%",
  height: "100%",
});
