import { useEffect, useState } from "react";

interface CommentData {
  googleReviews: any[];
  // facebookComments: any[];
  // instagramComments: any[];
}

const Comments: React.FC = () => {
  const [data, setData] = useState<CommentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comments");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, []);
  console.log(data);

  return <div>lala</div>;
};

export default Comments;
