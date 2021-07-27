import { useState } from 'react';
import './App.css';
import ALL_JOBS from './data/jobsList.json';
import Icon from './Images';

function App() {
  const [jobs, setJobs] = useState(ALL_JOBS);
  const [filters, setFilters] = useState([]);

  const addFilter = (event) => {
    const tag = event.currentTarget.getAttribute('tag');
    if (!filters.includes(tag)) {
      const tempFilters = [...filters].concat(tag);
      const newData = ALL_JOBS.filter((job) =>
        sameElements(tempFilters, job.languages, job.tools)
      );
      setFilters(tempFilters);
      setJobs(newData);
    }
  };

  const removeFilter = (event) => {
    const tag = event.currentTarget.getAttribute('tag');
    if (tag) {
      const tempFilters = [...filters];
      const newFilters = tempFilters.filter((el) => !(tag === el));
      const newData = ALL_JOBS.filter((job) =>
        sameElements(newFilters, job.languages, job.tools)
      );
      setFilters(newFilters);
      newFilters.length > 0 ? setJobs(newData) : setJobs(ALL_JOBS);
    }
  };

  const clearFilters = () => {
    setFilters([]);
    setJobs(ALL_JOBS);
  };
  return (
    <div className='main-div'>
      <Header />
      {filters.length > 0 && (
        <Filters
          filters={filters}
          clearFilters={clearFilters}
          removeFilter={removeFilter}
        />
      )}
      {jobs.map((job, i) => (
        <JobCard key={i} job={job} addFilter={addFilter} />
      ))}
    </div>
  );
}

const Filters = ({ filters, clearFilters, removeFilter }) => {
  return (
    <div className='main-filter-div'>
      <div className='filters-div sharp-borders'>
        {filters.map((filter, i) => (
          <div className='filter-container sharp-borders light-cyan-bg' key={i}>
            <span className='filter-name sub-heading'>{filter}</span>
            <i
              class='fa fa-times del-icon'
              aria-hidden='true'
              onClick={removeFilter}
              tag={filter}
            ></i>
          </div>
        ))}
      </div>
      <button
        className='clear-text sub-heading borderless-button'
        onClick={clearFilters}
      >
        Clear
      </button>
    </div>
  );
};

const JobCard = ({ job, addFilter }) => {
  return (
    <div className='job-card sharp-borders'>
      <Icon name={job.company} />
      <div className='details-div'>
        <div className='info-div'>
          <Top job={job} />
          <Middle title={job.position} />
          <Bottom job={job} />
        </div>
        <Tags job={job} addFilter={addFilter} />
      </div>
    </div>
  );
};

const Tags = ({ job, addFilter }) => {
  const tags = job.languages.concat(job.tools);
  return (
    <div className='tags-div'>
      {tags.map((tag, i) => (
        <span
          className='tag sub-heading light-cyan-bg sharp-borders'
          key={i}
          onClick={addFilter}
          tag={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
const Top = ({ job }) => {
  return (
    <div className='top-div'>
      <span className='company-name sub-heading'>{job.company}</span>
      {job.new && (
        <span className='new-tag cyan-bg light-text round-borders'>NEW!</span>
      )}
      {job.featured && (
        <span className='featured-tag dark-bg light-text round-borders'>
          URGENT!
        </span>
      )}
    </div>
  );
};
const Middle = ({ title }) => {
  return (
    <div className='middle-div'>
      <span className='job-title heading'>{title}</span>
    </div>
  );
};
const Bottom = ({ job }) => {
  return (
    <div className='bottom-div'>
      <span className='bottom-tag body-text grey-color-text'>
        {job.postedAt}
      </span>
      <span className='dot-separator grey-color-text'>&#183;</span>
      <span className='bottom-tag body-text grey-color-text'>
        {job.contract}
      </span>
      <span className='dot-separator grey-color-text'>&#183;</span>
      <span className='bottom-tag body-text grey-color-text'>
        {job.location}
      </span>
    </div>
  );
};

const Header = () => {
  return <div className='header-div'></div>;
};

function sameElements(base_array, first_array, second_array) {
  let res = false;
  res = base_array.some((item) => first_array.includes(item));
  if (!res) {
    res = base_array.some((item) => second_array.includes(item));
  }
  /*res = base_array.some((item) => first_array.indexOf(item) >= 0);
  if (!res) {
    res = base_array.some((item) => second_array.indexOf(item) >= 0);
  }*/
  return res;
}

export default App;
