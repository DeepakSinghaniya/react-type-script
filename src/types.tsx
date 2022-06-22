// typing props

import React, { useRef, useState } from "react"

type GreetingProp = {
    name: string
}
export const Greting = (prop: GreetingProp) => {

}

//children props
export type ChildrenProp = {
    children: React.ReactNode
}

//optional type
export type User = {
    name: string,
    age?: number
}

// event type
export type ButtonProp = {
    clickhandle: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export type InputProp = {
    clickhandle: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// StyleProp

export type StyleType = {
    styles: React.CSSProperties
}

// Destructure props at the time of defination

export const NewGreting = ({ name }: GreetingProp) => {
    return <h1>name</h1>
}

// type for useState
export const TestComp = () => {
    const [user, setUser] = useState<User | null>(null);
}

// type Assertion
export const TestCompTwo = () => {
    const [user, setUser] = useState<User>({} as User);
}

// userRef type
export const TestCompThree = () => {
    const ref = useRef<HTMLInputElement | null>(null);
}

// private prop type

export type PrivateType = {
    isLogined: boolean,
    component: React.ComponentType<StyleType>
}

//Template litrels and exclude
type HorigontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';
export type TostPosition = Exclude<`${HorigontalPosition}-${VerticalPosition}`, 'center-center'>;

//Warp Html element in React component
type ButtonPropType = {
    label: string,
} & React.ComponentProps<'button'>;

export const Button = ({ label, ...rest }: ButtonPropType) => {
    return <button {...rest}>{label}</button>
}

//Warp Html element in React component and omit
type ButtonPropTypeTwo = {
    label: string,
    children: string,
} & Omit<React.ComponentProps<'button'>, 'children'>;

export const ButtonTwo = ({ label, ...rest }: ButtonPropTypeTwo) => {
    return <button {...rest}>{label}</button>
}

// Extract the type of component
export const MyNewComp = (props: React.ComponentProps<typeof ButtonTwo>) => {

}

//