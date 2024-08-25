import CustomCard from "@/components/common/CustomCard";
import InternalNavbar from "@/components/common/InternalNavbar";
import DisplayAllCategories from "@/components/core/HomeComponent/DisplayAllCategories";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className=" border-black">
        <InternalNavbar/>

        <div className="px-10 mt-5">
          <DisplayAllCategories/>
        </div>
      </div>
    </main>
  );
}
