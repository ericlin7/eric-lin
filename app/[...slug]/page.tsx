import Home from "@/components/home";

// Define the dynamic paths for static export
export async function generateStaticParams() {
  return [{ slug: ["path1"] }, { slug: ["path2", "subpath"] }];
}

// Page component
function Page() {
  return <Home />;
}

export default Page;
