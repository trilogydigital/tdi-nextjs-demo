export default function Footer() {
  return (
    <footer className=" bg-white dark:bg-gray-900 text-center py-4">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </p>
    </footer>
  )
}