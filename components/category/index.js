const Compo = () => {
  const arrayOfDaste = [
    {
      img: "/img/img-gallery/Art.png",
      text: "هنر",
    },
    {
      img: "/img/img-gallery/Child.png",
      text: "کودک",
    },
    {
      img: "/img/img-gallery/Course.png",
      text: "داستانی",
    },
    {
      img: "/img/img-gallery/Economy.png",
      text: "اقتصاد",
    },
    {
      img: "/img/img-gallery/Encyclopedia of the Islamic World.png",
      text: "اسلامی",
    },
    {
      img: "/img/img-gallery/Free Persian books.png",
      text: "فارسی",
    },
    {
      img: "/img/img-gallery/History.png",
      text: "تاریخی",
    },
    {
      img: "/img/img-gallery/Life style.png",
      text: "سبک زندگی",
    },
    {
      img: "/img/img-gallery/Magazines.png",
      text: "مجلات",
    },
    {
      img: "/img/img-gallery/Philosophy.png",
      text: "فلسفه",
    },
    {
      img: "/img/img-gallery/Religion and mysticism.png",
      text: "دینی",
    },
    {
      img: "/img/img-gallery/Rights.png",
      text: "حقوق",
    },
    {
      img: "/img/img-gallery/Stories and novels.png",
      text: "رمان",
    },
    {
      img: "/img/img-gallery/Teenager.png",
      text: "نوجوان",
    },
    {
      img: "/img/img-gallery/University.png",
      text: "دانشگاه",
    },
    {
      img: "/img/img-gallery/Women and Feminism.png",
      text: "زنان",
    },
    {
      img: "/img/img-gallery/Poetry.png",
      text: "شعر",
    },
  ];
  return (
    <>
      {arrayOfDaste.map((e) => {
        return (
          <>
            <a href={`/searchbook/${e.text}/0/7`}>
              <div
                style={{ background: `url(${e.img})` }}
                className="w-32 h-32 rounded-2xl bg-contain"
              ></div>
              <h1 className="text-lg text-center">{e.text}</h1>
            </a>
          </>
        );
      })}
    </>
  );
};

export default Compo;
