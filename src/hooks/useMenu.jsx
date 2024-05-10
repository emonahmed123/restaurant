import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [isLoing,setisLoding]=useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setisLoding(false)
            })
    }, [])

    return [menu,isLoing]
}

export default useMenu