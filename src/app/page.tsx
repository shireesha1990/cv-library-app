import JobSearchForm from '../app/components/JobSearchForm';
import JobCategories from '../app/components/JobCategories';

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl font-bold mb-2">CV Library</h1>
        </div>
        
        {/* Search Form */}
        <JobSearchForm />
      
        <JobCategories />
      </div>
    </main>
  );
}