import React from "react";
import PropTypes from "prop-types";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import { useMutation } from "react-apollo-hooks";

const FollowButtonContainer = ({ isFollowing, id }) => {
  const [followMutation] = useMutation(FOLLOW, { variables: id });
  const [unfollowMutation] = useMutation(UNFOLLOW, { variables: id });

  return <FollowButtonContainer isFollowing={isFollowing} />;
};

export default FollowButtonContainer;