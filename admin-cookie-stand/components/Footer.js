import { newStands } from "../pages/index"

export default function Footer() {
  return (
    <footer className="flex justify-between bg-green-500 p-8 text-3xl text-black bottom-0 fixed left-0 right-0">
      <p>{newStands.length} Locations World Wide</p>
    </footer>
  )
}