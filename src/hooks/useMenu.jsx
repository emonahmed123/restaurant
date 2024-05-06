import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [isLoing,setisLoding]=useState(true)
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setisLoding(false)
            })
    }, [])

    return [menu,isLoing]
}

export default useMenu