

const Button = ({label,iconUrl,backgroundColor,textColor,borderColor}) => {
  return (
    <button className={`flex items-center justify-center gap-2 px-6 py-3 font-montserrat
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`  : 'bg-coral-red text-white'}
    border text-lg leading-none   rounded-full`}>
        {label}
        {iconUrl && <img src={iconUrl}  className="w-5 h-5 ml-2 rounded-full"/>}
    </button>
  )
}

export default Button