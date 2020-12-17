import React, { useEffect, useState } from "react";
import axios from "axios";

const LandingPage = () => {
  const [hello, setHello] = useState('');
  useEffect(() => {
    axios.get("/api").then((res) => {
      setHello(res.data);
    });
  }, []);
  return <div>{hello}</div>;
};

export default LandingPage;
