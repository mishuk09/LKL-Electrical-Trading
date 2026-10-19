export const business = {
  name: "LKL Electrical Trading",
  phone: "+60 16-626 1222",
  phoneHref: "tel:+60166261222",
  address:
    "No. 12 & 13, Jalan TKL, Taman Kota Laksamana, 75200 Melaka, Malaysia",
  shopee: "https://shopee.com.my/laelectrical",
  maps: "https://www.google.com/maps/search/?api=1&query=LKL+Electrical+Trading+Taman+Kota+Laksamana+Melaka",
  mapEmbed:
    "https://maps.google.com/maps?q=LKL%20Electrical%20Trading%20Taman%20Kota%20Laksamana%20Melaka&t=&z=16&ie=UTF8&iwloc=&output=embed",
};
export function whatsapp(
  message = "Hi LKL Electrical! I would like to enquire about your air conditioning services.",
) {
  return `https://wa.me/60166261222?text=${encodeURIComponent(message)}`;
}
export const navigation = [
  "About",
  "Services",
  "Products",
  "Reviews",
  "Gallery",
  "Contact",
];
export const photos = {
  hero: "/images/home.jpg",
  technician: "/images/daikin-person.jpg",
  installation: "/images/unnamed.jpg",
  shop: "/images/front.jpg",
  finished: "/images/unnamed (2).jpg",
  materials: "/images/materials.jpg",
  showroom: "/images/unnamed (6).jpg",
  outdoor: "/images/install.jpg",
};
