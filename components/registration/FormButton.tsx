//Form Button --- Symptomify
export default function FormButton ({ButtonText=""}) {
    return (
        <button type="submit" className={`flex justify-center self-center text-sm text-white font-medium bg-color-three cursor-pointer duration-300 hover:bg-color-two my-6 py-2 px-3 rounded-sm`}>
            {ButtonText}
        </button>
       
    )
}