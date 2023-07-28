
export default function Footer({ allStands }) {
  return (
    <footer className="flex justify-between bg-green-500 p-8 text-3xl text-black bottom-0 fixed left-0 right-0">
      <p>{allStands.length} Locations World Wide</p>
    </footer>
  )
}