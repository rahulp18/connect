import { Card, Layout } from "../components";

export default function Home() {
  return (
    <Layout title="Home (Connect)" rightBar={true}>
      <div className="px-9 py-5  ">
        <div className="flex gap-6 flex-col items-center justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <Card key={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
