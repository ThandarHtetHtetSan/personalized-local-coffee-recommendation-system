import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'


const Modal = ({ isOpen, onClose, title, description, children }) => {
  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-900/50">
        <div className="flex min-h-full items-center justify-center p-2">
          <DialogPanel
            transition
            className="w-full max-w-3xl rounded-xl bg-gray-50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-lg font-semibold text-gray-700">
              {title}
            </DialogTitle>
            {description && <Description>{description}</Description>}
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal