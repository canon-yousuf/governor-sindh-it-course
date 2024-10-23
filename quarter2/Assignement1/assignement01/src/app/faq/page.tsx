// app/faq/page.tsx
export default function FAQPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      <ul className="mt-4 space-y-4">
        <li className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-2xl font-semibold">What services do you offer?</h2>
          <p className="mt-2">We offer a variety of services including web development and design.</p>
        </li>
        <li className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-2xl font-semibold">How can I contact you?</h2>
          <p className="mt-2">You can contact us through the contact page or email us at contact@example.com.</p>
        </li>
      </ul>
    </div>
  );
}