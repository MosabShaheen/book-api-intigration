import BookDetail from "@/views/bookDetail"
import { OrderIdPass } from "@/views/submitOrder"
export default async function getBookDetail(props:any){
    return(
        <div>
            {/* @ts-expect-error Server Component */}
            <BookDetail {...props}/>
            {/* @ts-expect-error Server Component */}
            <OrderIdPass {...props} />
        </div>
    )
}