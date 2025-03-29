
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { PowerIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/16/solid";
import { LockClosedIcon } from "@heroicons/react/16/solid";
import { IdentificationIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { PresentationChartLineIcon } from "@heroicons/react/16/solid";
import { PlayCircleIcon } from "@heroicons/react/16/solid";

export const Menus = [
    {
    name: "UserMenu",
    icon: UserCircleIcon,
    loginRequired: false,
    sub: [
        {
            name: "Sign out",
            icon: PowerIcon,
            loginRequired: true,
        },
        {
            name: "Login",
            icon: LockClosedIcon,
            loginRequired: false,
        },
        {
            name: "Sign in",
            icon: IdentificationIcon,
            loginRequired: false,
        },
    ]
    },
    
    {
        name: "MainMenu",
        icon: Bars4Icon,
        loginRequired: true,
        sub: [
            {
                name: "Favourite",
                icon: HeartIcon,
                loginRequired: true,
            },
            {
                name: "Arena",
                icon: PlayCircleIcon,
                loginRequired: true,
            },
            {
                name: "Ranking",
                icon: PresentationChartLineIcon,
                loginRequired: true,
            },
            {
                name: "Edition",
                icon: PencilSquareIcon,
                loginRequired: true,
            },
        ]
    }
        
]