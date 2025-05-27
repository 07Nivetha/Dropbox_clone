import SignUpForm from "@/components/SignUpForm";
import Navbar from "@/components/Navbar";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-default-50">
      {/* Use the unified Navbar component */}
      <Navbar />

      <main className="flex-1 flex justify-center items-center p-6">
        <SignUpForm />
      </main>

      {/* Footer with dark blue theme */}
      <footer className="bg-blue-900 py-4 md:py-6 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Dropbox. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}