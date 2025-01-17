import { motion } from "framer-motion";
import supabase from "../supabase-client";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    console.log(formData);

    try {
      const { data, error } = await supabase
        .from("messages")
        .insert([formData]);

      if (error) {
        console.error("Error inserting data:", error.message);
        alert("Failed to send message.");
      } else {
        alert("Message sent successfully!");
        event.target.reset();
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <section
      id="contact"
      className="w-screen h-screen flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 max-sm:mt-64 "
    >
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              name="name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              name="email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
