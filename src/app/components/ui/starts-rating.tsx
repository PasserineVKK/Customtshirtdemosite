import { Star } from "lucide-react"


export const StartsFiller = ({rating, startSize} : {rating:number, startSize: number})=>{
    return (<div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`${'w-'+startSize+' h-'+startSize}   ${(i<rating) ? 'fill-orange-400 text-orange-400' : 'fill-white-400 text-orange-400'}`} />
                  ))}
                </div>)
} 
