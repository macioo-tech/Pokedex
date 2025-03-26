
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
    loggedIn: false,
    sub: [
        {
            name: "Sign out",
            icon: PowerIcon,
            loggedIn: true,
        },
        {
            name: "Login",
            icon: LockClosedIcon,
            loggedIn: false,
        },
        {
            name: "Sign in",
            icon: IdentificationIcon,
            loggedIn: false,
        },
    ]
    },
    
    {
        name: "MainMenu",
        icon: Bars4Icon,
        loggedIn: true,
        sub: [
            {
                name: "Favourite",
                icon: HeartIcon,
                loggedIn: true,
            },
            {
                name: "Arena",
                icon: PlayCircleIcon,
                loggedIn: true,
            },
            {
                name: "Ranking",
                icon: PresentationChartLineIcon,
                loggedIn: true,
            },
            {
                name: "Edition",
                icon: PencilSquareIcon,
                loggedIn: true,
            },
        ]
    }
        
]