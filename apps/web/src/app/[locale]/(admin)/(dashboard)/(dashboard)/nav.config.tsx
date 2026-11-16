import { NavGroup } from "@/components/layout/navigation/types";
import { FULL_PATH_ROUTE } from "@myorg/shared/route";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PeopleIcon from "@mui/icons-material/People";
import { AdminDto } from "@myorg/shared/dto";

export const NAV_GROUPS: (role: AdminDto["role"]) => NavGroup[] = (role) => [
    {
        items: [
            {
                label: "pages.admin.name",
                href: FULL_PATH_ROUTE.admin.path,
                activeLink: {
                    strict: [FULL_PATH_ROUTE.admin.path],
                },
                icon: <HomeIcon />,
            },
        ],
    },
    ...(role === "SUPERADMIN"
        ? [
              {
                  items: [
                      {
                          label: "pages.admin.admins.name",
                          href: FULL_PATH_ROUTE.admin.admins.path,
                          activeLink: {
                              safe: [FULL_PATH_ROUTE.admin.admins.path],
                          },
                          icon: <PeopleIcon />,
                      },
                      {
                          label: "pages.admin.invitation.name",
                          href: FULL_PATH_ROUTE.admin.invitations.path,
                          activeLink: {
                              safe: [FULL_PATH_ROUTE.admin.invitations.path],
                          },
                          icon: <MailOutlineIcon />,
                      },
                  ],
              } satisfies NavGroup,
          ]
        : []),
];
