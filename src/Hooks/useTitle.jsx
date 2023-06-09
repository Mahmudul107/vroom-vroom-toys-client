import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title}- Vroom Vroom Toys`;
    }, [title]);
}


export default useTitle;