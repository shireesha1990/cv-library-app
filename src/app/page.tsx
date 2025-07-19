import JobSearchForm from '@/components/JobSearchForm';
import JobCategories from '@/components/JobCategories';
import Logo from '@/components/CompanyLogo';

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
          <JobCategories />
        </footer>
      </div>
    </main>
  );
}