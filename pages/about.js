import LayOut from "../components/Layout/Layout";
const Compo = () => {
  return (
    <>
      <LayOut>
        <div style={{ direction: "rtl" }} className="font-IranianSans mb-20">
          <h1 className="text-2xl dark:text-gray-500 mb-4">
            <span className="text-bookgram-sabz">بوکگرام</span> چیست؟
          </h1>
          <p className="text-base dark:text-gray-200 leading-10	">
            <span className="text-bookgram-sabz">بوکگرام</span> یک فروشگاه
            آنلاین کتاب الکترونیکی و صوتی است که علاوه بر کتاب، مجله و روزنامه
            نیز در آن منتشر می‌شود.{" "}
            <span className="text-bookgram-sabz">بوکگرام</span> این کتاب‌ها را
            با همکاری ناشران و با رعایت حق تکثیر، به صورت قانونی روی اپلیکیشن و
            سایت منتشر می‌کند. دانلود و نصب اپلیکیشن{" "}
            <span className="text-bookgram-sabz">بوکگرام</span> رایگان است. شما
            می‌توانید با درست کردن یک حساب کاربری، کتاب‌هایتان را در سه دستگاه
            مختلف همراه داشته باشید و بخوانید. اپلیکیشن{" "}
            <span className="text-bookgram-sabz">بوکگرام</span> را می‌توانید روی
            سیستم‌ عامل اندروید و آی‌او‌اس نصب کنید. همچنین می‌توانید با نسخه
            تحت وب، بدون نیاز به نصب و دانلود، روی کامپیوتر نیز به کتاب‌هایتان
            دسترسی داشته باشید. تمام ناشرها و نویسندگان می‌توانند برای انتشار
            کتاب‌هایشان به صورت الکترونیکی و صوتی با ما همکاری کنند. راه‌های
            ارتباطی با ما را می‌توانید در قسمت« تماس با ما »در سایت{" "}
            <span className="text-bookgram-sabz">بوکگرام</span> پیدا کنید
          </p>
        </div>
      </LayOut>
    </>
  );
};

export default Compo;
