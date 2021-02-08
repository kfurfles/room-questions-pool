import { useTheme } from "@emotion/react";
import { ITheme } from "..";

export default function () {
	const {
		fonts
	} = useTheme() as ITheme

	return fonts
}