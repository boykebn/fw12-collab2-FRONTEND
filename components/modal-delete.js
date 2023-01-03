

const ModalDelete = () => {
  return (
    <div>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <div className="flex justify-center">
            <h3 className="font-bold text-lg">Are you sure want to delete the selected items?</h3>
          </div>
          <div className="modal-action flex justify-between gap-[260px] items-center w-[100px]">
            <a href="#" className="btn bg-white text-black">Cancel</a>
            <a href="#" className="btn">Delete</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete;