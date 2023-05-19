import React from "react";
import { FcLike, FcDislike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let { description, id, image, title } = props.course;
  let liked = props.Liked;
  let setLiked = props.setLiked;

  function clickHandler() {
    if (liked.includes(id)) {
      // yeh kya diktal hai..
      setLiked((prev) => prev.filter((p) => p !== id));
      // setLiked((prev) => prev.filter((cid) => cid !== id));
      toast.warning("like removed");
    } else {
      /// phlele se nahi

      if (liked.length === 0) {
        setLiked([id]);
      } else {
        /// kuch hai phele se
        setLiked((prev) => [...prev, id]);
      }

      toast.success("liked the course");
    }
    // console.log(liked);
  }
  return (
    <div className="bg-bgDark bg-opacity-50 w-[300px] rounded-md overflow-hidden">
      <div className="relative">
        <img src={image.url} />

        <div className=" w-[40px] flex h-[40px] items-center justify-center absolute bottom-3 right-2 bg-white rounded-full">
          <button onClick={clickHandler}>
            {liked.includes(id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcDislike fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="text-white p-4">
        <h4 className="font-semibold text-lg  leading-5">{title}</h4>
        <p className="mt-2">
          {description.length > 200
            ? description.substring(0, 200) + "..."
            : description}
        </p>
      </div>
    </div>
  );
};

export default Card;
