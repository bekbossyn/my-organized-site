export default function Contact() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Get in touch with us for any inquiries or feedback.</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block">Name</label>
          <input type="text" id="name" name="name" className="w-full border p-2" required />
        </div>
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input type="email" id="email" name="email" className="w-full border p-2" required />
        </div>
        <div>
          <label htmlFor="message" className="block">Message</label>
          <textarea id="message" name="message" className="w-full border p-2" rows={4} required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </div>
  )
}

