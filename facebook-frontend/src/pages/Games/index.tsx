import classNames from "classnames/bind";
import styles from "./Games.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from "react";
import MultiItemSlider from "../../components/MultiItemSlider";
import Header from "../../components/Header";
const cx = classNames.bind(styles);

function Games() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);

    };
    const recentGames = [
        {
          url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/275003790_1151487275679262_8958964674936888700_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=d1jcVzjZxOsAX8QzCJ1&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBiovDzL8UQP_6XpPabq7pS9LreaM5W4LabhwXeDQ1X0g&oe=6485AD93",
          title: "Classic Slot"
        },
        {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/328299820_9309543715730221_6398721114028789847_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=6B6qklXs6K4AX8kKKbB&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDR9LoskPibeXxbRSidZAGd9DJhqO3j8gsNF4EiGSjILQ&oe=64866AE5",
            title: "Bắn trứng khủng long Dynomite"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/27962929_1399915616781569_2945285509838012416_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=CIK2ePJxFqUAX8aPcQO&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBB6zr5PdUnTnAomBGD9UVve3vci1mK3HfD3NUvlYthNw&oe=6485FA7A",
            title: "Cờ úp"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/312881579_1508268686608431_2580671977073894599_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=jrj4A2xK9ggAX-SXNKB&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAlcaGERQGs7Zru2Q7qUnXUPiiOhelf6g4LcylKbtTr4A&oe=6485E379",
            title: "Bubble Shooter Pro"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/137691574_796998534551861_6022128774987773952_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=c4zSd5aWG78AX9bnfDZ&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCqbVdMwVQlSuLIsZKi85wYaPtg4UcvbfdsJrdfgvx80A&oe=6484AA5E",
            title: "Differencies"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/274052559_1116368605597441_8084617641304009932_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=9ItM0oQaDiYAX_9LSji&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBRZnOnIx935UnM7P_HXs5-0x3dF25A41GavNKpnzh0cQ&oe=6484AF7B",
            title: "Connect Animal Puzzle"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/27962929_1399915616781569_2945285509838012416_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=CIK2ePJxFqUAX8aPcQO&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBB6zr5PdUnTnAomBGD9UVve3vci1mK3HfD3NUvlYthNw&oe=6485FA7A",
            title: "Cờ úp"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/312881579_1508268686608431_2580671977073894599_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=jrj4A2xK9ggAX-SXNKB&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAlcaGERQGs7Zru2Q7qUnXUPiiOhelf6g4LcylKbtTr4A&oe=6485E379",
            title: "Bubble Shooter Pro"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/137691574_796998534551861_6022128774987773952_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=c4zSd5aWG78AX9bnfDZ&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCqbVdMwVQlSuLIsZKi85wYaPtg4UcvbfdsJrdfgvx80A&oe=6484AA5E",
            title: "Differencies"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/274052559_1116368605597441_8084617641304009932_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=9ItM0oQaDiYAX_9LSji&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBRZnOnIx935UnM7P_HXs5-0x3dF25A41GavNKpnzh0cQ&oe=6484AF7B",
            title: "Connect Animal Puzzle"
          },
      ];
    const likableGames=[
        {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/278012261_1177813756378097_1227963520793710025_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=zq0uUlUj-DkAX8243Qp&_nc_ht=scontent.fdad3-4.fna&oh=00_AfB5SnWSr5u7zVgj3SBpfZ-S7x_SK0IvzeuOLDisYCgzKQ&oe=6485AD9D",
            title: "Krytoi Texas HoldEm Poker",
            type: "Card",
        },
        {
            url: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.2081-6/76647379_459554111335216_4035955204405854208_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=102&ccb=1-7&_nc_sid=b29aad&_nc_ohc=KdEkQ2x1j54AX_8Dawp&_nc_ht=scontent.fdad3-5.fna&oh=00_AfD8GVKeo_WGB5IZJi6J-BVxrAZUz0_SAbQx9L04TUMsjg&oe=64860117",
            title: "Ocean Riches Casino",
            type: "Casino",
        },
        {
            url: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.2081-6/343303955_1358908451355081_6633060882847152693_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=103&ccb=1-7&_nc_sid=b29aad&_nc_ohc=V9Uzruyys8EAX8EaeMj&_nc_ht=scontent.fdad3-1.fna&oh=00_AfB2hneVPXDkqvGzha6Z0_a1Z0vGY1hYHjadWGR5-HM2zg&oe=6485F83A",
            title: "Double Vegas",
            type: "Casino",
        },
        {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/345209375_1365864167413993_1256579364178708462_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=5ckrTOG5kd0AX__t5m2&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAGimhltIv70jktAUif157ncmhrs5VKNnyQwDlWP-y9vA&oe=6484B1E7",
            title: "Golden City Casino -Free Slots",
            type: "Casino",
        },
         {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/83161504_577715252778537_7594964542677843968_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=wY2VvFtI144AX-12127&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCPtQxpx9pw9npQcqf7YUac7_-Lh1NKipgT-jAb8LjTiA&oe=648625C6",
            title: "Holy Moly Casino - Free Slots",
            type: "Casino",
        },
        {
            url: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.2081-6/343303955_1358908451355081_6633060882847152693_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=103&ccb=1-7&_nc_sid=b29aad&_nc_ohc=V9Uzruyys8EAX8EaeMj&_nc_ht=scontent.fdad3-1.fna&oh=00_AfB2hneVPXDkqvGzha6Z0_a1Z0vGY1hYHjadWGR5-HM2zg&oe=6485F83A",
            title: "Double Vegas",
            type: "Casino",
        },
        {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/345209375_1365864167413993_1256579364178708462_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=5ckrTOG5kd0AX__t5m2&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAGimhltIv70jktAUif157ncmhrs5VKNnyQwDlWP-y9vA&oe=6484B1E7",
            title: "Golden City Casino -Free Slots",
            type: "Casino",
        },
         {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/83161504_577715252778537_7594964542677843968_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=wY2VvFtI144AX-12127&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCPtQxpx9pw9npQcqf7YUac7_-Lh1NKipgT-jAb8LjTiA&oe=648625C6",
            title: "Holy Moly Casino - Free Slots",
            type: "Casino",
        },
    ] 
    const allGames = [
        {
          url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/275003790_1151487275679262_8958964674936888700_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=d1jcVzjZxOsAX8QzCJ1&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBiovDzL8UQP_6XpPabq7pS9LreaM5W4LabhwXeDQ1X0g&oe=6485AD93",
          title: "Classic Slot"
        },
        {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/328299820_9309543715730221_6398721114028789847_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=6B6qklXs6K4AX8kKKbB&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDR9LoskPibeXxbRSidZAGd9DJhqO3j8gsNF4EiGSjILQ&oe=64866AE5",
            title: "Bắn trứng khủng long Dynomite"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/27962929_1399915616781569_2945285509838012416_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=CIK2ePJxFqUAX8aPcQO&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBB6zr5PdUnTnAomBGD9UVve3vci1mK3HfD3NUvlYthNw&oe=6485FA7A",
            title: "Cờ úp"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/312881579_1508268686608431_2580671977073894599_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=jrj4A2xK9ggAX-SXNKB&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAlcaGERQGs7Zru2Q7qUnXUPiiOhelf6g4LcylKbtTr4A&oe=6485E379",
            title: "Bubble Shooter Pro"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/137691574_796998534551861_6022128774987773952_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=c4zSd5aWG78AX9bnfDZ&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCqbVdMwVQlSuLIsZKi85wYaPtg4UcvbfdsJrdfgvx80A&oe=6484AA5E",
            title: "Differencies"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/274052559_1116368605597441_8084617641304009932_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=9ItM0oQaDiYAX_9LSji&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBRZnOnIx935UnM7P_HXs5-0x3dF25A41GavNKpnzh0cQ&oe=6484AF7B",
            title: "Connect Animal Puzzle"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/27962929_1399915616781569_2945285509838012416_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=CIK2ePJxFqUAX8aPcQO&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBB6zr5PdUnTnAomBGD9UVve3vci1mK3HfD3NUvlYthNw&oe=6485FA7A",
            title: "Cờ úp"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/312881579_1508268686608431_2580671977073894599_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=jrj4A2xK9ggAX-SXNKB&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAlcaGERQGs7Zru2Q7qUnXUPiiOhelf6g4LcylKbtTr4A&oe=6485E379",
            title: "Bubble Shooter Pro"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/137691574_796998534551861_6022128774987773952_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=c4zSd5aWG78AX9bnfDZ&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCqbVdMwVQlSuLIsZKi85wYaPtg4UcvbfdsJrdfgvx80A&oe=6484AA5E",
            title: "Differencies"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/274052559_1116368605597441_8084617641304009932_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=9ItM0oQaDiYAX_9LSji&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBRZnOnIx935UnM7P_HXs5-0x3dF25A41GavNKpnzh0cQ&oe=6484AF7B",
            title: "Connect Animal Puzzle"
          },
          {
            url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/275003790_1151487275679262_8958964674936888700_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=d1jcVzjZxOsAX8QzCJ1&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBiovDzL8UQP_6XpPabq7pS9LreaM5W4LabhwXeDQ1X0g&oe=6485AD93",
            title: "Classic Slot"
          },
          {
              url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/328299820_9309543715730221_6398721114028789847_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=6B6qklXs6K4AX8kKKbB&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDR9LoskPibeXxbRSidZAGd9DJhqO3j8gsNF4EiGSjILQ&oe=64866AE5",
              title: "Bắn trứng khủng long Dynomite"
            },
            {
              url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/27962929_1399915616781569_2945285509838012416_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=CIK2ePJxFqUAX8aPcQO&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBB6zr5PdUnTnAomBGD9UVve3vci1mK3HfD3NUvlYthNw&oe=6485FA7A",
              title: "Cờ úp"
            },
            {
              url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/312881579_1508268686608431_2580671977073894599_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=jrj4A2xK9ggAX-SXNKB&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAlcaGERQGs7Zru2Q7qUnXUPiiOhelf6g4LcylKbtTr4A&oe=6485E379",
              title: "Bubble Shooter Pro"
            },
            {
              url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/137691574_796998534551861_6022128774987773952_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=c4zSd5aWG78AX9bnfDZ&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCqbVdMwVQlSuLIsZKi85wYaPtg4UcvbfdsJrdfgvx80A&oe=6484AA5E",
              title: "Differencies"
            },
            {
              url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/274052559_1116368605597441_8084617641304009932_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=9ItM0oQaDiYAX_9LSji&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBRZnOnIx935UnM7P_HXs5-0x3dF25A41GavNKpnzh0cQ&oe=6484AF7B",
              title: "Connect Animal Puzzle"
            },
            {
              url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/27962929_1399915616781569_2945285509838012416_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=CIK2ePJxFqUAX8aPcQO&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBB6zr5PdUnTnAomBGD9UVve3vci1mK3HfD3NUvlYthNw&oe=6485FA7A",
              title: "Cờ úp"
            },
            {
              url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/312881579_1508268686608431_2580671977073894599_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=jrj4A2xK9ggAX-SXNKB&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAlcaGERQGs7Zru2Q7qUnXUPiiOhelf6g4LcylKbtTr4A&oe=6485E379",
              title: "Bubble Shooter Pro"
            },
            {
              url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/137691574_796998534551861_6022128774987773952_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=c4zSd5aWG78AX9bnfDZ&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCqbVdMwVQlSuLIsZKi85wYaPtg4UcvbfdsJrdfgvx80A&oe=6484AA5E",
              title: "Differencies"
            },
            {
              url: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.2081-6/274052559_1116368605597441_8084617641304009932_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=9ItM0oQaDiYAX_9LSji&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBRZnOnIx935UnM7P_HXs5-0x3dF25A41GavNKpnzh0cQ&oe=6484AF7B",
              title: "Connect Animal Puzzle"
            },
      ];

  return (
    <>
    <Header></Header>
    <div className={cx('game-container')}>
        <div className={cx('side-bar', { 'hide-scrollbar': !isHovered })} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
            <div className={cx('row', 'game' )}>
            <span>Chơi game</span> <div className={cx('gear')}><i style={{
                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/wQqdN-soZ27.png")',
                    backgroundPosition: '-88px -110px',
                    backgroundSize: '190px 168px',
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block'
                }}></i></div> 
            </div>
            <div className={cx('row', 'searchbar' )}>
                <div className={cx('search-icon')}><FontAwesomeIcon icon={faMagnifyingGlass} /></div> <input type="text" placeholder="Tìm kiếm trong phần chơi game"/>
            </div>
            <div className={cx('row', 'activity' )}>
                <div>
                    <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/104218875_10150084225810255_9037238150764502013_n.png?stp=dst-jpg&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=9fffd1&amp;_nc_ohc=pRHgsNG8eicAX-5125C&amp;_nc_ht=scontent.fdad3-4.fna&amp;oh=00_AfAe2vzW15W2MYV_idG199MQqTKa87Y7rm_fnNssIhV-qA&amp;oe=64A78956&amp;dl=1" alt="" />
                </div>
                <div className={cx('activity-info' )}>
                    <div className={cx('activity-title' )}>HOẠT ĐỘNG TRONG GAME</div>
                    <div className={cx('name' )}>Lâm Lê</div>
                </div>
            </div>
                <hr />
            <div className={cx('play-game', 'row' )}>
                <div className={cx('play-game-icon-bg' )}>
                    <i className={cx('play-game-icon' )}></i>
                </div>
                <div>
                    <p>Chơi game</p>
                </div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <i className={cx('icon' )} style={{
                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/rwtd3u57sv_.png")',
                    backgroundPosition: '0px -192px',
                    backgroundSize: '26px 780px',
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block'  }}></i>
                </div>
                <div className={cx('title' )}>Thông báo</div>
            </div>
            <hr />
            <div className={cx( 'my-game' )}> 
                <div>
                <span>Game của bạn</span> <a href="#">Xem tất cả</a>
                </div>
                <p>Hãy lưu game vào phần Game của bạn để tạo lối tắt tại đây.</p>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <i className={cx('icon' )} style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/StbI0micuZc.png")',
                        backgroundPosition: '0px -284px',
                        backgroundSize: '26px 1622px',
                        width: '20px',
                        height: '20px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block'
                    }}></i>
                </div>
                <div className={cx('title' )}>Lưu game</div>
            </div>
            <hr />
            <div className={cx( 'game-row' )}>Hạng mục</div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <i className={cx('icon' )} style={{
                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/rwtd3u57sv_.png")',
                    backgroundPosition: '0px -324px',
                    backgroundSize: '26px 780px',
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block'
                }}></i>
                </div>
                <div className={cx('title' )}>Tất cả game</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/toy-gun_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Hành động</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/map_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Phiêu lưu</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/joystick_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Arcade</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/sword_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Chiến đấu</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/chess-piece_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Dùng bàn</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/map_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Phiêu lưu</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/joystick_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Arcade</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/sword_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Chiến đấu</div>
            </div>
            <div className={cx( 'game-row' )}>
                <div className={cx( 'icon-container' )}>
                <img src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/chess-piece_filled_20_primary-icon.png" alt="" style={{height: '20px', width: '20px'}}></img>
                </div>
                <div className={cx('title' )}>Dùng bàn</div>
            </div>
            
        </div>
        <div className={cx('tablet-sidebar')}>
                <span>Chơi game</span>
                <span>Hoạt động trong game</span>
                <span>Thông báo</span>
        </div>
        <div className={cx('content')}>
            <span className={cx('title')}>Đã chơi gần đây</span>
            <MultiItemSlider images={recentGames}></MultiItemSlider>
            <span className={cx('title')}>Game khác tương tự</span>
            <MultiItemSlider images={likableGames}></MultiItemSlider>
            <span className={cx('title')}>Game đáng chú ý</span>
            <div>
                <div className={cx("top-game")}>
                <img src='https://scontent.fdad3-1.fna.fbcdn.net/v/t39.2081-6/166665214_1412944285713983_6926699140382795353_n.jpg?stp=dst-jpg_p600x313&_nc_cat=110&ccb=1-7&_nc_sid=e26652&_nc_ohc=xCqGKrwakbcAX-3ui8r&_nc_ht=scontent.fdad3-1.fna&oh=00_AfAqUZcvYKdFFYdSlSGvjY_nJSCiOqhj3Sk6MZtrsFy7Jg&oe=648673C0'  />
                    <div>
                    <span>Circus Words</span>
                    <p>Word</p>
                    </div>
                </div>
            </div>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/DfLdGZVb2Cc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <span className={cx('title')}>Tất cả các game</span>
            <div className={cx('all-games')}>
            {allGames.map((game, index)=>(
                <div className={cx('game')}>
                    <img src={allGames[index].url} />
                    <div>
                    <span>{allGames[index].title}</span>
                    <p>Word</p>
                    </div>

                </div>
            )
            )}
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Games