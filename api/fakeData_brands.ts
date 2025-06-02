import audi from '@/public/assets/car_logo/audi-logo.png'
import bentley from '@/public/assets/car_logo/bentley-logo.png'
import bmw from '@/public/assets/car_logo/bmw-logo.png'
import bugatti from '@/public/assets/car_logo/bugatti-logo.png'
import ford from '@/public/assets/car_logo/ford-logo.png'
import honda from '@/public/assets/car_logo/honda-logo.png'
import hyundai from '@/public/assets/car_logo/hyundai-logo.png'
import jeep from '@/public/assets/car_logo/jeep-logo.png'
import kia from '@/public/assets/car_logo/kia-logo.png'
import lamborghini from '@/public/assets/car_logo/lamborghini-logo.png'
import maserati from '@/public/assets/car_logo/maserati-logo.png'
import peugeot from '@/public/assets/car_logo/peugeot-logo.png'
import porsche from '@/public/assets/car_logo/porsche-logo.png'
import subaru from '@/public/assets/car_logo/subaru-logo.png'
import tesla from '@/public/assets/car_logo/tesla-logo.png'
import toyota from '@/public/assets/car_logo/toyota-logo.png'


type Brand = {
    id: number;
    name: string;
    logo: string;
    founded: number;
    country: string;
};


export const brandsData: Brand[] = [
    { id: 1, name: "Audi", logo: audi.src, founded: 1909, country: "Germany" },
    { id: 2, name: "Bentley", logo: bentley.src, founded: 1919, country: "United Kingdom" },
    { id: 3, name: "BMW", logo: bmw.src, founded: 1916, country: "Germany" },
    { id: 4, name: "Bugatti", logo: bugatti.src, founded: 1909, country: "France" },
    { id: 5, name: "Ford", logo: ford.src, founded: 1903, country: "USA" },
    { id: 6, name: "Honda", logo: honda.src, founded: 1948, country: "Japan" },
    { id: 7, name: "Hyundai", logo: hyundai.src, founded: 1967, country: "South Korea" },
    { id: 8, name: "Jeep", logo: jeep.src, founded: 1941, country: "USA" },
    { id: 9, name: "Kia", logo: kia.src, founded: 1944, country: "South Korea" },
    { id: 10, name: "Lamborghini", logo: lamborghini.src, founded: 1963, country: "Italy" },
    { id: 11, name: "Maserati", logo: maserati.src, founded: 1914, country: "Italy" },
    { id: 12, name: "Peugeot", logo: peugeot.src, founded: 1810, country: "France" },
    { id: 13, name: "Porsche", logo: porsche.src, founded: 1931, country: "Germany" },
    { id: 14, name: "Subaru", logo: subaru.src, founded: 1953, country: "Japan" },
    { id: 15, name: "Tesla", logo: tesla.src, founded: 2003, country: "USA" },
    { id: 16, name: "Toyota", logo: toyota.src, founded: 1937, country: "Japan" },
];