import { Models } from 'appwrite';
import Loader from './Loader';
import GridPostList from './GridPostList';

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[]; // Remova .documents
};

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
  if (isSearchFetching) return <Loader />

  if (searchedPosts && searchedPosts.length === 0) {
    return <p className='text-light-4 mt-10 text-center w-full'>No results found</p>;
  }

  return <GridPostList posts={searchedPosts} />;
}

export default SearchResults;
