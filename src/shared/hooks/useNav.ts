import { useNavigate } from "react-router-dom"


export const useNav = () => {
    const navigate = useNavigate()
    return (id: number) => navigate(`/product/${id}`)
}