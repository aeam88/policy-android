import Image from "next/image";


export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-12 text-zinc-300">
      <div className="flex items-center">
        <Image src="/logo-policy.svg" alt="" width={70} height={70} />
        <h1 className="ml-4 text-4xl font-bold text-[#8CF35A]">Privacy Policy for Take a note</h1>
      </div>
      <div className="my-16">
        <p className="text-zinc-300 mb-16">Effective Date: 10-03-2023</p>
        <h3 className="font-bold text-[#8CF35A] text-xl">1. Introduction</h3>
        <p className="my-4">Welcome to Take a note! This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information. By using our todo app, you agree to the terms outlined in this policy.</p>
        <h3 className="font-bold text-[#8CF35A] text-xl">2. Information We Collect</h3>
        <h4 className="font-bold text-[#8CF35A] text-md mt-4">2.1 Personal Information</h4>
        <p className="my-4">Account Information: When you create an account, we may collect your name, email address, and password.</p>
        <p className="my-4">Task Information: We collect information related to your tasks, such as task names, due dates, and notes.</p>
        <h3 className="font-bold text-[#8CF35A] text-xl">3. How We Use Your Information</h3>
        <p className="my-4">We use the collected information for the following purposes:</p>
        <ul className="mb-4">
          <li>To provide and maintain the app.</li>
          <li>To personalize your experience.</li>
          <li>To improve our app and services.</li>
          <li>To communicate with you about updates, new features, or important notices.</li>
        </ul>
        <h3 className="font-bold text-[#8CF35A] text-xl">4. Security</h3>
        <p className="my-4">We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</p>
        <h3 className="font-bold text-[#8CF35A] text-xl">5. Changes to This Privacy Policy</h3>
        <p className="my-4">We reserve the right to update or change our Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website or app.</p>
        <h3 className="font-bold text-[#8CF35A] text-xl">6. Contact Us</h3>
        <p className="my-4">If you have any questions or concerns about this Privacy Policy, please contact us at a.alvarezmontes@gmail.com.</p>
      </div>
    </div>
  );
}
