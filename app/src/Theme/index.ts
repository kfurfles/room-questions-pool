import fonts from './Fonts'
import colors from './Colors'

export type ITheme = {
	fonts: typeof fonts
	colors: typeof colors
}

export default {
	fonts,
	colors
}