import { Link } from "react-router-dom"
import MenuItem from "../../sharit/Menuitem/MenuItem"
import Cover from "../../sharit/cover/Cover"


const MenuCategory = ({item,title,Img ,bal}) => {
  console.log(bal)
  console.log(title)
    return (
    <div className="pt-10">
   { title &&   <Cover bal={bal} img={Img}  title={title}></Cover>} 
    <div className="grid md:grid-cols-2 gap-10 my-10">
        {
          item?.map(item => <MenuItem
                key={item._id}
                item={item}
            ></MenuItem>)
        }

        <Link to={`/ourShop/${title}`} >

           <button className="btn btn-secondary">Order</button>
        </Link>

    </div>
    </div>
  )
}

export default MenuCategory