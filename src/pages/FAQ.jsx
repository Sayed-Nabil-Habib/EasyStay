export default function FAQ() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
      <ul className="space-y-4 text-gray-700">
        <li><strong>Q:</strong> How do I book?<br /><strong>A:</strong> Just register, find a stay, and click "Reserve Now".</li>
        <li><strong>Q:</strong> Can I cancel?<br /><strong>A:</strong> Yes, cancellation is allowed up to 24 hours in advance.</li>
        <li><strong>Q:</strong> How do I become a host?<br /><strong>A:</strong> Create an account and activate host features in your profile.</li>
      </ul>
    </div>
  );
}
