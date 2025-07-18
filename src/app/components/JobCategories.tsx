export default function JobCategories() {
  const jobsByLocation = [
    'Jobs by Location',
    'Accounting',
    'Administration', 
    'Agriculture',
    'Arts',
    'Banking',
    'Catering'
  ];

  const jobsByIndustry = [
    'Jobs by Industry',
    'Distribution',
    'Driving',
    'Education',
    'Electronics',
    'Engineering',
    'Financial Services'
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-white font-medium mb-3 bg-blue-800 px-4 py-2 rounded">
          
        </h3>
        <div className="space-y-1">
          {jobsByLocation.slice(1).map((category) => (
            <div key={category} className="text-blue-200 hover:text-white cursor-pointer px-4 py-1">
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Jobs by Industry */}
      <div>
        <h3 className="text-white font-medium mb-3 bg-blue-800 px-4 py-2 rounded">
        </h3>
        <div className="space-y-1">
          {jobsByIndustry.slice(1).map((category) => (
            <div key={category} className="text-blue-200 hover:text-white cursor-pointer px-4 py-1">
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}