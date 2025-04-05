
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { PowerIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/16/solid";
import { LockClosedIcon } from "@heroicons/react/16/solid";
import { IdentificationIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { PresentationChartLineIcon } from "@heroicons/react/16/solid";
import {PuzzlePieceIcon} from "@heroicons/react/16/solid";

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
            path: "logout",
        },
        {
            name: "Login",
            icon: LockClosedIcon,
            loginRequired: false,
            path: "login",
        },
        {
            name: "Sign Up",
            icon: IdentificationIcon,
            loginRequired: false,
            path: "signup",
        },
    ]
    },
    
    {
        name: "MainMenu",
        icon: Bars4Icon,
        loginRequired: true,
        sub: [
            {
                name: "Favourites",
                icon: HeartIcon,
                loginRequired: true,
                path: "favourites",
            },
            {
                name: "Arena",
                icon: PuzzlePieceIcon,
                loginRequired: true,
                path: "arena",
            },
            {
                name: "Ranking",
                icon: PresentationChartLineIcon,
                loginRequired: true,
                path: "ranking",
            },
            {
                name: "Edit",
                icon: PencilSquareIcon,
                loginRequired: true,
                path: "edit",
            },
        ]
    }
        
]