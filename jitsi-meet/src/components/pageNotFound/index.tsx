import React from "react";
import { Redirect } from "react-router-dom";
import { Result, Button } from "antd";

const PageNotFound = () => {
  const [backHome, setBackHome] = React.useState(false);

  if (backHome) return <Redirect to="/" />;

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => {
            setBackHome(true);
          }}
        >
          Back Home
        </Button>
      }
    />
  );
};

export default PageNotFound;
