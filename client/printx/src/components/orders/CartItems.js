import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import TruncatedContent from "./TruncatedContent";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(data.id));
    toast.success("Item Removed");
  };

  return (
   
  );
};

export default CartItem;
