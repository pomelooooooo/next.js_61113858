import Footer from "../components/footer/footer";
import Shops from "../components/Shops";
import SetHead from "../components/head/head";
import Head from "next/head";

const PRODUCT_LISTS = [
  {
    product_id: 1,
    product_name: "NMD_R1 ",
    product_img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d5a344f7dcc644e58e71ac6400b31c52_9366/NMD_R1_FX6794_01_standard.jpg",
    product_price: 4600,
  },
  {
    product_id: 2,
    product_name: "DURAMO SL",
    product_img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/196640be9cbc4770854bab5000f84a78_9366/Duramo_SL_FW7393_01_standard.jpg",
    product_price: 2000,
  },
  {
    product_id: 3,
    product_name: "STAN SMITH",
    product_img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/72a5d34bfe39473cb9a9ac1d01054432_9366/STAN_SMITH_FX5523_01_standard.jpg",
    product_price: 3200,
  },
  {
    product_id: 4,

    product_name: "ZX 2K BOOST",
    product_img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7f27a2e86b44440b9bbbac3e00994a26_9366/ZX_2K_Boost_FX7036_01_standard.jpg",
    product_price: 4600,
  },
  {
    product_id: 5,

    product_name: "PRO BOOST GCA LOW",
    product_img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/96531b75aea64636a46aabbc00ed1161_9366/PRO_BOOST_GCA_Low_FX9235_01_standard.jpg",
    product_price: 4000,
  },
  {
    product_id: 6,

    product_name: "LITE RACER",
    product_img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/b4840395b3724be292f1abac009b7f95_9366/Lite_Racer_FX3793_01_standard.jpg",
    product_price: 1500,
  },
  {
    product_id: 7,

    product_name: "RESPONSE SR",
    product_img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8b767e03ac18488a946aab4a00a000b4_9366/Response_SR_FX3625_01_standard.jpg",
    product_price: 1750,
  },
  {
    product_id: 8,

    product_name: "ULTRABOOST 1 DNA",
    product_img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/cdc1b857ece14be9bed8abfd01701c50_9366/Ultraboost_1_DNA_H68156_01_standard.jpg",
    product_price: 7800,
  },
  {
    product_id: 9,

    product_name: "LAVARUN",
    product_img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38c2ff49788d41a4a623aca7010a707e_9366/Lavarun_H03125_01_standard.jpg",
    product_price: 4500,
  },
  {
    product_id: 10,
    product_name: "NMD_R1 PK",
    product_img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/879bbd4ac95c43279cc8acd300f5ddb1_9366/NMD_R1_PK_GZ0066_01_standard.jpg",
    product_price: 5800,
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Shops data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: PRODUCT_LISTS,
    },
  };
}
