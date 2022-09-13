import { CLOSE_MENU, OPEN_LOGIN, OPEN_REGISTER } from "../types"

export const openLogin = () => {
    return {
        type: OPEN_LOGIN,
    }
}

export const openRegister = () => {
    return {
        type: OPEN_REGISTER,
    }
}

export const closeMenu = () => {
    return {
        type: CLOSE_MENU,
    }
}