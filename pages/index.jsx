import { useState } from "react";

function Label({ children }) {
  return (
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {children}
    </label>
  );
}

export default function CentrixBooking() {
  const [date, setDate] = useState("");

  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-8">
      <header className="text-center space-y-2">
        <img
          src="/centrix-logo.png"
          alt="Centrix Logo"
          width={200}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold">Centrix Car Care Services</h1>
        <p className="text-lg">Smart Mobile Garage – Book your service now</p>
      </header>

      <section className="grid gap-6 max-w-2xl mx-auto">
        <div className="border rounded-lg shadow p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Book an Appointment</h2>

          <div>
            <Label>Your Name</Label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="John Doe"
            />
          </div>

          <div>
            <Label>Phone Number</Label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="e.g. 06 12345678"
            />
          </div>

          <div>
            <Label>Email</Label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <Label>Choose Service</Label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>APK Inspection & Certification</option>
              <option>Car Interior & Exterior Detailing</option>
              <option>Battery Replacement</option>
              <option>Car Electrical Work</option>
              <option>Wheel Alignment</option>
              <option>Brake Service</option>
              <option>Full Diagnostic Check</option>
            </select>
          </div>

          <div>
            <Label>Preferred Date</Label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <Label>Additional Notes</Label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Anything we should know?"
            />
          </div>

          <div>
            <Label>Payment Method</Label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Debit Card</option>
              <option>Cash</option>
              <option>Crypto</option>
              <option>Other (e.g. Gold Chain)</option>
            </select>
          </div>

          <button className="w-full mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition">
            Submit Booking
          </button>
        </div>
      </section>

      <section className="max-w-2xl mx-auto text-center space-y-4">
        <h2 className="text-xl font-semibold">Find Us on Google Maps</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.6075140043875!2d4.4788903!3d52.0685681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5d8ab8371bb33%3A0x890172af78dbf183!2sCentrix%20Car%20Care%2C%20Smart%20Mobile%20Garage%20and%20Service!5e0!3m2!1sen!2snl!4v1714827600000!5m2!1sen!2snl"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="text-center mt-6">
        <a
          href="https://wa.me/31630224342"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Message Us on WhatsApp
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Centrix Car Care Services. All rights reserved.
      </footer>
    </div>
  );
}
