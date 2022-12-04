import { Layout } from "../components";

export default function Home() {
  return (
    <Layout title="Home (Connect)">
      <div className="px-9 py-5">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-[60%] bg-white shadow-sm px-3">45</div>

          <div className="w-[40%] px-3 bg-white shadow-sm">455</div>
        </div>
      </div>
    </Layout>
  );
}
