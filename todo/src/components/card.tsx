import { cva, type VariantProps } from "class-variance-authority";
import { createElement, type ComponentProps, type JSX } from "react";

export const cardVariants = cva(`
		rounded-lg border border-solid border-gray-200
		bg-white shadow-sm
	`,{
		variants: {
			size:{
				none: "",
				md: "p-5"
			}
		},
		defaultVariants: {
			size: "none"
		}
	})

interface CardProps extends VariantProps<typeof cardVariants>,
	ComponentProps<"div"> {
		as?: keyof JSX.IntrinsicElements
	}

export default function Card({as="div", size, children, className, ...props}:CardProps){
	return createElement(
		as,
		{
			className: cardVariants({size, className}),
			...props
		},
		children
	)
}