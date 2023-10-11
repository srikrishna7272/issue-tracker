import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

const LoadingNewIssuePage = () => {
  return <IssueFormSkeleton />;
};

export default LoadingNewIssuePage;
