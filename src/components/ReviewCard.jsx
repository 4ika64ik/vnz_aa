import { star } from "../assets/icons"

const ReviewCard = ({ customerName, imgURL, rating, feedback,   }) => {
    return (
      <div className="flex justify-center items-center flex-col">
        <img src={ imgURL }
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[10x`0px]"
         />
         <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
         <div className="mt-3 flex justify-center items-center gap-2.5">
         </div>
         <h3 className="mt-1 font-palanquin text-3xl text-center font-bold ">{customerName}</h3>
      </div>
    )
  }
  export default ReviewCard