import { Button } from "./Button"


export default {
    // title: 'My Category/Button Example',
    component: Button,
}

export const ButtonWithoutArgs = {}

export const ButtonWithArgs = {
    args: {
        myArgBool: true,
        myArgString: 'I am an arg, not a Button prop.',
    }
}