import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosecure from "./useAxiosecure";


const useAdmin = () => {
    const { user } = useAuth();
    console.log(user)
    const axiosSecure =useAxiosecure ();
    const { data: isAdmin,  isLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isLoading]
};

export default useAdmin;