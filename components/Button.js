export default function Button({ onButtonClick }) {

  return (
    <button 
      className="border-2 border-main-blue rounded-lg p-3
        font-bold text-main-blue
        hover:bg-slate-200 active:bg-slate-300"
      onClick={onButtonClick}>Increment counter</button>
  )
}