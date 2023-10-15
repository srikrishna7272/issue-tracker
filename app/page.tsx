import Pagination from "./components/Pagination";

export default function Home({ searchParams }: { seachParams: { page: string } }) {
  return <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)} />;
}
