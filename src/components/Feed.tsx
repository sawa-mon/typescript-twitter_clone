import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from "./Feed.module.css";
import { Post } from "./Post";
import { TweetInput } from "./TweetIput";

export const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: "",
      avatar: "",
      image: "",
      text: "",
      timestamp: null,
      username: "",
    },
  ]);

  useEffect(() => {
    const unSub = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            key: doc,
            id: doc.id,
            avatar: doc.data().avatar,
            image: doc.data().image,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            username: doc.data().username,
          }))
        )
      );
    // return () => {
    //   unSub();
    //   console.log(unSub);
    // };
  }, []);

  return (
    <div className={styles.feed}>
      <TweetInput />
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          avatar={post.avatar}
          image={post.image}
          text={post.text}
          timestamp={post.timestamp}
          username={post.username}
        />
      ))}
    </div>
  );
};
