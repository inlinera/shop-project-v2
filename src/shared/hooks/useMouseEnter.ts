interface IProductImage {
  pictures: string[]
  setIsLoading: (state: boolean) => void
  setCurrentImage: (state: string) => void
}

export const useMouseEnter = ({pictures, setIsLoading, setCurrentImage}: IProductImage) => {
    if (pictures?.length > 1) {
      setIsLoading(true)
      const img = new Image()
      img.src = pictures[1]
      img.onload = () => {
        setCurrentImage(pictures[1])
        setIsLoading(false)
      }
    }
  }