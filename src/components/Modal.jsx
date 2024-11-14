
export default function Modal({ open, onClose, children }) {
    return (
        // 在<dialog>元素上直接加上open屬性；open為true時會自動打開(HTML預設)
        <dialog open={open}>
            <div onClick={onClose} className={`fixed inset-0 grid transition-colors ${open ? "bg-black/30" : "invisible"}`}>
                <div className="bg-white w-1/3 m-auto rounded-md shadow-sm p-3 flex flex-col gap-3">
                    <p className="text-xl">Sure to delete?</p>
                    <span className="text-gray font-thin">or click anywhere to cancel</span>
                    {children}
                </div>
            </div >
        </dialog>
    );
}