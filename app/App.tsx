declare const global: {HermesInternal: null | {}};

import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	StatusBar,
} from 'react-native';
import { ThemeProvider } from '@emotion/react'
import theme from './src/Theme'

import QPRoom from './src/pages/Room'

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<StatusBar barStyle="light-content" />
				<SafeAreaView style={{ flex: 1 }}>
					<QPRoom />
				</SafeAreaView>
			</ThemeProvider>
		</>
	);
};

console.log({ test: 'foo' })

const styles = StyleSheet.create({
scrollView: {
// backgroundColor: 'red',
// display: 'flex',
// flex: 1,
height: '100%'
// flexBasis: 10
}
});

export default App;