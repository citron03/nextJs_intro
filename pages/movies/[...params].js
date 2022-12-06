import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  // const router = useRouter();
  // const [title, id] = router.query.params || [];
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  // console.log(ctx);
  return {
    props: { params },
  };
}
