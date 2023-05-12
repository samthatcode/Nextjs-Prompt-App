"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const [error, setError] = useState(null);

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
  
      if (response.ok) {
        router.push("/");
      } else {
        const errorData = await response.json();
        console.log("Error response:", errorData);
        setError(errorData.message);
      }
    } catch (error) {
      console.log("Request failed:", error);
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
      error={error}
    />
  );
};

export default CreatePrompt;
