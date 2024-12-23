export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Organized Site. All rights reserved.</p>
      </div>
    </footer>
  )
}

