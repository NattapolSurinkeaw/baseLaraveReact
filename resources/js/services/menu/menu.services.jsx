import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';

export const menuData = [
  {
    id: 1,
    main_menu : "Page",
    sub_menu : [
      {
        id: 1,
        name: "Dashboard",
        icon: <DashboardIcon />,
        link: "/backoffice/dashboard",
        status_display: true,
      },
      {
        id: 2,
        name: "HomePage",
        icon: <HomeIcon />,
        link: "/backoffice/home",
        status_display: true,
        menu_list: [
          {
            id:1,
            list_name: "create",
          },
          {
            id:2,
            list_name: "edit",
          },
          {
            id:3,
            list_name: "delete",
          },
        ]
      },
      {
        id: 5,
        name: "MangeCategory",
        icon: <DashboardIcon />,
        link: "/backoffice/category",
        status_display: true,
      },
    ]
  },
  {
    id: 2,
    main_menu : "Content",
    sub_menu : [
      {
        id: 3,
        name: "ManageContent",
        icon: <DashboardIcon />,
        link: "/backoffice/page",
        status_display: true,
      }
    ]
  },
  {
    id: 3,
    main_menu : "User",
    sub_menu : [
      {
        id: 4,
        name: "ManageProfile",
        icon: <DashboardIcon />,
        link: "/backoffice/profile",
        status_display: false,
      }
    ]
  },
]