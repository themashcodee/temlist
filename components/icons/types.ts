import { ComponentPropsWithRef } from "react"

type Null<T> = T | null
type SVGProps = ComponentPropsWithRef<"svg">
type IconStaticProperties = {
	displayName: string | undefined
}

export type Icon<P = void> = ((
	_: P extends void ? SVGProps : SVGProps & P
) => Null<JSX.Element>) &
	Partial<IconStaticProperties>
