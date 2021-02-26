import Link from "next/link";
const Compo = ({ data }) => {
  return (
    <Link href={`/book/${data._id}`}>
      <div className="flex flex-col" style={{ direction: "rtl" }}>
        <a href={`/book/${data._id}`}>
          <img src={data.image} className="img_slide" />
        </a>
        <h1 className="dark:text-white font-Vazir text-sm">{data.title}</h1>
      </div>
    </Link>
  );
};

export default Compo;
