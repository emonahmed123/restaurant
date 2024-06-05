import { FaTrashAlt, FaUsers } from "react-icons/fa"
import useAxiosecure from "../../../hooks/useAxiosecure"
import { useQuery } from "@tanstack/react-query"
import Swal from "sweetalert2"


const Alluser = () => {
   const axiosSecure=useAxiosecure()
   
    const { isPending, refetch, data:users=[]} = useQuery({
        queryKey: ['users'],
        queryFn:async () =>{
        const res= await axiosSecure.get('/users',
        // {

        //     headers:{
        //         authorization: `Bearer ${localStorage.getItem('access-token')}`
        //     }
        // }
    );
        return res.data}
      })
        // if(isPending){
        //     return  
        // }

        const handleMakeAdmin = user =>{
            axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res =>{
                console.log(res.data)
                if(res.data.modifiedCount > 0){
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }


        const handleDeleteUser=(user)=>{
          
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result)=>{
                if(result.isConfirmed){
                    axiosSecure.delete(`/users/${user._id}`)
                    .then((res)=>{
                    
                        if(res.data.deleteCount>0){
                     
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                        Swal.fire({
                            title: "Not delete",
                            text: `${err.message}`,
                            icon: "error"
                        });
                    })
                }
            })
          
        }
 
    return (
    <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-orange-500">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Alluser