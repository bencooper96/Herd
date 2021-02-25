import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/Post";

dbConnect();

export default async (req, res) => {
  const {
    query: { id, updatedField },
    method,
    // key,
  } = req;

  switch (updatedField) {
    case "votes":
      try {
        const post = await Post.updateOne(
          { _id: id },
          { $push: { votes: req.body } }
        );
        res.status(200).json({ success: true, data: post });
        return;
      } catch (error) {
        res.status(400).json({ success: false });
        return;
      }
      break;
    case "comments":
      try {
        const post = await Post.updateOne(
          { _id: id },
          { $push: { comments: req.body } }
        );
        res.status(200).json({ success: true, data: post });
        return;
      } catch (error) {
        res.status(400).json({ success: false });
        return;
      }
      break;
  }

  res.status(400).json({ success: false, error: "invalid method" });
  return;
};
