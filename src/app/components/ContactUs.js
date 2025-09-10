"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  
  const SERVICE_ID = "service_pl2pr56";  
  const TEMPLATE_ID = "template_wayvat8"; 
  const PUBLIC_KEY = "a7kdwcL0QfvudmpCk";    

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) return "Please enter a valid email.";
    if (!form.subject.trim()) return "Please add a subject.";
    if (!form.message.trim() || form.message.trim().length < 10)
      return "Message should be at least 10 characters.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    const err = validate();
    if (err) {
      setStatus({ type: "error", text: err });
      return;
    }

    setLoading(true);
    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setLoading(false);
      setStatus({
        type: "success",
        text: "Message sent! We will reply soon.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      setLoading(false);
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    }
  }

  return (
    <section className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
      <p className="text-sm text-gray-600 mb-6">
        Have a question, suggestion or want to collaborate? Fill the form below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
              placeholder="you@example.com"
              type="email"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Subject</span>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
            placeholder="Subject"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
            placeholder="Write your message..."
          />
        </label>

        
        {status && (
          <div
            className={`p-3 rounded-md text-sm ${
              status.type === "success"
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {status.text}
          </div>
        )}

        <div className="flex items-center justify-between gap-4">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          <div className="text-sm text-gray-500">
            Or email us at support@E Shop.com
          </div>
        </div>
      </form>
    </section>
  );
}
