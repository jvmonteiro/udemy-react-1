import React from "react";
import faker from "faker";
import "./styles.css";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

export const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          avatar={faker.image.avatar()}
          timeAgo="Today at 6:00 PM"
          content="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          avatar={faker.image.avatar()}
          timeAgo="Today at 4:45PM"
          content="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="August"
          avatar={faker.image.avatar()}
          timeAgo="Today at 1:00 AM"
          content="Nice blog post!"
        />
      </ApprovalCard>
    </div>
  );
};
