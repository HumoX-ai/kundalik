// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function Swipers() {
  return (
    <>
      <Swiper
        style={{ margin: "0px", padding: "0px" }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay:4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <>
            <SwiperSlide key={item.title}>
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  sx={{
                    height: { xs: "440px", sm: "500px" },

                    objectPosition: { xs: "right", sm: "top" },
                  }}
                  image={item.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="outlined" color="success">
                    Batafsil ma`lumot
                  </Button>
                </CardActions>
              </Card>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
}

const data = [
  {
    img: "https://assets.nationbuilder.com/marriage/pages/2126/features/original/Binary_Male_Teacher.png?1542936494",
    title: "Ustozlarga",
    description:
      "Maktabdagi ish jarayonini avtomatlashtirish va chorakda 20 soat ish vaqtini tejash uchun zamonaviy ta'lim platformasidan foydalaning.",
  },
  {
    img: "https://www.itl.cat/pngfile/big/214-2140785_ielts-student.jpg",
    title: "O'quvchilarga",
    description:
      "Kundalik maktabda muvaffaqiyatli bo'lishga yordam beradi. Baholar, dars jadvali, uy vazifasi, ijodiy topshiriqlar hamisha qo'l ostingda!",
  },
];
