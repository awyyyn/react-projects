import { cardProps} from "../types" 
import {
    Dialog,
    DialogContent, 
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
 

const Card = ({info}: cardProps) => {
    return (
        <>
            <Dialog modal> 
                <DialogTrigger className="space-y-2 max-w-min mx-auto cursor-pointer hover:shadow-md pb-2 rounded-xl transition-shadow    ">
                    <img src={info.photo} className="max-w-[350px] min-w-[350px] rounded-[24px] max-h-[267px] min-h-[267px] object-center object-cover " />
                    <div className="flex items-center justify-between px-2">
                        <div className="flex gap-x-4">
                            {info.superHost && 
                                <SuperHost />
                            }
                            <p className="text-stone-600">{info.type}</p>
                        </div>
                        <Rating rate={info.rating} />
                    </div>
                    <h4 className="px-2 text-left">{info.title}</h4>
                </DialogTrigger> 
                <DialogContent className="bg-white">
                    <DialogHeader>
                        <DialogTitle>{info.title}</DialogTitle>
                        <img src={info.photo} className="max-h-[400px] object-cover" />
                        <div className="flex justify-between"> 
                            <div className="space-x-5">
                                {info.superHost && 
                                    <SuperHost />
                                }
                                <span>{info.type}</span>
                            </div>  
                            <h3 className="text-right">{info.city}, {info.country}</h3>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-x-4">
                                <p>Beds: {info.beds ? Math.ceil(info.maxGuests / info.beds) : 1}</p>
                                <p>Max Guests: {info.maxGuests}</p>
                            </div>
                            <Rating rate={info.rating} />
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}


const SuperHost = () =>  (
    <span className="p-1 px-2 uppercase text-xs text-stone-700 border-black border rounded-xl">
        Super host
    </span> 
) 

const Rating = ({rate}: {rate: number}) => ( 
    <div className="flex ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-bnb">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        <span>
            {rate}
        </span>
    </div>
)

export default Card
