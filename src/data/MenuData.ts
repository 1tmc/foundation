interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        has_dropdown: false,
        title: "Causes",
        link: "/causes"
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Events",
        link: "/events"
    },
    {
        id: 4,
        has_dropdown: false,
        title: "Portfolio",
        link: "/portfolio-details"
    },
    {
        id: 5,
        has_dropdown: true,
        title: "About",
        link: "/about",
        sub_menus: [
            { link: "/about", title: "About Us" },
            { link: "/faqs", title: "FAQ Page" }
        ],
    },
    {
        id: 6,
        has_dropdown: true,
        title: "Contact",
        link: "/contact",
        sub_menus: [
            { link: "/contact", title: "Contact Us" },
            { link: "/blog", title: "Blog" },
            { link: "/blog-clasic", title: "Blog Classic" }
        ],
    }
];
export default menu_data;
