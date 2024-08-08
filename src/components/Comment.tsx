"use client";
import { ReplyProps } from "@/libs/types";

export default function Comment({
  ImagePath,
  username
  commentTitle,
  likes,
  replies,
}: ReplyProps) {
  return (
    <div>
      your code for Comment component here ...
      {/* You can use map-loop to render Reply component here */}
    </div>
  );
}
