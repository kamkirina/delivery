
export const Icon = (props) => {
    const {Svg, clicable, onClick, className =''} = props

    const icon = <Svg className={`icon ${className}`} onClick={undefined} />

    if(clicable){
      return  <button className={className} onClick={onClick} type="button">{icon}</button>
    }
  return icon
}
