import JobSearchForm from '@/components/JobSearchForm';
import Logo from '@/components/CompanyLogo';
import Accordion from '@/components/FooterAccordian';

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <header>
            <Logo></Logo>
          </header>
        </div>
        <main>
          <JobSearchForm />
        </main>
        <footer>
          <Accordion/>
        </footer>
      </div>
    </main>
  );
}