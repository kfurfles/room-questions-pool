import { useTheme } from "@emotion/react";
import { ITheme } from "..";

export default function () {
	const {
		colors
	} = useTheme() as ITheme

	return { ...colors }
}