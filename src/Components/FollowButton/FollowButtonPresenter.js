import Button from "../Button";
import React from "react";
import styled from "styled-components";

export default ({ isFollowing }) => (
  <Button text={isFollowing ? "Unfollow" : "Follow"} />
);
