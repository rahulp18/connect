import { AddPost, Card, Layout } from "../components";

export default function Home() {
  console.log(`${process.env.NEXT_PUBLIC_MONGO_URI}`);
  return (
    <Layout title="Home (Connect)" rightBar={true}>
      <div className="px-9 py-5 my-5 ">
        <AddPost />
        <div className="flex gap-6 flex-col items-center justify-center mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <Card key={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
